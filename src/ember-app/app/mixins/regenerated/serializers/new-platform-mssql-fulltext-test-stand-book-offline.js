import $ from 'jquery';
import Mixin from '@ember/object/mixin';

export let OfflineSerializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      language: { serialize: 'id', deserialize: 'records' },
      author: { serialize: 'id', deserialize: 'records' },
      country: { serialize: 'id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
