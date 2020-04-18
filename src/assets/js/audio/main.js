// Speech synthesis
import { button_start, card, banner_win, win_star } from "../name_constants.js";
import { arrCardCardInfo } from "../main.js";


const play = document.querySelectorAll('.card_button_play');
const synth = window.speechSynthesis;
const inputForm = document.querySelector('form');
const inputTxt = document.querySelector('.text');
const inputT = document.querySelectorAll('.card-text_card');
const voicesList = document.querySelector('select');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('.value--pitch-value');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('.value--rate-value');

let voices = [];

window.onbeforeunload = function() {
    synth.cancel();
};

function populateVoiceList() {
    voices = synth.getVoices();
    const selectedIndex =
        voicesList.selectedIndex < 0 ? 0 : voicesList.selectedIndex;
    voicesList.innerHTML = '';
    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voicesList.appendChild(option);
    }
    voicesList.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {

    if (synth.speaking) {
        synth.cancel();
        setTimeout(speak, 300);
    } else if (inputTxt.value !== '') {
        const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
        utterThis.onend = function(event) {};
        utterThis.onerror = function(event) {
            console.error('SpeechSynthesisUtterance.onerror');
        };
        const selectedOption = voicesList.selectedOptions[0].getAttribute(
            'data-name'
        );
        for (i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
            }
        }

        utterThis.onpause = function(event) {
            const char = event.utterance.text.charAt(event.charIndex);
        };

        utterThis.pitch = pitch.value;
        utterThis.rate = rate.value;
        synth.speak(utterThis);
    }
}

let testD = Array.prototype.filter.call(play, function(play) {
    play.addEventListener('click', (event) => { //
        inputTxt.value = event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
        event.preventDefault();
        speak();
    })

})



pitch.onchange = function() {
    pitchValue.textContent = pitch.value;
};

rate.onchange = function() {
    rateValue.textContent = rate.value;
};

voicesList.onchange = function() {
    speak();
};

const nums = [0, 1, 2, 3, 4, 5, 6, 7];
const ranNums = [];
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
let ind = 0;
let badAnswer = 0;
let answer = [];
button_start.onclick = function(event) { //game function
    VoiceGame(ranNums)
    let cardIndex = randomArr[ind];
    inputTxt.value = arrCardCardInfo[cardIndex].children[1].children[0].innerText
    speak();
    let tes = Array.prototype.filter.call(card, function(card) { //Revers Card and function
        card.addEventListener('click', (event) => {
            if (event.target.className == 'card-img-top') {
                let text = event.target.nextSibling.nextSibling.firstChild.nextSibling.innerHTML;
                if (arrCardCardInfo[cardIndex].children[1].children[0].innerText == text) {
                    answer.push('1')
                    if (answer.length == 8) {
                        FinGame('test')
                    }
                    event.target.parentNode.style.backgroundColor = 'red';
                    win_star.innerHTML += '✔'
                    ind++
                    VoiceGame(ranNums)
                    let cardIndex = randomArr[ind];
                    inputTxt.value = arrCardCardInfo[cardIndex].children[1].children[0].innerText
                    speak();
                    button_start.onclick();
                }
            }
            if (event.target.className == 'card') {
                let textCard = event.target.children[1].children[0].innerHTML;
                let cardIndex = randomArr[ind];
                if (arrCardCardInfo[cardIndex].children[1].children[0].innerText == textCard) {
                    answer.push('1')
                    if (answer.length == 8) {
                        FinGame()
                    }
                    event.target.parentNode.children[0].style.backgroundColor = 'red';
                    win_star.innerHTML += '✔'
                    ind++
                    VoiceGame(ranNums)
                    let cardIndex = randomArr[ind];
                    inputTxt.value = arrCardCardInfo[cardIndex].children[1].children[0].innerText
                    speak();
                    button_start.onclick()
                }
            }

            if (arrCardCardInfo[cardIndex].style.backgroundColor != 'red') {
                win_star.innerHTML += '✘';
                badAnswer++
            }

        })

    })
}


function FinGame(par) {
    if (badAnswer > 0) {
        banner_win.innerText = 'Incorrect answers = ' + badAnswer
        banner_win.style.fontSize = '2em'
    }
    banner_win.style.display = 'block';

    function bla() {
        banner_win.style.width = '44%';
    }
    setTimeout(bla, 300);

    function reboot() {
        document.location.href = "index.html";
    }
    setTimeout(reboot, 1700);
}