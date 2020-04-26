import { button_start, block_startGame, container_words, level_1, level_2, level_3, level_4, level_5, level_6, text_1, text_2, text_3, text_4, text_5, text_6, text_7, text_8, text_9, text_0, transkr_1, transkr_2, transkr_3, transkr_4, transkr_5, transkr_6, transkr_7, transkr_8, transkr_9, transkr_0, main_img, text_main, butt_restart } from "./name_constants"
import "core-js/stable";
import "regenerator-runtime/runtime";
let arrWords = [text_0, text_1, text_2, text_3, text_4, text_5, text_6, text_7, text_8, text_9, ];
let arrTrans = [transkr_0, transkr_1, transkr_2, transkr_3, transkr_4, transkr_5, transkr_6, transkr_7, transkr_8, transkr_9, ]
let cardImg = []
const getWords = async(page, group) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    const res = await fetch(url);
    const json = await res.json();
    let answer = JSON.stringify(json, null, 1);
    for (let i = 0; i < 10; i++) {
        arrWords[i].innerText = json[i].word
        arrTrans[i].innerText = json[i].transcription
        cardImg.push(json[i].image.slice(6, ))
    }
    return json
};

const page = 3;
const group = 0;
getWords(page, group)
button_start.addEventListener('click', (event) => { //Block start
    block_startGame.style.transform = 'translate(0%, 10vh)'

    function bl() {
        block_startGame.style.transform = 'translate(0%, -100vh)'
        block_startGame.style.opacity = '0.2'
    }
    setTimeout(bl, 400);

    function bla() {
        block_startGame.style.display = 'none'
    }
    setTimeout(bla, 900);
})
let mainButt = container_words.querySelectorAll('div');
mainButt.forEach(function(elem) { //burgerMenuNav
    elem.addEventListener("click", function() {
        function getTranslation() {
            const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text= ${elem.children[2].children[0].innerText} &lang=en-ru`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    text_main.innerHTML = data.text[0];
                });
        }
        getTranslation()
        const getW = async(page, group) => {
            const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
            const res = await fetch(url);
            const json = await res.json();
            let answer = JSON.stringify(json, null, 1);

            get(json)
        }
        getW(3, 0)

        function get(json) {
            let idel = elem.id;
            main_img.src = `https://raw.githubusercontent.com/Andry-man/rslang-data/master/data/${cardImg[idel.slice(4, )]}`

        }
    });
});

let level = nav_list.querySelectorAll('li');
level.forEach(function(elem) { //burgerMenuNav
    elem.addEventListener("click", function() {
        level.forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        if (elem.id == 'level_1') {
            const getWords = async(page, group) => {
                const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
                const res = await fetch(url);
                const json = await res.json();
                let answer = JSON.stringify(json, null, 1);
                cardImg.splice(0, cardImg.length);
                for (let i = 0; i < 10; i++) {
                    arrWords[i].innerText = json[i].word
                    arrTrans[i].innerText = json[i].transcription
                    cardImg.push(json[i].image.slice(6, ))
                }
            };
            const page = 3;
            const group = 0;
            getWords(page, group)
        }
        if (elem.id == 'level_2') {
            const getWords = async(page, group) => {
                const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
                const res = await fetch(url);
                const json = await res.json();
                let answer = JSON.stringify(json, null, 1);
                cardImg.splice(0, cardImg.length);
                for (let i = 0; i < 10; i++) {
                    arrWords[i].innerText = json[i].word
                    arrTrans[i].innerText = json[i].transcription
                    cardImg.push(json[i].image.slice(6, ))
                }
            };

            const page = 4;
            const group = 0;
            getWords(page, group)
        }
        if (elem.id == 'level_3') {
            const getWords = async(page, group) => {
                const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
                const res = await fetch(url);
                const json = await res.json();
                let answer = JSON.stringify(json, null, 1);
                cardImg.splice(0, cardImg.length);
                for (let i = 0; i < 10; i++) {
                    arrWords[i].innerText = json[i].word
                    arrTrans[i].innerText = json[i].transcription
                    cardImg.push(json[i].image.slice(6, ))
                }
            };

            const page = 5;
            const group = 0;
            getWords(page, group)
        }
        if (elem.id == 'level_4') {
            const getWords = async(page, group) => {
                const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
                const res = await fetch(url);
                const json = await res.json();
                let answer = JSON.stringify(json, null, 1);
                cardImg.splice(0, cardImg.length);
                for (let i = 0; i < 10; i++) {
                    arrWords[i].innerText = json[i].word
                    arrTrans[i].innerText = json[i].transcription
                    cardImg.push(json[i].image.slice(6, ))
                }
            };

            const page = 6;
            const group = 0;
            getWords(page, group)
        }
        if (elem.id == 'level_5') {
            const getWords = async(page, group) => {
                const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
                const res = await fetch(url);
                const json = await res.json();
                let answer = JSON.stringify(json, null, 1);
                cardImg.splice(0, cardImg.length);
                for (let i = 0; i < 10; i++) {
                    arrWords[i].innerText = json[i].word
                    arrTrans[i].innerText = json[i].transcription
                    cardImg.push(json[i].image.slice(6, ))
                }
            };

            const page = 7;
            const group = 0;
            getWords(page, group)
        }
        if (elem.id == 'level_6') {
            const getWords = async(page, group) => {
                const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
                const res = await fetch(url);
                const json = await res.json();
                let answer = JSON.stringify(json, null, 1);
                cardImg.splice(0, cardImg.length);
                for (let i = 0; i < 10; i++) {
                    arrWords[i].innerText = json[i].word
                    arrTrans[i].innerText = json[i].transcription
                    cardImg.push(json[i].image.slice(6, ))
                }
            };
            const page = 8;
            const group = 0;
            getWords(page, group)
        }
    });
});
butt_restart.addEventListener("click", function() {
    main_img.src = './assets/img/blank.jpg';
    text_main.innerHTML = '';
});