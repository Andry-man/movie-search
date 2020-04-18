import { cart_1, cart_2, cart_3, cart_4, cart_5, cart_6, cart_7, cart_8, card_button_switch, card, button_start, cart_01, cart_02, cart_03, cart_04, cart_05, cart_06, cart_07, cart_08 } from "./name_constants"
import { translations, translationsRevers } from "./translations";
let burger_menu_Counter = 0;
let arrCard = [cart_1, cart_2, cart_3, cart_4, cart_5, cart_6, cart_7, cart_8];
export let arrCardCardInfo = [cart_01, cart_02, cart_03, cart_04, cart_05, cart_06, cart_07, cart_08];



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


main_page.addEventListener('click', (event) => { //buttonBurgerMenu (action main_page)
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
let burgerM = list_menu.querySelectorAll('li');

burgerM.forEach(function(elem) { //burgerMenuNav
    elem.addEventListener("click", function() {
        if (elem.id == 'menu_action_1') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
            card_Action_1.text_change(card_text_1.innerText = 'cry')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/cry.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'dance')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/dance.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'dive')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/dive.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'draw')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/draw.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'fish')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/fish.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'fly')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/fly.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'hug')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/Clothes.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'hug')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/Clothes.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'jump')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/jump.jpg')

        }

        if (elem.id == 'menu_action_2') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
            card_Action_1.text_change(card_text_1.innerText = 'open')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/open.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'skip')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/skip.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'play')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/play.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'point')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/point.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'ride')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/ride.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'run')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/run.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'swim')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/swim.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'sing')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/sing.jpg')
        }

        if (elem.id == 'menu_action_3') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
            card_Action_1.text_change(card_text_1.innerText = 'argue')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/argue.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'build')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/build.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'carry')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/carry.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'catch')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/catch.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'drive')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/drive.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'drop')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/drop.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'pull')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/pull.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'push')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/push.jpg')
        }
        if (elem.id == 'menu_adjective') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
            card_Action_1.text_change(card_text_1.innerText = 'big')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/big.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'small')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/small.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'fast')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/fast.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'slow')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/slow.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'friendly')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/friendly.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'unfriendly')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/unfriendly.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'young')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/young.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'old')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/old.jpg')
        }
        if (elem.id == 'menu_animal_1') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
            card_Action_1.text_change(card_text_1.innerText = 'cat')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/cat.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'chick')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/chick.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'chicken')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/chicken.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'dog')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/dog.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'horse')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/horse.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'pig')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/pig.png')
            cart_Clothes.text_change(card_text_7.innerText = 'rabbit')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/rabbit.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'sheep')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/sheep.jpg')
        }
        if (elem.id == 'menu_animal_2') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
            card_Action_1.text_change(card_text_1.innerText = 'bird')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/bird.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'fish')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/fish1.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'frog')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/frog.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'giraffe')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/giraffe.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'lion')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/lion.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'mouse')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/mouse.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'turtle')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/turtle.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'dolphin')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/dolphin.jpg')
        }

        if (elem.id == 'menu_clothes') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
            card_Action_1.text_change(card_text_1.innerText = 'skirt')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/skirt.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'pants')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/pants.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'blouse')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/blouse.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'dress')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/dress.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'boot')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/boot.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'shirt')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/shirt.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'coat')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/coat.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'shoe')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/shoe.jpg')

        }

        if (elem.id == 'menu_emotion') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
            card_Action_1.text_change(card_text_1.innerText = 'sad')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/sad.png')
            card_Action_2.text_change(card_text_2.innerText = 'angry')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/angry.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'happy')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/happy.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'tired')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/tired.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'surprised')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/surprised.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'scared')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/scared.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'smile')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/smile.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'laugh')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/laugh.jpg')
        }
        if (elem.id == 'menu_emotion' || elem.id == 'menu_clothes' || elem.id == 'menu_animal_2' || elem.id == 'menu_adjective' || elem.id == 'menu_animal_1' || elem.id == 'menu_action_3' || elem.id == 'menu_action_2' || elem.id == 'menu_action_1') {
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
        }
    });
});

