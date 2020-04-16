// Speech synthesis
const play = document.querySelectorAll('.card_button_play')
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
    for (i = 0; i < voices.length; i++) {
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
        utterThis.onend = function(event) {
        };
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
    inputTxt.value=event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText

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