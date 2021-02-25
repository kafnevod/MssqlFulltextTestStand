import OfflineGlobals from 'ember-flexberry/services/offline-globals';
import { merge } from '@ember/polyfills';

export default OfflineGlobals.extend({
  init() {
    this._super(...arguments);
    this.setOnlineAvailable(false);
  },
  getOfflineSchema() {
    let parentSchema = this._super(...arguments);
    let returnedSchema = merge(parentSchema, {
      'new-platform-mssql-fulltext-test-stand-author': 'id,name',
			'new-platform-mssql-fulltext-test-stand-book': 'id,name,capacity,annotation,agenda,picturesAuthor,reaction,copyright,libraryCode,tags,theme,topic,corrector,format,font,publishDate,bestseller,language,author,country',
			'new-platform-mssql-fulltext-test-stand-country': 'id,name',
			'new-platform-mssql-fulltext-test-stand-language': 'id,name'
    });

    return returnedSchema;
  }
});