let tes = cart_container.querySelectorAll('li');
tes.forEach(function(elem) { //change information on card
    elem.addEventListener("click", function() {
        if (event.target.className == 'card-img-top' || event.target.className == 'card-text' || event.target.className == 'card-body') {
            cart_container.style.display = 'none'
            cart_container_cards.style.display = 'flex'
        }
        if (elem.childNodes[1].id == 'cart_1') {
            card_Action_1.text_change(card_text_1.innerText = 'cry')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/cry.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'dance')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/dance.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'dive')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/dive.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'draw')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/draw.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'fish')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/fish.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'fly')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/fly.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'hug')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/Clothes.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'hug')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/Clothes.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'jump')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/jump.jpg')
        }

        if (elem.childNodes[1].id == 'cart_2') {
            card_Action_1.text_change(card_text_1.innerText = 'open')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/open.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'skip')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/skip.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'play')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/play.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'point')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/point.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'ride')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/ride.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'run')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/run.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'swim')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/swim.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'sing')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/sing.jpg')
        }

        if (elem.childNodes[1].id == 'cart_3') {
            card_Action_1.text_change(card_text_1.innerText = 'argue')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/argue.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'build')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/build.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'carry')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/carry.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'catch')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/catch.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'drive')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/drive.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'drop')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/drop.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'pull')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/pull.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'push')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/push.jpg')
        }
        if (elem.childNodes[1].id == 'cart_4') {
            card_Action_1.text_change(card_text_1.innerText = 'big')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/big.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'small')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/small.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'fast')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/fast.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'slow')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/slow.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'friendly')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/friendly.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'unfriendly')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/unfriendly.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'young')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/young.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'old')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/old.jpg')
        }
        if (elem.childNodes[1].id == 'cart_5') {
            card_Action_1.text_change(card_text_1.innerText = 'cat')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/cat.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'chick')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/chick.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'chicken')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/chicken.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'dog')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/dog.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'horse')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/horse.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'pig')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/pig.png')
            cart_Clothes.text_change(card_text_7.innerText = 'rabbit')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/rabbit.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'sheep')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/sheep.jpg')
        }
        if (elem.childNodes[1].id == 'cart_6') {
            card_Action_1.text_change(card_text_1.innerText = 'bird')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/bird.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'fish')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/fish1.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'frog')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/frog.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'giraffe')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/giraffe.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'lion')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/lion.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'mouse')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/mouse.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'turtle')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/turtle.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'dolphin')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/dolphin.jpg')
        }

        if (elem.childNodes[1].id == 'cart_7') {
            card_Action_1.text_change(card_text_1.innerText = 'skirt')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/skirt.jpg')
            card_Action_2.text_change(card_text_2.innerText = 'pants')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/pants.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'blouse')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/blouse.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'dress')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/dress.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'boot')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/boot.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'shirt')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/shirt.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'coat')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/coat.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'shoe')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/shoe.jpg')
        }

        if (elem.childNodes[1].id == 'cart_8') {
            card_Action_1.text_change(card_text_1.innerText = 'sad')
            card_Action_1.img_change(img_action_1.src = './assets/img/img_action_1/sad.png')
            card_Action_2.text_change(card_text_2.innerText = 'angry')
            card_Action_2.img_change(img_action_2.src = './assets/img/img_action_1/angry.jpg')
            card_Action_3.text_change(card_text_3.innerText = 'happy')
            card_Action_3.img_change(img_action_3.src = './assets/img/img_action_1/happy.jpg')
            card_Adjective.text_change(card_text_4.innerText = 'tired')
            card_Adjective.img_change(img_Adjective.src = './assets/img/img_action_1/tired.jpg')
            card_Animal_1.text_change(card_text_5.innerText = 'surprised')
            card_Animal_1.img_change(img_animal_1.src = './assets/img/img_action_1/surprised.jpg')
            card_Animal_2.text_change(card_text_6.innerText = 'scared')
            card_Animal_2.img_change(img_animal_2.src = './assets/img/img_action_1/scared.jpg')
            cart_Clothes.text_change(card_text_7.innerText = 'smile')
            cart_Clothes.img_change(img_Clothes.src = './assets/img/img_action_1/smile.jpg')
            cart_emotion.text_change(card_text_8.innerText = 'laugh')
            cart_emotion.img_change(img_emotion.src = './assets/img/img_action_1/laugh.jpg')
        }
    });
});


