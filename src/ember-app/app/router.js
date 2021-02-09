import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-mssql-fulltext-test-stand-author-l');
  this.route('new-platform-mssql-fulltext-test-stand-author-e',
  { path: 'new-platform-mssql-fulltext-test-stand-author-e/:id' });
  this.route('new-platform-mssql-fulltext-test-stand-author-e.new',
  { path: 'new-platform-mssql-fulltext-test-stand-author-e/new' });
  this.route('new-platform-mssql-fulltext-test-stand-book-l');
  this.route('new-platform-mssql-fulltext-test-stand-book-e',
  { path: 'new-platform-mssql-fulltext-test-stand-book-e/:id' });
  this.route('new-platform-mssql-fulltext-test-stand-book-e.new',
  { path: 'new-platform-mssql-fulltext-test-stand-book-e/new' });
  this.route('new-platform-mssql-fulltext-test-stand-country-l');
  this.route('new-platform-mssql-fulltext-test-stand-country-e',
  { path: 'new-platform-mssql-fulltext-test-stand-country-e/:id' });
  this.route('new-platform-mssql-fulltext-test-stand-country-e.new',
  { path: 'new-platform-mssql-fulltext-test-stand-country-e/new' });
  this.route('new-platform-mssql-fulltext-test-stand-language-l');
  this.route('new-platform-mssql-fulltext-test-stand-language-e',
  { path: 'new-platform-mssql-fulltext-test-stand-language-e/:id' });
  this.route('new-platform-mssql-fulltext-test-stand-language-e.new',
  { path: 'new-platform-mssql-fulltext-test-stand-language-e/new' });
});

export default Router;
