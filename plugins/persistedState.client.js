import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    cart: store.state.cart.storeCart
  })(store);
};
