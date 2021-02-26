#!/bin/sh
export DBType=PostgeSql
export DBPath=/var/lib/pgsql/data/
export Project=test
imagePrefix=my_project
# set

#export nocache=--no-cache
export dbtype=`echo $DBType | tr '[:upper:]' '[:lower:]'`
export appImageName=${imagePrefix}/${Project}/app
export dbImageName=${imagePrefix}/${Project}/${dbtype}

# Рекурсивное копировние содержимого каталога Docker
rsync  -av Docker/ .

echo "NameVirtualHost *:80
<VirtualHost *:80>
  ServerName $Project.mono.ics.perm.ru
  ServerAdmin admin@server
  MonoServerPath $Project.mono.ics.perm.ru "/usr/bin/mod-mono-server4"
  MonoDebug $Project.mono.ics.perm.ru true
  MonoSetEnv $Project.mono.ics.perm.ru MONO_IOMAP=all
  MonoApplications $Project.mono.ics.perm.ru "/:/var/www/vhosts/project"
  AddDefaultCharset utf-8
  <Location "/">
    Allow from all
    Order allow,deny
    MonoSetServerAlias $Project.mono.ics.perm.ru
    SetHandler mono
    #SetOutputFilter DEFLATE
  </Location>
  ErrorLog /var/log/httpd2/project_error_log
  LogLevel debug
  CustomLog /var/log/httpd2/project_access_log common
</VirtualHost>
" > vhosts.conf


# Создание образа приложения
docker build $nocache -t $appImageName .
rm -f vhosts.conf

# Создание образа базы данных
(
cd src/SQL
docker build $nocache -f Dockerfile.$DBType -t $dbImageName .
)

# Создание файла описания сервисов
echo "
version: '3'

services:
  app:
    image: $appImageName
    links:
      - app-postgres-db:app-postgres-db
    ports:
      - 80:80

  app-postgres-db:
    image: $dbImageName
    volumes:
      - DB:$DBPath
volumes:
  DB:
" > docker-compose.yml

# Создание скрипта запуска сервисов
# echo "
# #!/bin/sh
#
# docker-compose -p $Project up -d
# " > start.sh

# Создание скрипта остановки сервисов
echo "
#!/bin/sh

docker-compose -p $Project down
" > stop.sh

chmod a+x stop.sh

docker-compose -p $Project up -d
