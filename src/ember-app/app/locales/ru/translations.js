import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformMssqlFulltextTestStandAuthorLForm from './forms/new-platform-mssql-fulltext-test-stand-author-l';
import NewPlatformMssqlFulltextTestStandBookLForm from './forms/new-platform-mssql-fulltext-test-stand-book-l';
import NewPlatformMssqlFulltextTestStandCountryLForm from './forms/new-platform-mssql-fulltext-test-stand-country-l';
import NewPlatformMssqlFulltextTestStandLanguageLForm from './forms/new-platform-mssql-fulltext-test-stand-language-l';
import NewPlatformMssqlFulltextTestStandAuthorEForm from './forms/new-platform-mssql-fulltext-test-stand-author-e';
import NewPlatformMssqlFulltextTestStandBookEForm from './forms/new-platform-mssql-fulltext-test-stand-book-e';
import NewPlatformMssqlFulltextTestStandCountryEForm from './forms/new-platform-mssql-fulltext-test-stand-country-e';
import NewPlatformMssqlFulltextTestStandLanguageEForm from './forms/new-platform-mssql-fulltext-test-stand-language-e';
import NewPlatformMssqlFulltextTestStandAuthorModel from './models/new-platform-mssql-fulltext-test-stand-author';
import NewPlatformMssqlFulltextTestStandBookModel from './models/new-platform-mssql-fulltext-test-stand-book';
import NewPlatformMssqlFulltextTestStandCountryModel from './models/new-platform-mssql-fulltext-test-stand-country';
import NewPlatformMssqlFulltextTestStandLanguageModel from './models/new-platform-mssql-fulltext-test-stand-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-mssql-fulltext-test-stand-author': NewPlatformMssqlFulltextTestStandAuthorModel,
    'new-platform-mssql-fulltext-test-stand-book': NewPlatformMssqlFulltextTestStandBookModel,
    'new-platform-mssql-fulltext-test-stand-country': NewPlatformMssqlFulltextTestStandCountryModel,
    'new-platform-mssql-fulltext-test-stand-language': NewPlatformMssqlFulltextTestStandLanguageModel
  },

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-mssql-fulltext-test-stand-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-mssql-fulltext-test-stand-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-mssql-fulltext-test-stand-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-mssql-fulltext-test-stand-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'new-platform-mssql-fulltext-test-stand-author-l': NewPlatformMssqlFulltextTestStandAuthorLForm,
    'new-platform-mssql-fulltext-test-stand-book-l': NewPlatformMssqlFulltextTestStandBookLForm,
    'new-platform-mssql-fulltext-test-stand-country-l': NewPlatformMssqlFulltextTestStandCountryLForm,
    'new-platform-mssql-fulltext-test-stand-language-l': NewPlatformMssqlFulltextTestStandLanguageLForm,
    'new-platform-mssql-fulltext-test-stand-author-e': NewPlatformMssqlFulltextTestStandAuthorEForm,
    'new-platform-mssql-fulltext-test-stand-book-e': NewPlatformMssqlFulltextTestStandBookEForm,
    'new-platform-mssql-fulltext-test-stand-country-e': NewPlatformMssqlFulltextTestStandCountryEForm,
    'new-platform-mssql-fulltext-test-stand-language-e': NewPlatformMssqlFulltextTestStandLanguageEForm
  },

});

export default translations;
