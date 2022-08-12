export const state = () => ({
    storeCart: [],
    isLoggedIn: false
});
export const getters = {
    cartItemCount(state) {
        return state.storeCart.length;
    },

    cartTotalPrice(state) {
        let total = 0;

        state.storeCart.forEach((item) => {
            total += item.product.price * item.count;
        });

        return total;
    },
}
export const mutations = {
    ADD_TO_CART(
        state,
        { product, quantity, count, name, price }
    ) {
        let productInCart = state.storeCart.find((item) => {
            return item.product.name === product.name;
        });

        if (productInCart) {
            productInCart.quantity += quantity;
            return;
        }

        state.storeCart.push({
            product,
            quantity,
            count,
            name,
            price,
        });
    },
    SET_CART(state, cartItems) {
        state.storeCart = cartItems;
    },
    SET_LOG(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    },
    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.storeCart = state.storeCart.filter((item) => {
            return item.product.name !== product.name;
        });
    },
    UPDATE_CART(state, { product, quantity }) {
        // let Product = state.storeCart.findIndex((item) => {
        //     item.product._id === product._id;
        // });
        // console.log("index:::::", Product + 1);

        // state.storeCart[Product + 1].quantity = quantity

        let productInCart = state.storeCart.find((item) => {
            // console.log(item.product._id, product);
            return item.product.name === product.name;
        });

        console.log(productInCart);

        if (productInCart) {
            console.log(productInCart.quantity, quantity);
            productInCart.quantity = quantity;
            return;
        }
    },

    CLEAR_CART_ITEMS(state) {
        state.storeCart = [];
    },
};

export const actions = {
    toggleLogIn: ({ commit }, truthy) => {
        commit("SET_LOG", truthy)
    },
    addProductToCart: (
        { commit },
        { product, quantity, count, name, price, }
    ) => {
        commit("ADD_TO_CART", {
            product,
            quantity,
            count,
            name,
            price,
        });
    },
    removeProductFromCart: ({ commit }, product) => {
        commit("REMOVE_PRODUCT_FROM_CART", product);
    },
    updateCart: ({ commit }, { product, quantity }) => {
        commit("UPDATE_CART", { product, quantity });
    },
    clearCartItems: ({ commit }) => {
        commit("CLEAR_CART_ITEMS");
    },
};