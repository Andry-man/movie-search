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