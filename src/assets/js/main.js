import { cart_1, cart_2, cart_3, cart_4, cart_5, cart_6, cart_7, cart_8 } from "./name_constants"

let arrCard = [cart_1, cart_2, cart_3, cart_4, cart_5, cart_6, cart_7, cart_8];

class Cards {

    constructor(options) {
        this.img = options.img
        this.cards_text = options.cards_text
    }

    text_change(text) {
        this.cards_text = text
    }

    img_change(img) {
        this.img = img
    }

}


let img_cart_action_1 = img_action_1.src
let img_cart_action_2 = img_action_2.src
let img_cart_action_3 = img_action_3.src
let img_cart_Adjective = img_Adjective.src
let img_cart_animal_1 = img_animal_1.src
let img_cart_animal_2 = img_animal_2.src
let img_cart_Clothes = img_Clothes.src
let img_cart_emotion = img_emotion.src
const card_Action_1 = new Cards({
    img: img_cart_action_1,
    cards_text: card_text_1.innerText
})
const card_Action_2 = new Cards({
    img: img_cart_action_2,
    cards_text: card_text_2.innerText
})
const card_Action_3 = new Cards({
    img: img_cart_action_3,
    cards_text: card_text_3.innerText
})
const card_Adjective = new Cards({
    img: img_cart_Adjective,
    cards_text: card_text_4.innerText
})
const card_Animal_1 = new Cards({
    img: img_cart_animal_1,
    cards_text: card_text_5.innerText
})
const card_Animal_2 = new Cards({
    img: img_cart_animal_2,
    cards_text: card_text_6.innerText
})
const cart_Clothes = new Cards({
    img: img_cart_Clothes,
    cards_text: card_text_7.innerText
})
const cart_emotion = new Cards({
    img: img_cart_emotion,
    cards_text: card_text_8.innerText
})


main_page.addEventListener('click', (event) => { //Кнопка главное меню (бургер меню)
    cart_container.style.display = 'flex'
    cart_container_cards.style.display = 'none'
    burger_menu_Counter++
    burger_el_1.style.transform = 'translate(0px, 0px)rotate(0deg)';
    burger_el_1.style.color = 'black';
    burger_el_2.style.display = 'inline-block';
    burger_el_3.style.transform = 'translate(0px, 0px) rotate(0deg)';
    burger_el_3.style.color = 'black';
    navMenu.style.transform = 'translate(-143%,36vh)';
    blackout.style.backgroundColor = 'rgba(0,0,0,0)';

    function blackoutFun() {
        blackout.style.display = 'none';
    }
    setTimeout(blackoutFun, 300);
});


let tes = cart_container.querySelectorAll('li');
tes.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if (event.target.className == 'card-img-top' || event.target.className == 'card-text' || event.target.className == 'card-body') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
        }
        if (elem.childNodes[1].id == 'cart_1') {
            card_Action_1.text_change(card_text_1.innerText = 'cry')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/cry.jpg')
        }
        if (elem.childNodes[1].id == 'cart_1') {
            card_Action_2.text_change(card_text_2.innerText = 'dance')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/dance.jpg')
        }
        if (elem.childNodes[1].id == 'cart_1') {
            card_Action_3.text_change(card_text_3.innerText = 'dive')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/dive.jpg')
        }
        if (elem.childNodes[1].id == 'cart_1') {
            card_Adjective.text_change(card_text_4.innerText = 'draw')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/draw.jpg')
        }
        if (elem.childNodes[1].id == 'cart_1') {
            card_Animal_1.text_change(card_text_5.innerText = 'fish')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/fish.jpg')
        }
        if (elem.childNodes[1].id == 'cart_1') {
            card_Animal_2.text_change(card_text_6.innerText = 'fly')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/fly.jpg')
        }
        if (elem.childNodes[1].id == 'cart_1') {
            cart_Clothes.text_change(card_text_7.innerText = 'hug')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/Clothes.jpg')
        }
        if (elem.childNodes[1].id == 'cart_1') {
            cart_emotion.text_change(card_text_8.innerText = 'jump')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/jump.jpg')
        }
    });
});

let burger_menu_Counter = 0;
burger_menu.addEventListener('click', (event) => { //Функц.БургерМеню
    burger_menu_Counter++
    if (burger_menu_Counter % 2 == true) {
        blackout.style.display = 'block';
        burger_el_1.style.transform = 'translate(20px, 3px)rotate(45deg)';
        burger_el_1.style.color = 'red';
        burger_el_2.style.display = 'none';
        burger_el_3.style.transform = 'translate(-18px, 3px) rotate(-45deg)';
        burger_el_3.style.color = 'red';
        navMenu.style.transform = 'translate(-73%,36vh)';
        blackout.style.backgroundColor = 'rgba(0,0,0,.68)';
    }
    if (burger_menu_Counter % 2 != true) {
        burger_el_1.style.transform = 'translate(0px, 0px)rotate(0deg)';
        burger_el_1.style.color = 'black';
        burger_el_2.style.display = 'inline-block';
        burger_el_3.style.transform = 'translate(0px, 0px) rotate(0deg)';
        burger_el_3.style.color = 'black';
        navMenu.style.transform = 'translate(-143%,36vh)';
        blackout.style.backgroundColor = 'rgba(0,0,0,0)';

        function blackoutFun() {
            blackout.style.display = 'none';
        }
        setTimeout(blackoutFun, 300);
    }
})

blackout.addEventListener('click', (event) => { //Функц.БургерМеню (нажатие на любую область экрана)
    burger_menu_Counter++
    burger_el_1.style.transform = 'translate(0px, 0px)rotate(0deg)';
    burger_el_1.style.color = 'black';
    burger_el_2.style.display = 'inline-block';
    burger_el_3.style.transform = 'translate(0px, 0px) rotate(0deg)';
    burger_el_3.style.color = 'black';
    navMenu.style.transform = 'translate(-143%,36vh)';
    blackout.style.backgroundColor = 'rgba(0,0,0,0)';

    function blackoutFun() {
        blackout.style.display = 'none';
    }
    setTimeout(blackoutFun, 300);
})

let checkbox_but = 0;
checkbox.addEventListener('click', (event) => { //Функц.Чекбокс
    checkbox_but++
    if (checkbox_but % 2 == true) {
        arrCard.forEach(el => el.style.background = 'linear-gradient(90deg, rgba(110, 0, 255, 0.7) 0px, rgba(210, 0, 224, 0.99) 54%, rgb(204, 0, 255) 0px)');
    }
    if (checkbox_but % 2 != true) {
        arrCard.forEach(el => el.style.background = 'linear-gradient(90deg,rgba(255,94,94,.7) 0,rgba(239,1,124,.99) 54%,#ef017c 0)');
    }
})


// navbar.addEventListener('click', (event) => { //Кнопка главное меню
//     location.href = 'index.html';
// });



let element = document.body; //запрет выделения текста
element.onselectstart = function() { return false; }
element.onmousedown = function() { return false; }