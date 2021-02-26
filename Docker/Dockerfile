FROM node:10 as ember_app


COPY /src /src

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;



RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker


#FROM mono:latest as backend

#COPY /src  /src

# RUN \
#  cd ;\
#  nuget restore MssqlFulltextTestStand.sln; \
#  msbuild /p:Configuration=Release MssqlFulltextTestStand.sln



FROM flexberry/alt.p8-apache2-mono:latest

MAINTAINER mail@flexberry.net

#COPY --from=backend /Flexberry/NewPlatform.Flexberry.ServiceBus.Editor/ODataBackend /var/www/vhosts/project
COPY --from=ember_app /src/ember-app/dist /var/www/vhosts/project
COPY vhosts.conf /conf
