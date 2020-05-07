import { key_button, clear_input, area, name_film, img_film, date_film, rating_star, button_search, error_block, header_button, carousel_item_3, control_next } from "./name_constants";

header_button.addEventListener('click', (event) => {
        location.href = 'index.html';
    })
    //button clear input
function areaLang() {
    if (area.value.length > 0) {
        clear_input.style.display = 'block'
    }
    if (area.value.length == 0) {
        clear_input.style.display = 'none'
    }
}
let tik = 0
    //API Translate
function getTransText(textRu) {

    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200505T195708Z.211a8b83fbadf1ec.05cde44b1bf1f63a476934b41a12723899c55f83&text=${textRu}&lang=ru-en`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let test = data.text;
            getMovieTitle(1, test[0], 1)
        });
    return tik = 1
}


window.addEventListener('keydown', (event) => {
    let ar = area.value;
    if (area.value.length == 0) {
        error_block.innerText = '';
    }
    if (area.value.length == 0 && event.keyCode == 13) {
        error_block.innerText = 'Enter movie title!';
    }
    let sring = ar.match(/[^\d\sа-яА-ЯёЁa-zA-Z0-9!]/gi)

    if (sring != null && sring.length > 0) {
        error_block.innerText = 'Please enter a valid name!';
    } else {
        if (event.keyCode == 13) {
            let tran = ar.match(/[^\d\sа-яА-ЯёЁa.-]/gi)
            if (tran == null) {
                getTransText(ar)
            }
            spinner_img.style.display = 'block'

            function spinnerOff() {
                spinner_img.style.display = 'none';
            }
            setTimeout(spinnerOff, 1000);
            getMovieTitle(1, area.value)
        }
        areaLang()
    }

})

clear_input.addEventListener('click', (event) => {
    area.value = '';
    clear_input.style.display = 'none'
    error_block.innerText = '';
})

// function carousel 
$('.carousel').carousel({
    interval: 0
})


// API Rating
function getMovieRating(rating, i) {
    const url = `https://www.omdbapi.com/?i=${rating}&apikey=838fead5`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            rating_star[i].innerText = data.imdbRating
        });
}

//function Search
function getMovieTitle(page, text, num) {
    const url = `https://www.omdbapi.com/?s=${text}&page=${page}&apikey=838fead5`;
    fetch(url)
        .then(res => res.json())
        .then(data => {

            for (let i = 0; i < 10; i++) {
                if (data.Error == 'Movie not found!') {
                    error_block.innerText = `No results for "${text}"`
                } else {
                    if (data.Error != undefined && num == 1) {
                        return error_block.innerText = `Error: ${data.Error}`
                    }
                    name_film[i].innerText = data.Search[i].Title;
                    date_film[i].innerText = data.Search[i].Year;
                    getMovieRating(data.Search[i].imdbID, i);
                    if (data.Search[i].Poster == 'N/A') {
                        img_film[i].src = './assets/img/noIMG.png';
                    } else {
                        img_film[i].src = data.Search[i].Poster;
                    }
                }

            }
        });
}
getMovieTitle(1, 'school')


//click search
button_search.addEventListener('click', (event) => {
    let ar = area.value;
    let sring = ar.match(/[^\d\sа-яА-ЯёЁa-zA-Z0-9!]/gi)

    if (area.value.length == 0) {
        error_block.innerText = 'Enter movie title!';

    }
    if (sring != null && sring.length > 0) {
        error_block.innerText = 'Please enter a valid name!';
    } else {
        let tran = ar.match(/[^\d\sа-яА-ЯёЁa.-]/gi)
        if (tran == null) {
            getTransText(ar)
        }
        spinner_img.style.display = 'block'

        function spinnerOff() {
            spinner_img.style.display = 'none'
        }

        setTimeout(spinnerOff, 1000);
        getMovieTitle(1, area.value)
    }

})

let idi = 2;
control_next.addEventListener('click', (event) => {
    if (carousel_item_3.classList.value == "carousel-item active") {
        getMovieTitle(idi, area.value, 3)
        console.log(idi);
        idi++
    }

})