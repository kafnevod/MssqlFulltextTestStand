import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-mssql-fulltext-test-stand-book', 'Unit | Model | new-platform-mssql-fulltext-test-stand-book', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-mssql-fulltext-test-stand-author',
    'model:new-platform-mssql-fulltext-test-stand-book',
    'model:new-platform-mssql-fulltext-test-stand-country',
    'model:new-platform-mssql-fulltext-test-stand-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
