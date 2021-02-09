import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-mssql-fulltext-test-stand-language', 'Unit | Serializer | new-platform-mssql-fulltext-test-stand-language', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-mssql-fulltext-test-stand-language',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
