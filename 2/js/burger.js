// const inputs = document.querySelectorAll('input');
// document.getElementById('btn').addEventListener('click', () => {
//     let total = 0;
//     let kcal = 0;
//     for (let i of inputs) {
//         if (i.checked) {
//             total += Number(i.dataset['price']);
//             kcal += Number(i.dataset['kcal']);
//         }
//     }
//     document.querySelector('.calc__text').innerHTML = `Стоимость бургера ${total} рублей <br> Количество калорий ${kcal} kcal`;
// });

class Burger {
    constructor(size, fill, topping, price) {
        this.size = size;
        this.fill = fill;
        this.topping = topping;
        this.price = price;
    }
}

let cart = [];
let total = 0;

document.getElementById('btn').addEventListener('click', () => {
    const paramSize = document.querySelectorAll('.burger__size input')
    const paramFill = document.querySelectorAll('.burger__fill input');
    const paramTopping = document.querySelectorAll('.burger__topping input');
    let fill = '';
    let topping = [];
    let size = '';
    for (let i of paramSize) {
        if (i.checked) {
            size = i.attributes['value'].value;
        }
    }
    for (let i of paramFill) {
        if (i.checked) {
            fill = i.attributes['value'].value;
        }
    }
    for (let i of paramTopping) {
        if (i.checked) {
            topping.push(i.attributes['value'].value);
        }
    }

    const inputs = document.querySelectorAll('input');
    let price = 0;
    for (let i of inputs) {
        if (i.checked) {
            price += Number(i.dataset['price']);
        }
    }
    let burger = new Burger(size, fill, topping, price);
    cart.push(burger);
    total += burger.price;
    console.log(cart);
    document.querySelector('.calc__text').innerHTML = `В корзине ${cart.length} бургеров на сумму ${total} рублей`;

});
