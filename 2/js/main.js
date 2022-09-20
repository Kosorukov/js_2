class GoodsList  {
    constructor(goodsList = '.products') {
        this.goodsList = goodsList;
        this.goods = [];
    }

    fetchGoods(){
        this.goods = [
        {id: 1, title: 'Notebook', price: 2000},
        {id: 2, title: 'Mouse', price: 20},
        {id: 3, title: 'Keyboard', price: 200},
        {id: 4, title: 'Gamepad', price: 50}
    ]
    }

    renderCatalog(){
        let listHTML = '';
        this.goods.forEach(good => {
            const product = new GoodsItem(good); 
            listHTML += product.renderGoodsItem();
        });
        document.querySelector(this.goodsList).innerHTML = listHTML;
    }

    getSumPriceAllGoods(){
        let totalPrice = 0;
        this.goods.forEach(good => totalPrice += Number(good.price));
        return totalPrice;
    }
}

class GoodsItem {
    constructor(product,img='https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    renderGoodsItem(){
        return `<div class="product-item">
                 <img src="${this.img}">
                 <h3>${this.title}</h3>
                 <p>${this.price}</p>
                 <button class="buy-btn">Купить</button>
             </div>`
    }
}

let goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.renderCatalog();
console.log(goodsList.getSumPriceAllGoods());