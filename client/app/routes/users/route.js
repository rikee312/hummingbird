import Route from 'ember-route';
import get from 'ember-metal/get';
import DataRouteErrorMixin from 'client/mixins/data-route-error';
import CanonicalUrlRedirect from 'client/mixins/canonical-url-redirect';

export default Route.extend(DataRouteErrorMixin, CanonicalUrlRedirect, {
  model({ name }) {
    if (name.match(/\D+/)) {
      return get(this, 'store').query('user', { filter: { name } })
        .then((records) => get(records, 'firstObject'));
    } else {
      return get(this, 'store').findRecord('user', name);
    }
  }
});
