import { key_button, clear_input, area } from "./name_constants";

function areaLang() {
    if (area.value.length > 0) {
        clear_input.style.display = 'block'
    }
    if (area.value.length == 0) {
        clear_input.style.display = 'none'
    }
}

window.addEventListener('keydown', (event) => {
    areaLang()
})
clear_input.addEventListener('click', (event) => {
    area.value = '';
    clear_input.style.display = 'none'
})