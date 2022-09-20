const inputs = document.querySelectorAll('input');
document.getElementById('btn').addEventListener('click', () => {
    let total = 0;
    let kcal = 0;
    for (let i of inputs) {
        if (i.checked) {
            total += Number(i.dataset['price']);
            kcal += Number(i.dataset['kcal']);
            document.querySelector('.calc__text').innerHTML = `Стоимость бургера ${total} рублей <br> Количество калорий ${kcal} kcal`;
        }
    }
});
