const synth = window.speechSynthesis;

const inputForm = document.querySelector('form');
const inputTxt = document.querySelector('.text');
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
        utterThis.onend = function(event) {};
        utterThis.onerror = function(event) {};
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

inputForm.onsubmit = function(event) {
    event.preventDefault();

    speak();

    inputTxt.blur();
};

pitch.onchange = function() {
    pitchValue.textContent = pitch.value;
};

rate.onchange = function() {
    rateValue.textContent = rate.value;
};

voicesList.onchange = function() {
    speak();
};

let mainButt = container_words.querySelectorAll('div');
mainButt.forEach(function(elem) { //burgerMenuNav
    elem.addEventListener("click", function() {
        inputTxt.value = elem.children[2].children[0].innerHTML
        speak()
    });
});




// Speech recognition
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
    window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const colors = {
    красный: 'red',
    оранжевый: 'orange',
    желтый: 'yellow',
    зеленый: 'green',
    голубой: 'blue',
    синий: 'darkblue',
    фиолетовый: 'violet'
};

const colorsList = Object.keys(colors);

const grammar =
    '#JSGF V1.0; grammar colors; public <color> = ' +
    colorsList.join(' | ') +
    ' ;';

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-EN';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const microphoneIcon = document.getElementById('butt_speak');
const microphoneWrapper = document.querySelector('.microphone-wrapper');
const audioRecordAnimation = document.querySelector('.audio-record-animation');
const speechRecognitionSection = document.querySelector(
    '.speech-recognition-section'
);
const recognitionTextResult = document.querySelector('.recognition-result');
const img_audio = document.getElementById('img_audio');

microphoneIcon.onclick = function() {
    recognition.start();
    img_audio.style.display = 'block'
};

recognition.onaudiostart = function() {
    microphoneWrapper.style.visibility = 'hidden';
    audioRecordAnimation.style.visibility = 'visible';
};

recognition.onresult = function(event) {
    const last = event.results.length - 1;
    text_main.innerHTML = event.results[0][0].transcript;
    img_audio.style.display = 'none'
};