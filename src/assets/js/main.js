class Cards {

    constructor(options) {
        this.img = options.img
        this.cards_text = options.cards_text
    }

    text_change() {
        this.cards_text = 'новый текст!'
    }

    img_change() {
        this.img = 'новый имг'
    }

}

const catr = new Cards({
    img: 'img',
    cards_text: 'текст карточки'
})
catr.text_change()



cart_1.addEventListener('click', (event) => { //переход по ссылке
    console.log(event.target)
    location.href = 'cards.html';

})

let burger_menu_Counter = 0;
burger_menu.addEventListener('click', (event) => { //меняется цвет кнопок при нажатии, работа с кнопками
    burger_menu_Counter++
    if (burger_menu_Counter % 2 == true) {
        burger_el_1.style.transform = 'translate(20px, 3px)rotate(45deg)';
        burger_el_1.style.color = 'red';
        burger_el_2.style.display = 'none';
        burger_el_3.style.transform = 'translate(-18px, 3px) rotate(-45deg)';
        burger_el_3.style.color = 'red';
        navMenu.style.transform = 'translate(-73%,36vh)';
    }
    if (burger_menu_Counter % 2 != true) {
        burger_el_1.style.transform = 'translate(0px, 0px)rotate(0deg)';
        burger_el_1.style.color = 'black';
        burger_el_2.style.display = 'inline-block';
        burger_el_3.style.transform = 'translate(0px, 0px) rotate(0deg)';
        burger_el_3.style.color = 'black';
        navMenu.style.transform = 'translate(-143%,36vh)';
    }
})