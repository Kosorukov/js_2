Vue.component('cart', {
    props: ['cart', 'img'],
    template: `<div class="cart-block" v-show="$root.show">
    <cartitem class="cart-item" v-for="item of cart" :cartitem="item">
    </cartitem>
    <div v-if="$root.cartTotal > 0">ИТОГО стоимость корзины: {{
        $root.cartTotal }}</div>
    <div v-show="$root.cart.length == 0">CART IS EMPTY</div>
</div>`
});
Vue.component('cartitem', {
    props: ['cartitem', 'img'],
    template: `        <div class="product-bio">
    <img :src="$root.imgCatalog" alt="Some img" width="100">
    <div class="product-desc">
        <p class="product-title">{{ cartitem.product_name }}
        </p>
        <p class="product-quantity">Quantity:
            {{ cartitem.quantity }}</p>
        <p class="product-single-price"> {{ cartitem.price
            }}
            each</p>
    </div>
    <div class="right-block">
        <p class="product-price">Стоимость: {{
            cartitem.quantity
            *
            cartitem.price }}
        </p>
        <button class="del-btn"
            data-id="${this.id_product}"
            @click="$root.removeProduct(cartitem)">&times;</button>
    </div>
</div>
`
});