burger_menu.addEventListener('click', (event) => { //BurgerMenu
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

blackout.addEventListener('click', (event) => { //BurgerMenu_background 
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
checkbox.addEventListener('click', (event) => { //Checkbox function
    checkbox_but++
    if (checkbox_but % 2 == true) {
        arrCard.forEach(el => el.style.background = 'linear-gradient(90deg, rgba(110, 0, 255, 0.7) 0px, rgba(210, 0, 224, 0.99) 54%, rgb(204, 0, 255) 0px)');
        navMenu.style.background = 'rgba(110, 0, 255, 0.7)';
        if (cart_container.style.display == 'none') {
            button_start.style.display = 'block';
        }
        for (let i = 0; i < arrCard.length; i++) {
            arrCardCardInfo[i].childNodes[3].style.display = 'none';
        }
    }
    if (checkbox_but % 2 != true) {
        arrCard.forEach(el => el.style.background = 'linear-gradient(90deg,rgba(255,94,94,.7) 0,rgba(239,1,124,.99) 54%,#ef017c 0)');
        navMenu.style.background = '#75bdd1';
        if (button_start.style.display == 'block') {
            button_start.style.display = 'none';
        }
        for (let i = 0; i < arrCard.length; i++) {
            arrCardCardInfo[i].childNodes[3].style.display = 'block';
        }
        button_start.style.borderRadius = '24px 24px 24px 24px';
        button_start.style.width = '36%';
        button_start.children[0].style.marginTop = '-4%';
        button_start.children[0].innerText = 'Start Game!';
    }
});

let arrText = '';
let testDivs = Array.prototype.filter.call(card_button_switch, function(card_button_switch) { //Revers Card
    card_button_switch.addEventListener('mouseover', (event) => {
        event.target.parentElement.parentNode.style.transition = 'transform 0.5s';
        event.target.parentElement.parentNode.style.transform = 'rotateY(180deg)';
        arrText += event.target.previousElementSibling.innerText;
        event.target.previousElementSibling.innerText = translations[arrText];
        event.target.previousElementSibling.style.transformStyle = "preserve-3d";
        event.target.previousElementSibling.style.transform = 'rotateY(-180deg)';
        arrText = '';


    })
    card_button_switch.addEventListener('mouseout', (event) => {
        event.target.parentElement.parentNode.style.transition = 'transform 0.5s';
        event.target.parentElement.parentNode.style.transform = 'rotateY(0deg)';
        event.target.previousElementSibling.style.transformStyle = "preserve-3d";
        event.target.previousElementSibling.style.transform = 'rotateY(0deg)';
        arrText += event.target.previousElementSibling.innerText;
        event.target.previousElementSibling.innerText = translationsRevers[arrText];
        arrText = '';
    })

})

const nums = [0, 1, 2, 3, 4, 5, 6, 7];
export const ranNums = [];
const randomArr = []
let i = nums.length;
let j = 0;
while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
}

function VoiceGame(par) {
    let test = ranNums.shift()
    randomArr.push(test)
}
let ind = 0

button_start.addEventListener('click', (event) => { //Start game!
    VoiceGame(ranNums)
    button_start.style.borderRadius = '200px 200px 200px 200px';
    button_start.style.width = '6%';
    button_start.children[0].style.marginTop = '-27%';
    button_start.children[0].innerText = '↻';
    ind++
});




























// let element = document.body; //запрет выделения текста
// element.onselectstart = function() { return false; }
// element.onmousedown = function() { return false; }