import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-mssql-fulltext-test-stand-country-l': {
            caption: 'new-platform-mssql-fulltext-test-stand-country-l',
            title: 'new-platform-mssql-fulltext-test-stand-country-l'
          },
          'new-platform-mssql-fulltext-test-stand-book-l': {
            caption: 'new-platform-mssql-fulltext-test-stand-book-l',
            title: 'new-platform-mssql-fulltext-test-stand-book-l'
          },
          'new-platform-mssql-fulltext-test-stand-author-l': {
            caption: 'new-platform-mssql-fulltext-test-stand-author-l',
            title: 'new-platform-mssql-fulltext-test-stand-author-l'
          },
          'new-platform-mssql-fulltext-test-stand-language-l': {
            caption: 'new-platform-mssql-fulltext-test-stand-language-l',
            title: 'new-platform-mssql-fulltext-test-stand-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
