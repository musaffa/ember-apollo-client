import Ember from 'ember';
import BaseQueryManager from 'ember-apollo-client/mixins/base-query-manager';

const { Mixin } = Ember;

export default Mixin.create(BaseQueryManager, {
  beforeModel() {
    this.get('apollo').markSubscriptionsStale();
    return this._super(...arguments);
  },

  resetController(_controller, isExiting) {
    this._super(...arguments);
    this.get('apollo').unsubscribeAll(!isExiting);
  },
});
