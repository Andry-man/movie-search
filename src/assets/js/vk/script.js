import { key_button, clear_input } from "../name_constants";

function keyboard() {
    let input_area = document.createElement('div') //область клавиатуры
    input_area.id = 'input_area';
    input_area.className = "input_area"
    input_area.style.width = '100%';
    input_area.style.display = 'flex';
    input_area.style.flexDirection = 'row';
    input_area.style.flexWrap = 'wrap';
    input_area.style.paddingLeft = '3.5%'
    let virtual_keyboard = document.getElementById("virtual_keyboard");

    virtual_keyboard.append(input_area);


    let button = document.createElement('li'); // кнопка (родитель)
    button.id = 'button';
    button.classList.add("button")
    button.innerText = '`'

    input_area.append(button);

    let buttonID = document.getElementById("button");
    let button_1 = buttonID.cloneNode(true);
    button_1.innerText = '1'
    button_1.style.backgroundColor = 'rgb(47, 47, 47)'


    let button_2 = buttonID.cloneNode(true);
    button_2.innerText = '2'
    button_2.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_3 = buttonID.cloneNode(true);
    button_3.innerText = '3'
    button_3.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_4 = buttonID.cloneNode(true);
    button_4.innerText = '4'
    button_4.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_5 = buttonID.cloneNode(true);
    button_5.innerText = '5'
    button_5.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_6 = buttonID.cloneNode(true);
    button_6.innerText = '6'
    button_6.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_7 = buttonID.cloneNode(true);
    button_7.innerText = '7'
    button_7.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_8 = buttonID.cloneNode(true);
    button_8.innerText = '8'
    button_8.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_9 = buttonID.cloneNode(true);
    button_9.innerText = '9'
    button_9.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_0 = buttonID.cloneNode(true);
    button_0.innerText = '0'
    button_0.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_ = buttonID.cloneNode(true);
    button_.innerText = '-'
    button_.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_plus = buttonID.cloneNode(true);
    button_plus.innerText = '='
    button_plus.style.backgroundColor = 'rgb(47, 47, 47)'

    let buttonBackspace = buttonID.cloneNode(true);
    buttonBackspace.id = 'buttonBackspace';
    buttonBackspace.innerText = 'Backspace';
    buttonBackspace.style.width = '15%';
    buttonBackspace.style.marginRight = '1%';

    input_area.append(button_1);
    input_area.append(button_2);
    input_area.append(button_3);
    input_area.append(button_4);
    input_area.append(button_5);
    input_area.append(button_6);
    input_area.append(button_7);
    input_area.append(button_8);
    input_area.append(button_9);
    input_area.append(button_0);
    input_area.append(button_);
    input_area.append(button_plus);
    input_area.append(buttonBackspace);
    let arrButtonFirstRow = [button_1, button_2, button_3, button_4, button_5, button_6, button_7, button_8, button_9, button_0, button_, button_plus, buttonBackspace]


    let button_TAB = buttonID.cloneNode(true);
    button_TAB.innerText = 'Tab'
    button_TAB.style.width = '6%'

    let button_q = buttonID.cloneNode(true);
    button_q.innerText = 'q'
    button_q.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_w = buttonID.cloneNode(true);
    button_w.innerText = 'w'
    button_w.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_e = buttonID.cloneNode(true);
    button_e.innerText = 'e'
    button_e.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_r = buttonID.cloneNode(true);
    button_r.innerText = 'r'
    button_r.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_t = buttonID.cloneNode(true);
    button_t.innerText = 't'
    button_t.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_y = buttonID.cloneNode(true);
    button_y.innerText = 'y'
    button_y.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_u = buttonID.cloneNode(true);
    button_u.innerText = 'u'
    button_u.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_i = buttonID.cloneNode(true);
    button_i.innerText = 'i'
    button_i.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_o = buttonID.cloneNode(true);
    button_o.innerText = 'o'
    button_o.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_p = buttonID.cloneNode(true);
    button_p.innerText = 'p'
    button_p.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_bracket = buttonID.cloneNode(true);
    button_bracket.innerText = '['
    button_bracket.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_bracket2 = buttonID.cloneNode(true);
    button_bracket2.innerText = ']'
    button_bracket2.style.width = '5%';
    button_bracket2.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_slash = buttonID.cloneNode(true);
    button_slash.innerText = '\\'
    button_slash.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_del = buttonID.cloneNode(true);
    button_del.id = 'button_del';
    button_del.innerText = 'del';
    button_del.style.width = '8%';
    button_del.style.marginRight = '5%';

    input_area.append(button_TAB);
    input_area.append(button_q);
    input_area.append(button_w);
    input_area.append(button_e);
    input_area.append(button_r);
    input_area.append(button_t);
    input_area.append(button_y);
    input_area.append(button_u);
    input_area.append(button_i);
    input_area.append(button_o);
    input_area.append(button_p);
    input_area.append(button_bracket);
    input_area.append(button_bracket2);
    input_area.append(button_slash);
    input_area.append(button_del);
    let arrButtonSecondRow = [button_TAB, button_q, button_w, button_e, button_r, button_t, button_y, button_u, button_i, button_o, button_p, button_bracket, button_bracket2, button_slash, button_del]

    let button_capsLock = buttonID.cloneNode(true);
    button_capsLock.innerText = 'CapsLock';
    button_capsLock.style.width = '11%';
    button_capsLock.id = 'button_capsLock';

    let button_a = buttonID.cloneNode(true);
    button_a.innerText = 'a'
    button_a.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_s = buttonID.cloneNode(true);
    button_s.innerText = 's'
    button_s.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_d = buttonID.cloneNode(true);
    button_d.innerText = 'd'
    button_d.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_f = buttonID.cloneNode(true);
    button_f.innerText = 'f'
    button_f.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_g = buttonID.cloneNode(true);
    button_g.innerText = 'g'
    button_g.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_h = buttonID.cloneNode(true);
    button_h.innerText = 'h'
    button_h.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_j = buttonID.cloneNode(true);
    button_j.innerText = 'j'
    button_j.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_k = buttonID.cloneNode(true);
    button_k.innerText = 'k'
    button_k.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_l = buttonID.cloneNode(true);
    button_l.innerText = 'l'
    button_l.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_colon = buttonID.cloneNode(true);
    button_colon.innerText = ';'
    button_colon.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_quotes = buttonID.cloneNode(true);
    button_quotes.innerText = "'"
    button_quotes.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_enter = buttonID.cloneNode(true);
    button_enter.id = 'button_enter';
    button_enter.innerText = 'enter';
    button_enter.style.width = '15%';

    input_area.append(button_capsLock);
    input_area.append(button_a);
    input_area.append(button_s);
    input_area.append(button_d);
    input_area.append(button_f);
    input_area.append(button_g);
    input_area.append(button_h);
    input_area.append(button_j);
    input_area.append(button_k);
    input_area.append(button_l);
    input_area.append(button_colon);
    input_area.append(button_quotes);
    input_area.append(button_enter);

    let button_shift = buttonID.cloneNode(true);
    button_shift.innerText = 'Shift'
    button_shift.id = 'button_shift_left'
    button_shift.style.width = '19%'

    let button_z = buttonID.cloneNode(true);
    button_z.innerText = 'z'
    button_z.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_x = buttonID.cloneNode(true);
    button_x.innerText = 'x'
    button_x.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_c = buttonID.cloneNode(true);
    button_c.innerText = 'c'
    button_c.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_v = buttonID.cloneNode(true);
    button_v.innerText = 'v'
    button_v.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_b = buttonID.cloneNode(true);
    button_b.innerText = 'b'
    button_b.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_n = buttonID.cloneNode(true);
    button_n.innerText = 'n'
    button_n.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_m = buttonID.cloneNode(true);
    button_m.innerText = 'm'
    button_m.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_comma = buttonID.cloneNode(true);
    button_comma.innerText = ','
    button_comma.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_point = buttonID.cloneNode(true);
    button_point.innerText = '.'
    button_point.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_slash2 = buttonID.cloneNode(true);
    button_slash2.innerText = '/'
    button_slash2.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_up = buttonID.cloneNode(true);
    button_up.innerText = "↑"

    let button_shift2 = buttonID.cloneNode(true);
    button_shift2.innerText = 'Shift'
    button_shift2.style.width = '7%'
    button_shift2.style.marginRight = '5%'

    input_area.append(button_shift);
    input_area.append(button_z);
    input_area.append(button_x);
    input_area.append(button_c);
    input_area.append(button_v);
    input_area.append(button_b);
    input_area.append(button_n);
    input_area.append(button_m);
    input_area.append(button_comma);
    input_area.append(button_point);
    input_area.append(button_slash2);
    input_area.append(button_up);
    input_area.append(button_shift2);

    let button_ctrl = buttonID.cloneNode(true);
    button_ctrl.innerText = 'ctrl'
    button_ctrl.style.width = '7%'
    button_ctrl.style.marginLeft = '3%'

    let button_win = buttonID.cloneNode(true);
    button_win.innerText = 'win'
    button_win.style.width = '12%'

    let button_alt = buttonID.cloneNode(true);
    button_alt.innerText = 'alt'

    let button_space = buttonID.cloneNode(true);
    button_space.id = 'button_space'
    button_space.innerText = ""
    button_space.style.width = '31%'
    button_space.style.backgroundColor = 'rgb(47, 47, 47)'

    let button_alt2 = buttonID.cloneNode(true);
    button_alt2.innerText = 'alt'

    let button_ctrl2 = buttonID.cloneNode(true);
    button_ctrl2.innerText = 'ctrl'

    let button_left = buttonID.cloneNode(true);
    button_left.innerText = '←'

    let button_down = buttonID.cloneNode(true);
    button_down.innerText = '↓'

    let button_right = buttonID.cloneNode(true);
    button_right.innerText = '→'



    input_area.append(button_ctrl);
    input_area.append(button_win);
    input_area.append(button_alt);
    input_area.append(button_space);
    input_area.append(button_alt2);
    input_area.append(button_ctrl2);
    input_area.append(button_left);
    input_area.append(button_down);
    input_area.append(button_right);

    let arrButtonLetterstwo = [
        button_q,
        button_w,
        button_e,
        button_r,
        button_t,
        button_y,
        button_u,
        button_i,
        button_o,
        button_p,
        button_a,
        button_s,
        button_d,
        button_f,
        button_g,
        button_h,
        button_j,
        button_k,
        button_l,
        button_z,
        button_x,
        button_c,
        button_v,
        button_b,
        button_n,
        button_m
    ]

    let russianLetters = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь']
    let englishLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

    let style = document.createElement('style'); // стили для кнопок
    const styleClass = document.createTextNode('.button:active {border-radius: 26px ; transition:border-radius 0.1s;}\n .button_lett:active {border-radius:26px; transition:border-radius 0.1s;}\n .button_lett:hover {background-color:red;}\n .button:hover {background-color:red !important;}\n.button {width: 5%;display: block;height: 55px;margin-right: 1%;margin-left: 0%;color: rgb(255, 141, 0);border-radius: 7px;box-shadow: rgba(0, 0, 0, 0.75) 0px 2px 5px 0px;cursor: pointer;font-family: Play;text-align: center;background-color: rgb(74, 74, 74)}.infoTextOne {font-family: Play;} ')
    style.appendChild(styleClass)
    document.body.append(style);

    let counter = 0;

    input_area.addEventListener('click', (event) => { //меняется цвет кнопок при нажатии, работа с кнопками
        input_area.querySelectorAll('li').forEach(el => el.classList.remove('button:active'));
        if (event.target.className == "input_area") {
            event.target.className != 'button:active'
        }
        event.target.classList.add('button:active')
        if (event.target.id == 'button_capsLock') {
            counter++
        }
        if (input_area.classList.length == 2) {
            input_area.classList.remove('button:active')
        }

        // if (event.target.id == 'button_lett' && counter%2 == true ) { 
        //     area.value+=event.target.innerText.toUpperCase()
        // }
        if (event.target.id == 'button_space') { // button space
            area.value += ' '
        }
        if (event.target.id == 'button_enter') { // button enter
            area.value += '\n'
        }

        if (event.target.id == 'button_del' || event.target.id == 'buttonBackspace') { // button del, backspace
            area.value = area.value.slice(0, -1)
        }



    })

    let element = document.body; //запрет выделения текста
    element.onselectstart = function() { return false; }
    element.onmousedown = function() { return false; }





    let capsLockCounter = 0;
    button_capsLock.onclick = function() { // Функционал кнопки Capslock
        capsLockCounter += 1
        if (capsLockCounter % 2 == true) {
            button_capsLock.style.backgroundColor = 'red';
            button_capsLock.style.borderRadius = '19px';
            for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                arrButtonLetterstwo[i].innerHTML = arrButtonLetterstwo[i].innerHTML.toLocaleUpperCase()
            }

        }
        if (capsLockCounter % 2 != true) {
            button_capsLock.style.backgroundColor = 'rgb(74, 74, 74)';
            button_capsLock.style.borderRadius = '7px'
            for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                arrButtonLetterstwo[i].innerHTML = arrButtonLetterstwo[i].innerHTML.toLocaleLowerCase()
            }

        }

    }


    button_shift.addEventListener('mousedown', (event) => { //Функционал кнопки левый shift
        button.onmouseout = function() {
            return button.innerText = '`';

        }
        button.onmouseover = function() {
            return button.innerText = '~';
        }

        button_1.onmouseout = function() {
            return button_1.innerText = '1';

        }
        button_1.onmouseover = function() {
            return button_1.innerText = '!';
        }

        button_2.onmouseout = function() {
            return button_2.innerText = '2';

        }
        button_2.onmouseover = function() {
            return button_2.innerText = '@';
        }

        button_3.onmouseout = function() {
            return button_3.innerText = '3';

        }
        button_3.onmouseover = function() {
            return button_3.innerText = '#';
        }

        button_4.onmouseout = function() {
            return button_4.innerText = '4';

        }
        button_4.onmouseover = function() {
            return button_4.innerText = '$';
        }

        button_5.onmouseout = function() {
            return button_5.innerText = '5';

        }
        button_5.onmouseover = function() {
            return button_5.innerText = '%';
        }

        button_6.onmouseout = function() {
            return button_6.innerText = '6';

        }
        button_6.onmouseover = function() {
            return button_6.innerText = '^';
        }
        button_7.onmouseout = function() {
            return button_7.innerText = '7';

        }
        button_7.onmouseover = function() {
            return button_7.innerText = '&';
        }
        button_8.onmouseout = function() {
            return button_8.innerText = '8';

        }
        button_8.onmouseover = function() {
            return button_8.innerText = '*';
        }

        button_9.onmouseout = function() {
            return button_9.innerText = '9';

        }
        button_9.onmouseover = function() {
            return button_9.innerText = '(';
        }

        button_0.onmouseout = function() {
            return button_0.innerText = '0';

        }
        button_0.onmouseover = function() {
            return button_0.innerText = ')';
        }

        button_.onmouseout = function() {
            return button_.innerText = '-';

        }
        button_.onmouseover = function() {
            return button_.innerText = '_';
        }
        button_plus.onmouseout = function() {
            return button_plus.innerText = '=';
        }
        button_plus.onmouseover = function() {
            return button_plus.innerText = '+';
        }

        button_q.onmouseover = function() {
            return button_q.innerText = 'Q';
        }
        button_q.onmouseout = function() {
            return button_q.innerText = 'q';
        }
        button_w.onmouseover = function() {
            return button_w.innerText = 'W';
        }
        button_w.onmouseout = function() {
            return button_w.innerText = 'w';
        }
        button_e.onmouseover = function() {
            return button_e.innerText = 'E';
        }
        button_e.onmouseout = function() {
            return button_e.innerText = 'e';
        }
        button_r.onmouseover = function() {
            return button_r.innerText = 'R';
        }
        button_r.onmouseout = function() {
            return button_r.innerText = 'r';
        }
        button_t.onmouseover = function() {
            return button_t.innerText = 'T';
        }
        button_t.onmouseout = function() {
            return button_t.innerText = 't';
        }
        button_y.onmouseover = function() {
            return button_y.innerText = 'Y';
        }
        button_y.onmouseout = function() {
            return button_y.innerText = 'y';
        }
        button_u.onmouseover = function() {
            return button_u.innerText = 'U';
        }
        button_u.onmouseout = function() {
            return button_u.innerText = 'u';
        }
        button_i.onmouseover = function() {
            return button_i.innerText = 'I';
        }
        button_i.onmouseout = function() {
            return button_i.innerText = 'i';
        }
        button_o.onmouseover = function() {
            return button_o.innerText = 'O';
        }
        button_o.onmouseout = function() {
            return button_o.innerText = 'o';
        }
        button_p.onmouseover = function() {
            return button_p.innerText = 'P';
        }
        button_p.onmouseout = function() {
            return button_p.innerText = 'p';
        }
        button_a.onmouseover = function() {
            return button_a.innerText = 'A';
        }
        button_a.onmouseout = function() {
            return button_a.innerText = 'a';
        }
        button_s.onmouseover = function() {
            return button_s.innerText = 'S';
        }
        button_s.onmouseout = function() {
            return button_s.innerText = 's';
        }
        button_d.onmouseover = function() {
            return button_d.innerText = 'D';
        }
        button_d.onmouseout = function() {
            return button_d.innerText = 'd';
        }
        button_f.onmouseover = function() {
            return button_f.innerText = 'F';
        }
        button_f.onmouseout = function() {
            return button_f.innerText = 'f';
        }
        button_g.onmouseover = function() {
            return button_g.innerText = 'G';
        }
        button_g.onmouseout = function() {
            return button_g.innerText = 'g';
        }
        button_h.onmouseover = function() {
            return button_h.innerText = 'H';
        }
        button_h.onmouseout = function() {
            return button_h.innerText = 'h';
        }
        button_j.onmouseover = function() {
            return button_j.innerText = 'J';
        }
        button_j.onmouseout = function() {
            return button_j.innerText = 'j';
        }
        button_k.onmouseover = function() {
            return button_k.innerText = 'K';
        }
        button_k.onmouseout = function() {
            return button_k.innerText = 'k';
        }
        button_l.onmouseover = function() {
            return button_l.innerText = 'L';
        }
        button_l.onmouseout = function() {
            return button_l.innerText = 'l';
        }
        button_z.onmouseover = function() {
            return button_z.innerText = 'Z';
        }
        button_z.onmouseout = function() {
            return button_z.innerText = 'z';
        }
        button_x.onmouseover = function() {
            return button_x.innerText = 'X';
        }
        button_x.onmouseout = function() {
            return button_x.innerText = 'x';
        }
        button_c.onmouseover = function() {
            return button_c.innerText = 'C';
        }
        button_c.onmouseout = function() {
            return button_c.innerText = 'c';
        }
        button_v.onmouseover = function() {
            return button_v.innerText = 'V';
        }
        button_v.onmouseout = function() {
            return button_v.innerText = 'v';
        }
        button_b.onmouseover = function() {
            return button_b.innerText = 'B';
        }
        button_b.onmouseout = function() {
            return button_b.innerText = 'b';
        }
        button_n.onmouseover = function() {
            return button_n.innerText = 'N';
        }
        button_n.onmouseout = function() {
            return button_n.innerText = 'n';
        }
        button_m.onmouseover = function() {
            return button_m.innerText = 'M';
        }
        button_m.onmouseout = function() {
            return button_m.innerText = 'm';
        }
        button_bracket.onmouseover = function() {
            return button_bracket.innerText = '{';
        }
        button_bracket.onmouseout = function() {
            return button_bracket.innerText = '[';
        }
        button_bracket2.onmouseover = function() {
            return button_bracket2.innerText = '}';
        }
        button_bracket2.onmouseout = function() {
            return button_bracket2.innerText = ']';
        }
        button_slash.onmouseover = function() {
            return button_slash.innerText = '|';
        }
        button_slash.onmouseout = function() {
            return button_slash.innerText = '\\';
        }


        button_colon.onmouseover = function() {
            return button_colon.innerText = ':';
        }
        button_colon.onmouseout = function() {
            return button_colon.innerText = ';';
        }
        button_quotes.onmouseover = function() {
            return button_quotes.innerText = '\'\'';
        }
        button_quotes.onmouseout = function() {
            return button_quotes.innerText = '\'';
        }
        button_comma.onmouseover = function() {
            return button_comma.innerText = '<';
        }
        button_comma.onmouseout = function() {
            return button_comma.innerText = ',';
        }
        button_point.onmouseover = function() {
            return button_point.innerText = '>';
        }
        button_point.onmouseout = function() {
            return button_point.innerText = '.';
        }

        button_slash2.onmouseover = function() {
            return button_slash2.innerText = '?';
        }
        button_slash2.onmouseout = function() {
            return button_slash2.innerText = '/';
        }








    })



    button_shift2.addEventListener('mousedown', (event) => { //Функционал кнопки правый shift
        button.onmouseout = function() {
            return button.innerText = '`';

        }
        button.onmouseover = function() {
            return button.innerText = '~';
        }

        button_1.onmouseout = function() {
            return button_1.innerText = '1';

        }
        button_1.onmouseover = function() {
            return button_1.innerText = '!';
        }

        button_2.onmouseout = function() {
            return button_2.innerText = '2';

        }
        button_2.onmouseover = function() {
            return button_2.innerText = '@';
        }

        button_3.onmouseout = function() {
            return button_3.innerText = '3';

        }
        button_3.onmouseover = function() {
            return button_3.innerText = '#';
        }

        button_4.onmouseout = function() {
            return button_4.innerText = '4';

        }
        button_4.onmouseover = function() {
            return button_4.innerText = '$';
        }

        button_5.onmouseout = function() {
            return button_5.innerText = '5';

        }
        button_5.onmouseover = function() {
            return button_5.innerText = '%';
        }

        button_6.onmouseout = function() {
            return button_6.innerText = '6';

        }
        button_6.onmouseover = function() {
            return button_6.innerText = '^';
        }
        button_7.onmouseout = function() {
            return button_7.innerText = '7';

        }
        button_7.onmouseover = function() {
            return button_7.innerText = '&';
        }
        button_8.onmouseout = function() {
            return button_8.innerText = '8';

        }
        button_8.onmouseover = function() {
            return button_8.innerText = '*';
        }

        button_9.onmouseout = function() {
            return button_9.innerText = '9';

        }
        button_9.onmouseover = function() {
            return button_9.innerText = '(';
        }

        button_0.onmouseout = function() {
            return button_0.innerText = '0';
        }
        button_0.onmouseover = function() {
            return button_0.innerText = ')';
        }
        button_.onmouseout = function() {
            return button_.innerText = '-';
        }
        button_.onmouseover = function() {
            return button_.innerText = '_';
        }
        button_plus.onmouseout = function() {
            return button_plus.innerText = '=';
        }
        button_plus.onmouseover = function() {
            return button_plus.innerText = '+';
        }

        button_q.onmouseover = function() {
            return button_q.innerText = 'Q';
        }
        button_q.onmouseout = function() {
            return button_q.innerText = 'q';
        }
        button_w.onmouseover = function() {
            return button_w.innerText = 'W';
        }
        button_w.onmouseout = function() {
            return button_w.innerText = 'w';
        }
        button_e.onmouseover = function() {
            return button_e.innerText = 'E';
        }
        button_e.onmouseout = function() {
            return button_e.innerText = 'e';
        }
        button_r.onmouseover = function() {
            return button_r.innerText = 'R';
        }
        button_r.onmouseout = function() {
            return button_r.innerText = 'r';
        }
        button_t.onmouseover = function() {
            return button_t.innerText = 'T';
        }
        button_t.onmouseout = function() {
            return button_t.innerText = 't';
        }
        button_y.onmouseover = function() {
            return button_y.innerText = 'Y';
        }
        button_y.onmouseout = function() {
            return button_y.innerText = 'y';
        }
        button_u.onmouseover = function() {
            return button_u.innerText = 'U';
        }
        button_u.onmouseout = function() {
            return button_u.innerText = 'u';
        }
        button_i.onmouseover = function() {
            return button_i.innerText = 'I';
        }
        button_i.onmouseout = function() {
            return button_i.innerText = 'i';
        }
        button_o.onmouseover = function() {
            return button_o.innerText = 'O';
        }
        button_o.onmouseout = function() {
            return button_o.innerText = 'o';
        }
        button_p.onmouseover = function() {
            return button_p.innerText = 'P';
        }
        button_p.onmouseout = function() {
            return button_p.innerText = 'p';
        }
        button_a.onmouseover = function() {
            return button_a.innerText = 'A';
        }
        button_a.onmouseout = function() {
            return button_a.innerText = 'a';
        }
        button_s.onmouseover = function() {
            return button_s.innerText = 'S';
        }
        button_s.onmouseout = function() {
            return button_s.innerText = 's';
        }
        button_d.onmouseover = function() {
            return button_d.innerText = 'D';
        }
        button_d.onmouseout = function() {
            return button_d.innerText = 'd';
        }
        button_f.onmouseover = function() {
            return button_f.innerText = 'F';
        }
        button_f.onmouseout = function() {
            return button_f.innerText = 'f';
        }
        button_g.onmouseover = function() {
            return button_g.innerText = 'G';
        }
        button_g.onmouseout = function() {
            return button_g.innerText = 'g';
        }
        button_h.onmouseover = function() {
            return button_h.innerText = 'H';
        }
        button_h.onmouseout = function() {
            return button_h.innerText = 'h';
        }
        button_j.onmouseover = function() {
            return button_j.innerText = 'J';
        }
        button_j.onmouseout = function() {
            return button_j.innerText = 'j';
        }
        button_k.onmouseover = function() {
            return button_k.innerText = 'K';
        }
        button_k.onmouseout = function() {
            return button_k.innerText = 'k';
        }
        button_l.onmouseover = function() {
            return button_l.innerText = 'L';
        }
        button_l.onmouseout = function() {
            return button_l.innerText = 'l';
        }
        button_z.onmouseover = function() {
            return button_z.innerText = 'Z';
        }
        button_z.onmouseout = function() {
            return button_z.innerText = 'z';
        }
        button_x.onmouseover = function() {
            return button_x.innerText = 'X';
        }
        button_x.onmouseout = function() {
            return button_x.innerText = 'x';
        }
        button_c.onmouseover = function() {
            return button_c.innerText = 'C';
        }
        button_c.onmouseout = function() {
            return button_c.innerText = 'c';
        }
        button_v.onmouseover = function() {
            return button_v.innerText = 'V';
        }
        button_v.onmouseout = function() {
            return button_v.innerText = 'v';
        }
        button_b.onmouseover = function() {
            return button_b.innerText = 'B';
        }
        button_b.onmouseout = function() {
            return button_b.innerText = 'b';
        }
        button_n.onmouseover = function() {
            return button_n.innerText = 'N';
        }
        button_n.onmouseout = function() {
            return button_n.innerText = 'n';
        }
        button_m.onmouseover = function() {
            return button_m.innerText = 'M';
        }
        button_m.onmouseout = function() {
            return button_m.innerText = 'm';
        }
        button_bracket.onmouseover = function() {
            return button_bracket.innerText = '{';
        }
        button_bracket.onmouseout = function() {
            return button_bracket.innerText = '[';
        }
        button_bracket2.onmouseover = function() {
            return button_bracket2.innerText = '}';
        }
        button_bracket2.onmouseout = function() {
            return button_bracket2.innerText = ']';
        }
        button_slash.onmouseover = function() {
            return button_slash.innerText = '|';
        }
        button_slash.onmouseout = function() {
            return button_slash.innerText = '\\'
        }

        button_colon.onmouseover = function() {
            return button_colon.innerText = ':';
        }
        button_colon.onmouseout = function() {
            return button_colon.innerText = ';';
        }
        button_quotes.onmouseover = function() {
            return button_quotes.innerText = '\'\'';
        }
        button_quotes.onmouseout = function() {
            return button_quotes.innerText = '\'';
        }
        button_comma.onmouseover = function() {
            return button_comma.innerText = '<';
        }
        button_comma.onmouseout = function() {
            return button_comma.innerText = ',';
        }
        button_point.onmouseover = function() {
            return button_point.innerText = '>';
        }
        button_point.onmouseout = function() {
            return button_point.innerText = '.';
        }
        button_slash2.onmouseover = function() {
            return button_slash2.innerText = '?';
        }
        button_slash2.onmouseout = function() {
            return button_slash2.innerText = '/';
        }



    })






    button.addEventListener('mouseup', (event) => {
        area.value += button.innerText
    })
    button_1.addEventListener('mouseup', (event) => {
        area.value += button_1.innerText
    })
    button_2.addEventListener('mouseup', (event) => {
        area.value += button_2.innerText
    })
    button_3.addEventListener('mouseup', (event) => {
        area.value += button_3.innerText
    })
    button_4.addEventListener('mouseup', (event) => {
        area.value += button_4.innerText
    })
    button_5.addEventListener('mouseup', (event) => {
        area.value += button_5.innerText
    })
    button_6.addEventListener('mouseup', (event) => {
        area.value += button_6.innerText
    })
    button_7.addEventListener('mouseup', (event) => {
        area.value += button_7.innerText
    })
    button_8.addEventListener('mouseup', (event) => {
        area.value += button_8.innerText
    })
    button_9.addEventListener('mouseup', (event) => {
        area.value += button_9.innerText
    })
    button_0.addEventListener('mouseup', (event) => {
        area.value += button_0.innerText
    })
    button_.addEventListener('mouseup', (event) => {
        area.value += button_.innerText
    })
    button_plus.addEventListener('mouseup', (event) => {
        area.value += button_plus.innerText
    })
    button_q.addEventListener('mouseup', (event) => {
        area.value += button_q.innerText
    })
    button_w.addEventListener('mouseup', (event) => {
        area.value += button_w.innerText
    })
    button_e.addEventListener('mouseup', (event) => {
        area.value += button_e.innerText
    })
    button_r.addEventListener('mouseup', (event) => {
        area.value += button_r.innerText
    })
    button_t.addEventListener('mouseup', (event) => {
        area.value += button_t.innerText
    })
    button_y.addEventListener('mouseup', (event) => {
        area.value += button_y.innerText
    })
    button_u.addEventListener('mouseup', (event) => {
        area.value += button_u.innerText
    })
    button_i.addEventListener('mouseup', (event) => {
        area.value += button_i.innerText
    })
    button_o.addEventListener('mouseup', (event) => {
        area.value += button_o.innerText
    })
    button_p.addEventListener('mouseup', (event) => {
        area.value += button_p.innerText
    })
    button_a.addEventListener('mouseup', (event) => {
        area.value += button_a.innerText
    })
    button_s.addEventListener('mouseup', (event) => {
        area.value += button_s.innerText
    })
    button_d.addEventListener('mouseup', (event) => {
        area.value += button_d.innerText
    })
    button_f.addEventListener('mouseup', (event) => {
        area.value += button_f.innerText
    })
    button_g.addEventListener('mouseup', (event) => {
        area.value += button_g.innerText
    })
    button_h.addEventListener('mouseup', (event) => {
        area.value += button_h.innerText
    })
    button_j.addEventListener('mouseup', (event) => {
        area.value += button_j.innerText
    })
    button_k.addEventListener('mouseup', (event) => {
        area.value += button_k.innerText
    })
    button_l.addEventListener('mouseup', (event) => {
        area.value += button_l.innerText
    })
    button_z.addEventListener('mouseup', (event) => {
        area.value += button_z.innerText
    })
    button_x.addEventListener('mouseup', (event) => {
        area.value += button_x.innerText
    })
    button_c.addEventListener('mouseup', (event) => {
        area.value += button_c.innerText
    })
    button_v.addEventListener('mouseup', (event) => {
        area.value += button_v.innerText
    })
    button_b.addEventListener('mouseup', (event) => {
        area.value += button_b.innerText
    })
    button_n.addEventListener('mouseup', (event) => {
        area.value += button_n.innerText
    })
    button_m.addEventListener('mouseup', (event) => {
        area.value += button_m.innerText
    })
    button_bracket.addEventListener('mouseup', (event) => {
        area.value += button_bracket.innerText
    })
    button_bracket2.addEventListener('mouseup', (event) => {
        area.value += button_bracket2.innerText
    })
    button_slash.addEventListener('mouseup', (event) => {
        area.value += button_slash.innerText
    })
    button_colon.addEventListener('mouseup', (event) => {
        area.value += button_colon.innerText
    })
    button_quotes.addEventListener('mouseup', (event) => {
        area.value += button_quotes.innerText
    })
    button_comma.addEventListener('mouseup', (event) => {
        area.value += button_comma.innerText
    })
    button_point.addEventListener('mouseup', (event) => {
        area.value += button_point.innerText
    })
    button_slash2.addEventListener('mouseup', (event) => {
        area.value += button_slash2.innerText
    })


    document.body.addEventListener('mouseup', (event) => { //подправить!
        button.onmouseout = function() {
            return button.innerText = '`';
        }
        button.onmouseover = function() {
            return button.innerText = '`';

        }
        button_1.onmouseout = function() {
            return button_1.innerText = '1';
        }
        button_1.onmouseover = function() {
            return button_1.innerText = '1';

        }
        button_2.onmouseout = function() {
            return button_2.innerText = '2';
        }
        button_2.onmouseover = function() {
            return button_2.innerText = '2';

        }
        button_3.onmouseout = function() {
            return button_3.innerText = '3';
        }
        button_3.onmouseover = function() {
            return button_3.innerText = '3';

        }
        button_4.onmouseout = function() {
            return button_4.innerText = '4';
        }
        button_4.onmouseover = function() {
            return button_4.innerText = '4';

        }
        button_5.onmouseout = function() {
            return button_5.innerText = '5';
        }
        button_5.onmouseover = function() {
            return button_5.innerText = '5';

        }
        button_6.onmouseout = function() {
            return button_6.innerText = '6';
        }
        button_6.onmouseover = function() {
            return button_6.innerText = '6';

        }
        button_7.onmouseout = function() {
            return button_7.innerText = '7';
        }
        button_7.onmouseover = function() {
            return button_7.innerText = '7';

        }
        button_8.onmouseout = function() {
            return button_8.innerText = '8';
        }
        button_8.onmouseover = function() {
            return button_8.innerText = '8';

        }
        button_9.onmouseout = function() {
            return button_9.innerText = '9';
        }
        button_9.onmouseover = function() {
            return button_9.innerText = '9';

        }
        button_0.onmouseout = function() {
            return button_0.innerText = '0';
        }
        button_0.onmouseover = function() {
            return button_0.innerText = '0';

        }
        button_.onmouseout = function() {
            return button_.innerText = '-';
        }
        button_.onmouseover = function() {
            return button_.innerText = '-';

        }
        button_plus.onmouseout = function() {
            return button_plus.innerText = '=';
        }
        button_plus.onmouseover = function() {
            return button_plus.innerText = '=';

        }
        button_q.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_q.innerText = 'q';
            }
        }
        button_q.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_q.innerText = 'q';
            }
        }
        button_w.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_w.innerText = 'w';
            }
        }
        button_w.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_w.innerText = 'w';
            }
        }
        button_e.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_e.innerText = 'e';
            }
        }
        button_e.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_e.innerText = 'e';
            }
        }
        button_r.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_r.innerText = 'r';
            }
        }
        button_r.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_r.innerText = 'r';
            }
        }
        button_t.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_t.innerText = 't';
            }
        }
        button_t.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_t.innerText = 't';
            }
        }
        button_y.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_y.innerText = 'y';
            }
        }
        button_y.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_y.innerText = 'y';
            }
        }
        button_u.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_u.innerText = 'u';
            }
        }
        button_u.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_u.innerText = 'u';
            }
        }
        button_i.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_i.innerText = 'i';
            }
        }
        button_i.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_i.innerText = 'i';
            }
        }
        button_o.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_o.innerText = 'o';
            }
        }
        button_o.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_o.innerText = 'o';
            }
        }
        button_p.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_p.innerText = 'p';
            }
        }
        button_p.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_p.innerText = 'p';
            }
        }

        button_a.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_a.innerText = 'a';
            }
        }
        button_a.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_a.innerText = 'a';
            }
        }
        button_s.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_s.innerText = 's';
            }
        }
        button_s.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_s.innerText = 's';
            }
        }
        button_d.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_d.innerText = 'd';
            }
        }
        button_d.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_d.innerText = 'd';
            }
        }
        button_f.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_f.innerText = 'f';
            }
        }
        button_f.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_f.innerText = 'f';
            }
        }
        button_g.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_g.innerText = 'g';
            }
        }
        button_g.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_g.innerText = 'g';
            }
        }
        button_h.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_h.innerText = 'h';
            }
        }
        button_h.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_h.innerText = 'h';
            }
        }
        button_j.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_j.innerText = 'j';
            }
        }
        button_j.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_j.innerText = 'j';
            }
        }
        button_k.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_k.innerText = 'k';
            }
        }
        button_k.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_k.innerText = 'k';
            }
        }
        button_l.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_l.innerText = 'l';
            }
        }
        button_l.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_l.innerText = 'l';
            }
        }

        button_z.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_z.innerText = 'z';
            }
        }
        button_z.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_z.innerText = 'z';
            }
        }

        button_x.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_x.innerText = 'x';
            }
        }
        button_x.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_x.innerText = 'x';
            }
        }
        button_c.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_c.innerText = 'c';
            }
        }
        button_c.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_c.innerText = 'c';
            }
        }
        button_v.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_v.innerText = 'v';
            }
        }
        button_v.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_v.innerText = 'v';
            }
        }
        button_b.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_b.innerText = 'b';
            }
        }
        button_b.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_b.innerText = 'b';
            }
        }
        button_n.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_n.innerText = 'n';
            }
        }
        button_n.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_n.innerText = 'n';
            }
        }
        button_m.onmouseout = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_m.innerText = 'm';
            }
        }
        button_m.onmouseover = function() {
            if (button_capsLock.style.backgroundColor == 'rgb(74, 74, 74)') {
                return button_m.innerText = 'm';
            }
        }
        button_bracket.onmouseout = function() {
            return button_bracket.innerText = '[';
        }
        button_bracket.onmouseover = function() {
            return button_bracket.innerText = '[';
        }
        button_bracket2.onmouseout = function() {
            return button_bracket2.innerText = ']';
        }
        button_bracket2.onmouseover = function() {
            return button_bracket2.innerText = ']';
        }
        button_slash.onmouseout = function() {
            return button_slash.innerText = '\\';
        }
        button_slash.onmouseover = function() {
            return button_slash.innerText = '\\';
        }
        button_colon.onmouseout = function() {
            return button_colon.innerText = ';';
        }
        button_colon.onmouseover = function() {
            return button_colon.innerText = ';';
        }
        button_quotes.onmouseout = function() {
            return button_quotes.innerText = '\'';
        }
        button_quotes.onmouseover = function() {
            return button_quotes.innerText = '\'';
        }

        button_comma.onmouseout = function() {
            return button_comma.innerText = ',';
        }
        button_comma.onmouseover = function() {
            return button_comma.innerText = ',';
        }

        button_point.onmouseout = function() {
            return button_point.innerText = '.';
        }
        button_point.onmouseover = function() {
            return button_point.innerText = '.';
        }

        button_slash2.onmouseout = function() {
            return button_slash2.innerText = '/';
        }
        button_slash2.onmouseover = function() {
            return button_slash2.innerText = '/';
        }

    })




    let counterButtonAlt = 0
    button_alt.addEventListener('mousedown', (event) => { //Функционал переключение языка
        counterButtonAlt++

        button_shift.onmouseout = function() {
            if (counterButtonAlt % 2 == true) {
                button_alt.style.backgroundColor = 'red'
                button_shift.style.backgroundColor = 'red'
                for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                    arrButtonLetterstwo[i].innerText = russianLetters[i]
                }
                button.innerText = 'ё';
                button_bracket.innerText = 'х';
                button_bracket2.innerText = 'ъ';
                button_colon.innerText = 'ж';
                button_quotes.innerText = 'э';
                button_comma.innerText = 'б';
                button_point.innerText = 'ю';
                localStorage.setItem('leng', 'ru');
            }
            if (counterButtonAlt % 2 != true) {
                button_alt.style.backgroundColor = 'rgb(74, 74, 74)'
                button_shift.style.backgroundColor = 'rgb(74, 74, 74)'
                for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                    arrButtonLetterstwo[i].innerText = englishLetters[i]
                }
                button.innerText = '`'
                button_bracket.innerText = '[';
                button_bracket2.innerText = ']';
                button_colon.innerText = ';'
                button_quotes.innerText = '\''
                button_comma.innerText = ',';
                button_point.innerText = '.';
                localStorage.setItem('leng', 'en');
            }
        }

    })
    if (localStorage.getItem('leng') == 'ru') {
        for (let i = 0; i < arrButtonLetterstwo.length; i++) {
            arrButtonLetterstwo[i].innerText = russianLetters[i]
        }
        button.innerText = 'ё';
        button_bracket.innerText = 'х';
        button_bracket2.innerText = 'ъ';
        button_colon.innerText = 'ж';
        button_quotes.innerText = 'э';
        button_comma.innerText = 'б';
        button_point.innerText = 'ю';
    }
    if (localStorage.getItem('leng') == 'en') {
        for (let i = 0; i < arrButtonLetterstwo.length; i++) {
            arrButtonLetterstwo[i].innerText = englishLetters[i]
        }
        button.innerText = '`'
        button_bracket.innerText = '[';
        button_bracket2.innerText = ']';
        button_colon.innerText = ';'
        button_quotes.innerText = '\''
        button_comma.innerText = ',';
        button_point.innerText = '.';
    }


    let capsLockCounterNew = 0;
    let buutLan = 0;
    document.addEventListener('keydown', (event) => { // работа с кнопками физ. клава
        if (event.key == '`' || event.key == '~') {
            area.value += button.innerText
            button.style.backgroundColor = 'red'
            button.style.borderRadius = '26px'
            button.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '1') {
            area.value += button_1.innerText
            button_1.style.backgroundColor = 'red'
            button_1.style.borderRadius = '26px'
            button_1.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '!') {
            button_1.innerText = '!'
            area.value += button_1.innerText
            button_1.style.backgroundColor = 'red'
            button_1.style.borderRadius = '26px'
            button_1.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '2') {
            area.value += button_2.innerText
            button_2.style.backgroundColor = 'red'
            button_2.style.borderRadius = '26px'
            button_2.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '@') {
            button_2.innerText = '@'
            area.value += button_2.innerText
            button_2.style.backgroundColor = 'red'
            button_2.style.borderRadius = '26px'
            button_2.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '3') {
            area.value += button_3.innerText
            button_3.style.backgroundColor = 'red'
            button_3.style.borderRadius = '26px'
            button_3.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '#') {
            button_3.innerText = '#'
            area.value += button_3.innerText
            button_3.style.backgroundColor = 'red'
            button_3.style.borderRadius = '26px'
            button_3.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '4') {
            area.value += button_4.innerText
            button_4.style.backgroundColor = 'red'
            button_4.style.borderRadius = '26px'
            button_4.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '$') {
            button_4.innerText = '$'
            area.value += button_4.innerText
            button_4.style.backgroundColor = 'red'
            button_4.style.borderRadius = '26px'
            button_4.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '5') {
            area.value += button_5.innerText
            button_5.style.backgroundColor = 'red'
            button_5.style.borderRadius = '26px'
            button_5.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '%') {
            button_5.innerText = '%'
            area.value += button_5.innerText
            button_5.style.backgroundColor = 'red'
            button_5.style.borderRadius = '26px'
            button_5.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '6') {
            area.value += button_6.innerText
            button_6.style.backgroundColor = 'red'
            button_6.style.borderRadius = '26px'
            button_6.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '^') {
            button_6.innerText = '^'
            area.value += button_6.innerText
            button_6.style.backgroundColor = 'red'
            button_6.style.borderRadius = '26px'
            button_6.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '7') {
            area.value += button_7.innerText
            button_7.style.backgroundColor = 'red'
            button_7.style.borderRadius = '26px'
            button_7.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '&') {
            button_7.innerText = '&'
            area.value += button_7.innerText
            button_7.style.backgroundColor = 'red'
            button_7.style.borderRadius = '26px'
            button_7.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '8') {
            area.value += button_8.innerText
            button_8.style.backgroundColor = 'red'
            button_8.style.borderRadius = '26px'
            button_8.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '*') {
            button_8.innerText = '*'
            area.value += button_8.innerText
            button_8.style.backgroundColor = 'red'
            button_8.style.borderRadius = '26px'
            button_8.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '9') {
            area.value += button_9.innerText
            button_9.style.backgroundColor = 'red'
            button_9.style.borderRadius = '26px'
            button_9.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '(') {
            button_9.innerText = '('
            area.value += button_9.innerText
            button_9.style.backgroundColor = 'red'
            button_9.style.borderRadius = '26px'
            button_9.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '0') {
            area.value += button_0.innerText
            button_0.style.backgroundColor = 'red'
            button_0.style.borderRadius = '26px'
            button_0.style.transition = 'border-radius 0.7s'
        }
        if (event.key == ')') {
            button_0.innerText = ')'
            area.value += button_0.innerText
            button_0.style.backgroundColor = 'red'
            button_0.style.borderRadius = '26px'
            button_0.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '-') {
            area.value += button_.innerText
            button_.style.backgroundColor = 'red'
            button_.style.borderRadius = '26px'
            button_.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '_') {
            button_.innerText = '_'
            area.value += button_.innerText
            button_.style.backgroundColor = 'red'
            button_.style.borderRadius = '26px'
            button_.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '=') {
            area.value += button_plus.innerText
            button_plus.style.backgroundColor = 'red'
            button_plus.style.borderRadius = '26px'
            button_plus.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '+') {
            button_plus.innerText = '+'
            area.value += button_plus.innerText
            button_plus.style.backgroundColor = 'red'
            button_plus.style.borderRadius = '26px'
            button_plus.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'Backspace') {
            area.value = area.value.slice(0, -1)
            buttonBackspace.style.backgroundColor = 'red'
            buttonBackspace.style.borderRadius = '26px'
            buttonBackspace.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'Delete') {
            area.value = area.value.slice(0, -1)
            button_del.style.backgroundColor = 'red'
            button_del.style.borderRadius = '26px'
            button_del.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'Tab') {
            button_TAB.style.backgroundColor = 'red'
            button_TAB.style.borderRadius = '26px'
            button_TAB.style.transition = 'border-radius 0.7s'

            function butTab() {
                button_TAB.style.backgroundColor = 'rgb(74, 74, 74)'
                button_TAB.style.borderRadius = '7px'
            }
            setTimeout(butTab, 200);
            if (event.keyCode == 9) { event.preventDefault() };
        }
        if (event.key == 'q' || event.key == 'Q' || event.key == 'й' || event.key == 'Й') {
            area.value += button_q.innerText
            button_q.style.backgroundColor = 'red'
            button_q.style.borderRadius = '26px'
            button_q.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'w' || event.key == 'W' || event.key == 'ц' || event.key == 'Ц') {
            area.value += button_w.innerText
            button_w.style.backgroundColor = 'red'
            button_w.style.borderRadius = '26px'
            button_w.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'e' || event.key == 'E' || event.key == 'у' || event.key == 'У') {
            area.value += button_e.innerText
            button_e.style.backgroundColor = 'red'
            button_e.style.borderRadius = '26px'
            button_e.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'r' || event.key == 'R' || event.key == 'к' || event.key == 'К') {
            area.value += button_r.innerText
            button_r.style.backgroundColor = 'red'
            button_r.style.borderRadius = '26px'
            button_r.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 't' || event.key == 'T' || event.key == 'е' || event.key == 'Е') {
            area.value += button_t.innerText
            button_t.style.backgroundColor = 'red'
            button_t.style.borderRadius = '26px'
            button_t.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'y' || event.key == 'Y' || event.key == 'н' || event.key == 'Н') {
            area.value += button_y.innerText
            button_y.style.backgroundColor = 'red'
            button_y.style.borderRadius = '26px'
            button_y.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'u' || event.key == 'U' || event.key == 'г' || event.key == 'Г') {
            area.value += button_u.innerText
            button_u.style.backgroundColor = 'red'
            button_u.style.borderRadius = '26px'
            button_u.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'i' || event.key == 'I' || event.key == 'ш' || event.key == 'Ш') {
            area.value += button_i.innerText
            button_i.style.backgroundColor = 'red'
            button_i.style.borderRadius = '26px'
            button_i.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'o' || event.key == 'O' || event.key == 'щ' || event.key == 'Щ') {
            area.value += button_o.innerText
            button_o.style.backgroundColor = 'red'
            button_o.style.borderRadius = '26px'
            button_o.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'p' || event.key == 'P' || event.key == 'з' || event.key == 'З') {
            area.value += button_p.innerText
            button_p.style.backgroundColor = 'red'
            button_p.style.borderRadius = '26px'
            button_p.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '[' || event.key == 'х' || event.key == 'Х') {
            area.value += button_bracket.innerText
            button_bracket.style.backgroundColor = 'red'
            button_bracket.style.borderRadius = '26px'
            button_b.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '{') {
            button_bracket.innerText = '{'
            area.value += button_bracket.innerText
            button_bracket.style.backgroundColor = 'red'
            button_bracket.style.borderRadius = '26px'
            button_bracket.style.transition = 'border-radius 0.7s'
        }
        if (event.key == ']' || event.key == 'ъ' || event.key == 'Ъ') {
            area.value += button_bracket2.innerText
            button_bracket2.style.backgroundColor = 'red'
            button_bracket2.style.borderRadius = '26px'
            button_bracket2.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '}') {
            button_bracket2.innerText = '}'
            area.value += button_bracket2.innerText
            button_bracket2.style.backgroundColor = 'red'
            button_bracket2.style.borderRadius = '26px'
            button_bracket2.style.transition = 'border-radius 0.7s'
        }

        if (event.key == '\\') {
            area.value += button_slash.innerText
            button_slash.style.backgroundColor = 'red'
            button_slash.style.borderRadius = '26px'
            button_slash.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '|') {
            button_slash.innerText = '|'
            area.value += button_slash.innerText
            button_slash.style.backgroundColor = 'red'
            button_slash.style.borderRadius = '26px'
            button_slash.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'CapsLock') {

            capsLockCounterNew += 1
            if (capsLockCounterNew % 2 == true) {
                button_capsLock.style.backgroundColor = 'red';
                button_capsLock.style.borderRadius = '19px';
                for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                    arrButtonLetterstwo[i].innerHTML = arrButtonLetterstwo[i].innerHTML.toLocaleUpperCase()
                }

            }
            if (capsLockCounterNew % 2 != true) {
                button_capsLock.style.backgroundColor = 'rgb(74, 74, 74)';
                button_capsLock.style.borderRadius = '7px'
                for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                    arrButtonLetterstwo[i].innerHTML = arrButtonLetterstwo[i].innerHTML.toLocaleLowerCase()
                }

            }

        }

        if (event.key == 'a' || event.key == 'A' || event.key == 'ф' || event.key == 'Ф') {
            area.value += button_a.innerText
            button_a.style.backgroundColor = 'red'
            button_a.style.borderRadius = '26px'
            button_a.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 's' || event.key == 'S' || event.key == 'ы' || event.key == 'Ы') {
            area.value += button_s.innerText
            button_s.style.backgroundColor = 'red'
            button_s.style.borderRadius = '26px'
            button_s.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'd' || event.key == 'D' || event.key == 'в' || event.key == 'В') {
            area.value += button_d.innerText
            button_d.style.backgroundColor = 'red'
            button_d.style.borderRadius = '26px'
            button_d.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'f' || event.key == 'F' || event.key == 'а' || event.key == 'А') {
            area.value += button_f.innerText
            button_f.style.backgroundColor = 'red'
            button_f.style.borderRadius = '26px'
            button_f.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'g' || event.key == 'G' || event.key == 'п' || event.key == 'П') {
            area.value += button_g.innerText
            button_g.style.backgroundColor = 'red'
            button_g.style.borderRadius = '26px'
            button_g.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'h' || event.key == 'H' || event.key == 'р' || event.key == 'Р') {
            area.value += button_h.innerText
            button_h.style.backgroundColor = 'red'
            button_h.style.borderRadius = '26px'
            button_h.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'j' || event.key == 'J' || event.key == 'о' || event.key == 'О') {
            area.value += button_j.innerText
            button_j.style.backgroundColor = 'red'
            button_j.style.borderRadius = '26px'
            button_j.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'k' || event.key == 'K' || event.key == 'л' || event.key == 'Л') {
            area.value += button_k.innerText
            button_k.style.backgroundColor = 'red'
            button_k.style.borderRadius = '26px'
            button_k.style.transition = 'border-radius 0.7s'
        }
        if (event.key == 'l' || event.key == 'L' || event.key == 'д' || event.key == 'Д') {
            area.value += button_l.innerText
            button_l.style.backgroundColor = 'red'
            button_l.style.borderRadius = '26px'
            button_l.style.transition = 'border-radius 0.7s'
        }
        if (event.key == ';' || event.key == ':' || event.key == 'ж' || event.key == 'Ж') {
            area.value += button_colon.innerText
            button_colon.style.backgroundColor = 'red'
            button_colon.style.borderRadius = '26px'
            button_colon.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "'" || event.key == '\'' || event.key == 'э' || event.key == 'Э') {
            area.value += button_quotes.innerText
            button_quotes.style.backgroundColor = 'red'
            button_quotes.style.borderRadius = '26px'
            button_quotes.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "Enter") {
            area.value += '\n'
            button_enter.style.backgroundColor = 'red'
            button_enter.style.borderRadius = '26px'
            button_enter.style.transition = 'border-radius 0.7s'
        }
        if (event.code == "ShiftLeft") {
            button_shift.style.backgroundColor = 'red'
            button_shift.style.borderRadius = '26px'
            button_shift.style.transition = 'border-radius 0.7s'

            if (button_alt.style.borderRadius == '26px' && button_shift.style.borderRadius == '26px') { //переключение языка на физ.клаве
                buutLan++
                if (buutLan % 2 == true) {
                    for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                        arrButtonLetterstwo[i].innerText = russianLetters[i]
                    }
                    button.innerText = 'ё';
                    button_bracket.innerText = 'х';
                    button_bracket2.innerText = 'ъ';
                    button_colon.innerText = 'ж';
                    button_quotes.innerText = 'э';
                    button_comma.innerText = 'б';
                    button_point.innerText = 'ю';
                    localStorage.setItem('leng', 'ru');
                }
                if (buutLan % 2 != true) {
                    for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                        arrButtonLetterstwo[i].innerText = englishLetters[i];
                    }
                    button.innerText = '`';
                    button_bracket.innerText = '[';
                    button_bracket2.innerText = ']';
                    button_colon.innerText = ';';
                    button_quotes.innerText = '\'';
                    button_comma.innerText = ',';
                    button_point.innerText = '.';
                    localStorage.setItem('leng', 'en');
                }

            }

        }

        if (event.code == "ShiftRight") {
            button_shift2.style.backgroundColor = 'red'
            button_shift2.style.borderRadius = '26px'
            button_shift2.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "z" || event.key == "Z" || event.key == "я" || event.key == 'Я') {
            area.value += button_z.innerText
            button_z.style.backgroundColor = 'red'
            button_z.style.borderRadius = '26px'
            button_z.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "x" || event.key == "X" || event.key == "ч" || event.key == 'Ч') {
            area.value += button_x.innerText
            button_x.style.backgroundColor = 'red'
            button_x.style.borderRadius = '26px'
            button_x.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "c" || event.key == "C" || event.key == "c" || event.key == 'С') {
            area.value += button_c.innerText
            button_c.style.backgroundColor = 'red'
            button_c.style.borderRadius = '26px'
            button_c.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "v" || event.key == "V" || event.key == "м" || event.key == 'М') {
            area.value += button_v.innerText
            button_v.style.backgroundColor = 'red'
            button_v.style.borderRadius = '26px'
            button_v.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "b" || event.key == "B" || event.key == "и" || event.key == 'И') {
            area.value += button_b.innerText
            button_b.style.backgroundColor = 'red'
            button_b.style.borderRadius = '26px'
            button_b.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "n" || event.key == "N" || event.key == "т" || event.key == 'Т') {
            area.value += button_n.innerText
            button_n.style.backgroundColor = 'red'
            button_n.style.borderRadius = '26px'
            button_n.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "m" || event.key == "M" || event.key == "ь" || event.key == 'Ь') {
            area.value += button_m.innerText
            button_m.style.backgroundColor = 'red'
            button_m.style.borderRadius = '26px'
            button_m.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "," || event.key == "б" || event.key == 'Б') {
            area.value += button_comma.innerText
            button_comma.style.backgroundColor = 'red'
            button_comma.style.borderRadius = '26px'
            button_comma.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '<') {
            button_comma.innerText = '<'
            area.value += button_comma.innerText
            button_comma.style.backgroundColor = 'red'
            button_comma.style.borderRadius = '26px'
            button_comma.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "." || event.key == "ю" || event.key == 'Ю') {
            area.value += button_point.innerText
            button_point.style.backgroundColor = 'red'
            button_point.style.borderRadius = '26px'
            button_point.style.transition = 'border-radius 0.7s'
        }
        if (event.key == '>') {
            button_point.innerText = '>'
            area.value += button_point.innerText
            button_point.style.backgroundColor = 'red'
            button_point.style.borderRadius = '26px'
            button_point.style.transition = 'border-radius 0.7s'
        }
        if (event.key == "/" || event.key == "?") {
            area.value += button_slash2.innerText
            button_slash2.style.backgroundColor = 'red'
            button_slash2.style.borderRadius = '26px'
            button_slash2.style.transition = 'border-radius 0.7s'
        }
        if (event.code == 'ArrowUp') {
            area.value += button_up.innerText
            button_up.style.backgroundColor = 'red'
            button_up.style.borderRadius = '26px'
            button_up.style.transition = 'border-radius 0.7s'
        }
        if (event.code == 'ArrowLeft') {
            area.value += button_left.innerText
            button_left.style.backgroundColor = 'red'
            button_left.style.borderRadius = '26px'
            button_left.style.transition = 'border-radius 0.7s'
        }
        if (event.code == 'ArrowRight') {
            area.value += button_right.innerText
            button_right.style.backgroundColor = 'red'
            button_right.style.borderRadius = '26px'
            button_right.style.transition = 'border-radius 0.7s'
        }
        if (event.code == 'ArrowDown') {
            area.value += button_down.innerText
            button_down.style.backgroundColor = 'red'
            button_down.style.borderRadius = '26px'
            button_down.style.transition = 'border-radius 0.7s'
        }
        if (event.code == 'ControlLeft') {
            button_ctrl.style.backgroundColor = 'red'
            button_ctrl.style.borderRadius = '26px'
            button_ctrl.style.transition = 'border-radius 0.7s'
        }
        if (event.code == 'MetaLeft') {
            button_win.style.backgroundColor = 'red'
            button_win.style.borderRadius = '26px'
            button_w.style.transition = 'border-radius 0.7s'
        }

        if (event.code == 'AltLeft') {
            button_alt.style.backgroundColor = 'red';
            button_alt.style.borderRadius = '26px';
            button_alt.style.transition = 'border-radius 0.7s';
            if (event.keyCode == 18) { event.preventDefault() };
        }



        if (event.code == 'Space') {
            area.value += ' ';
            button_space.style.backgroundColor = 'red';
            button_space.style.borderRadius = '26px';
            button_space.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'AltRight') {
            button_alt2.style.backgroundColor = 'red';
            button_alt2.style.borderRadius = '26px';
            button_alt2.style.transition = 'border-radius 0.7s';
            if (event.keyCode == 18) { event.preventDefault() };
        }
        if (event.code == 'ControlRight') {
            button_ctrl2.style.backgroundColor = 'red';
            button_ctrl2.style.borderRadius = '26px';
            button_ctrl2.style.transition = 'border-radius 0.7s';
        }


    })




    document.addEventListener('keyup', (event) => { // работа с кнопками физ. клава
        if (event.key == 'CapsLock') {


            if (capsLockCounterNew % 2 == true) {
                button_capsLock.style.backgroundColor = 'red';
                button_capsLock.style.borderRadius = '19px';
                for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                    arrButtonLetterstwo[i].innerHTML = arrButtonLetterstwo[i].innerHTML.toLocaleUpperCase()
                }

            }
            if (capsLockCounterNew % 2 != true) {
                button_capsLock.style.backgroundColor = 'rgb(74, 74, 74)';
                button_capsLock.style.borderRadius = '7px'
                for (let i = 0; i < arrButtonLetterstwo.length; i++) {
                    arrButtonLetterstwo[i].innerHTML = arrButtonLetterstwo[i].innerHTML.toLocaleLowerCase()
                }

            }

        }
        if (event.key == '`' || event.key == '~') {
            button.style.backgroundColor = 'rgb(74, 74, 74)';
            button.style.borderRadius = '7px';
            button.style.transition = 'border-radius 0.7s';
        }
        if (event.key == '1' || event.key == '!') {
            button_1.style.backgroundColor = 'rgb(47, 47, 47)';
            button_1.style.borderRadius = '7px';
            button_1.style.transition = 'border-radius 0.7s';
            button_1.innerText = '1';
        }

        if (event.key == '2' || event.key == '@') {
            button_2.style.backgroundColor = 'rgb(47, 47, 47)';
            button_2.style.borderRadius = '7px';
            button_2.style.transition = 'border-radius 0.7s';
            button_2.innerText = '2';
        }
        if (event.key == '3' || event.key == '#') {
            button_3.style.backgroundColor = 'rgb(47, 47, 47)';
            button_3.style.borderRadius = '7px';
            button_3.style.transition = 'border-radius 0.7s';
            button_3.innerText = '3';
        }
        if (event.key == '4' || event.key == '$') {
            button_4.style.backgroundColor = 'rgb(47, 47, 47)';
            button_4.style.borderRadius = '7px';
            button_4.style.transition = 'border-radius 0.7s';
            button_4.innerText = '4';
        }
        if (event.key == '5' || event.key == '%') {
            button_5.style.backgroundColor = 'rgb(47, 47, 47)';
            button_5.style.borderRadius = '7px';
            button_5.style.transition = 'border-radius 0.7s';
            button_5.innerText = '5';
        }
        if (event.key == '6' || event.key == '^') {
            button_6.style.backgroundColor = 'rgb(47, 47, 47)';
            button_6.style.borderRadius = '7px';
            button_6.style.transition = 'border-radius 0.7s';
            button_6.innerText = '6';
        }
        if (event.key == '7' || event.key == '&') {
            button_7.style.backgroundColor = 'rgb(47, 47, 47)';
            button_7.style.borderRadius = '7px';
            button_7.style.transition = 'border-radius 0.7s';
            button_7.innerText = '7';
        }
        if (event.key == '8' || event.key == '*') {
            button_8.style.backgroundColor = 'rgb(47, 47, 47)';
            button_8.style.borderRadius = '7px';
            button_8.style.transition = 'border-radius 0.7s';
            button_8.innerText = '8';
        }
        if (event.key == '9' || event.key == '(') {
            button_9.style.backgroundColor = 'rgb(47, 47, 47)';
            button_9.style.borderRadius = '7px';
            button_9.style.transition = 'border-radius 0.7s';
            button_9.innerText = '9';
        }
        if (event.key == '0' || event.key == ')') {
            button_0.style.backgroundColor = 'rgb(47, 47, 47)';
            button_0.style.borderRadius = '7px';
            button_0.style.transition = 'border-radius 0.7s';
            button_0.innerText = '0';
        }
        if (event.key == '-' || event.key == '_') {
            button_.style.backgroundColor = 'rgb(47, 47, 47)';
            button_.style.borderRadius = '7px';
            button_.style.transition = 'border-radius 0.7s';
            button_.innerText = '-';
        }
        if (event.key == '=' || event.key == '+') {
            button_plus.style.backgroundColor = 'rgb(47, 47, 47)';
            button_plus.style.borderRadius = '7px';
            button_plus.style.transition = 'border-radius 0.7s';
            button_plus.innerText = '=';
        }
        if (event.key == 'Backspace') {
            buttonBackspace.style.backgroundColor = 'rgb(74, 74, 74)';
            buttonBackspace.style.borderRadius = '7px';
            buttonBackspace.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'Delete') {
            button_del.style.backgroundColor = 'rgb(74, 74, 74)';
            button_del.style.borderRadius = '7px';
            button_del.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'q' || event.key == 'Q' || event.key == 'й' || event.key == 'Й') {
            button_q.style.backgroundColor = 'rgb(47, 47, 47)';
            button_q.style.borderRadius = '7px';
            button_q.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'w' || event.key == 'W' || event.key == 'ц' || event.key == 'Ц') {
            button_w.style.backgroundColor = 'rgb(47, 47, 47)';
            button_w.style.borderRadius = '7px';
            button_w.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'e' || event.key == 'E' || event.key == 'у' || event.key == 'У') {
            button_e.style.backgroundColor = 'rgb(47, 47, 47)';
            button_e.style.borderRadius = '7px';
            button_e.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'r' || event.key == 'R' || event.key == 'к' || event.key == 'К') {
            button_r.style.backgroundColor = 'rgb(47, 47, 47)';
            button_r.style.borderRadius = '7px';
            button_r.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 't' || event.key == 'T' || event.key == 'е' || event.key == 'Е') {
            button_t.style.backgroundColor = 'rgb(47, 47, 47)';
            button_t.style.borderRadius = '7px';
            button_t.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'y' || event.key == 'Y' || event.key == 'н' || event.key == 'Н') {
            button_y.style.backgroundColor = 'rgb(47, 47, 47)';
            button_y.style.borderRadius = '7px';
            button_y.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'u' || event.key == 'U' || event.key == 'г' || event.key == 'Г') {
            button_u.style.backgroundColor = 'rgb(47, 47, 47)';
            button_u.style.borderRadius = '7px';
            button_u.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'i' || event.key == 'I' || event.key == 'ш' || event.key == 'Ш') {
            button_i.style.backgroundColor = 'rgb(47, 47, 47)';
            button_i.style.borderRadius = '7px';
            button_i.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'o' || event.key == 'O' || event.key == 'щ' || event.key == 'Щ') {
            button_o.style.backgroundColor = 'rgb(47, 47, 47)';
            button_o.style.borderRadius = '7px';
            button_o.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'p' || event.key == 'P' || event.key == 'з' || event.key == 'З') {
            button_p.style.backgroundColor = 'rgb(47, 47, 47)';
            button_p.style.borderRadius = '7px';
            button_p.style.transition = 'border-radius 0.7s';
        }
        if (event.key == '[' || event.key == '{' || event.key == 'х' || event.key == 'Х') {
            button_bracket.style.backgroundColor = 'rgb(47, 47, 47)';
            button_bracket.style.borderRadius = '7px';
            button_bracket.style.transition = 'border-radius 0.7s';
            button_bracket.innerText = '[';
        }
        if (event.key == ']' || event.key == '}' || event.key == 'ъ' || event.key == 'Ъ') {
            button_bracket2.style.backgroundColor = 'rgb(47, 47, 47)';
            button_bracket2.style.borderRadius = '7px';
            button_bracket2.style.transition = 'border-radius 0.7s';
            button_bracket2.innerText = ']';
        }

        if (event.key == '\\' || event.key == '|') {
            button_slash.style.backgroundColor = 'rgb(47, 47, 47)';
            button_slash.style.borderRadius = '7px';
            button_slash.style.transition = 'border-radius 0.7s';
            button_slash.innerText = '\\';
        }

        if (event.key == 'a' || event.key == 'A' || event.key == 'ф' || event.key == 'Ы') {
            button_a.style.backgroundColor = 'rgb(47, 47, 47)';
            button_a.style.borderRadius = '7px';
            button_a.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 's' || event.key == 'S' || event.key == 'ы' || event.key == 'Ы') {
            button_s.style.backgroundColor = 'rgb(47, 47, 47)';
            button_s.style.borderRadius = '7px';
            button_s.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'd' || event.key == 'D' || event.key == 'в' || event.key == 'В') {
            button_d.style.backgroundColor = 'rgb(47, 47, 47)';
            button_d.style.borderRadius = '7px';
            button_d.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'f' || event.key == 'F' || event.key == 'а' || event.key == 'А') {
            button_f.style.backgroundColor = 'rgb(47, 47, 47)';
            button_f.style.borderRadius = '7px';
            button_f.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'g' || event.key == 'G' || event.key == 'п' || event.key == 'П') {
            button_g.style.backgroundColor = 'rgb(47, 47, 47)';
            button_g.style.borderRadius = '7px';
            button_g.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'h' || event.key == 'H' || event.key == 'р' || event.key == 'Р') {
            button_h.style.backgroundColor = 'rgb(47, 47, 47)';
            button_h.style.borderRadius = '7px';
            button_h.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'j' || event.key == 'J' || event.key == 'о' || event.key == 'О') {
            button_j.style.backgroundColor = 'rgb(47, 47, 47)';
            button_j.style.borderRadius = '7px';
            button_j.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'k' || event.key == 'K' || event.key == 'л' || event.key == 'Л') {
            button_k.style.backgroundColor = 'rgb(47, 47, 47)';
            button_k.style.borderRadius = '7px';
            button_k.style.transition = 'border-radius 0.7s';
        }
        if (event.key == 'l' || event.key == 'L' || event.key == 'д' || event.key == 'Д') {
            button_l.style.backgroundColor = 'rgb(47, 47, 47)';
            button_l.style.borderRadius = '7px';
            button_l.style.transition = 'border-radius 0.7s';
        }
        if (event.key == ';' || event.key == ':' || event.key == 'ж' || event.key == 'Ж') {
            button_colon.style.backgroundColor = 'rgb(47, 47, 47)';
            button_colon.style.borderRadius = '7px';
            button_colon.style.transition = 'border-radius 0.7s';
            button_colon.innerText = ';';
        }
        if (event.key == "'" || event.key == '\'' || event.key == 'э' || event.key == 'Э') {
            button_quotes.style.backgroundColor = 'rgb(47, 47, 47)';
            button_quotes.style.borderRadius = '7px';
            button_quotes.style.transition = 'border-radius 0.7s';
            button_quotes.innerText = "'";
        }
        if (event.key == "Enter") {
            button_enter.style.backgroundColor = 'rgb(74, 74, 74)';
            button_enter.style.borderRadius = '7px';
            button_enter.style.transition = 'border-radius 0.7s';
        }
        if (event.code == "ShiftLeft") {
            button_shift.style.backgroundColor = 'rgb(74, 74, 74)';
            button_shift.style.borderRadius = '7px';
            button_shift.style.transition = 'border-radius 0.7s';

        }
        if (event.code == "ShiftRight") {
            button_shift2.style.backgroundColor = 'rgb(74, 74, 74)';
            button_shift2.style.borderRadius = '7px';
            button_shift2.style.transition = 'border-radius 0.7s';
        }
        if (event.key == "z" || event.key == "Z" || event.key == "я" || event.key == 'Я') {
            button_z.style.backgroundColor = 'rgb(47, 47, 47)';
            button_z.style.borderRadius = '7px';
            button_z.style.transition = 'border-radius 0.7s';
        }
        if (event.key == "x" || event.key == "X" || event.key == "ч" || event.key == 'Ч') {
            button_x.style.backgroundColor = 'rgb(47, 47, 47)';
            button_x.style.borderRadius = '7px';
            button_x.style.transition = 'border-radius 0.7s';
        }
        if (event.key == "c" || event.key == "C" || event.key == "c" || event.key == 'С') {
            button_c.style.backgroundColor = 'rgb(47, 47, 47)';
            button_c.style.borderRadius = '7px';
            button_c.style.transition = 'border-radius 0.7s';
        }
        if (event.key == "v" || event.key == "V" || event.key == "м" || event.key == 'М') {
            button_v.style.backgroundColor = 'rgb(47, 47, 47)';
            button_v.style.borderRadius = '7px';
            button_v.style.transition = 'border-radius 0.7s';
        }
        if (event.key == "b" || event.key == "B" || event.key == "и" || event.key == 'И') {
            button_b.style.backgroundColor = 'rgb(47, 47, 47)';
            button_b.style.borderRadius = '7px';
            button_b.style.transition = 'border-radius 0.7s';
        }
        if (event.key == "n" || event.key == "N" || event.key == "т" || event.key == 'Т') {
            button_n.style.backgroundColor = 'rgb(47, 47, 47)';
            button_n.style.borderRadius = '7px';
            button_n.style.transition = 'border-radius 0.7s';
        }
        if (event.key == "m" || event.key == "M" || event.key == "ь" || event.key == 'Ь') {
            button_m.style.backgroundColor = 'rgb(47, 47, 47)';
            button_m.style.borderRadius = '7px';
            button_m.style.transition = 'border-radius 0.7s';
        }
        if (event.key == "," || event.key == "<" || event.key == "б" || event.key == 'Б') {
            button_comma.style.backgroundColor = 'rgb(47, 47, 47)';
            button_comma.style.borderRadius = '7px';
            button_comma.style.transition = 'border-radius 0.7s';
            button_comma.innerText = ',';
        }
        if (event.key == "." || event.key == ">" || event.key == "ю" || event.key == 'Ю') {
            button_point.style.backgroundColor = 'rgb(47, 47, 47)';
            button_point.style.borderRadius = '7px';
            button_point.style.transition = 'border-radius 0.7s';
            button_point.innerText = '.'

        }
        if (event.key == "/" || event.key == "?") {
            button_slash2.style.backgroundColor = 'rgb(47, 47, 47)';
            button_slash2.style.borderRadius = '7px';
            button_slash2.style.transition = 'border-radius 0.7s';
            button_slash2.innerText = '/';
        }
        if (event.code == 'ArrowUp') {
            button_up.style.backgroundColor = 'rgb(74, 74, 74)';
            button_up.style.borderRadius = '7px';
            button_up.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'ArrowLeft') {
            button_left.style.backgroundColor = 'rgb(74, 74, 74)';
            button_left.style.borderRadius = '7px';
            button_left.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'ArrowRight') {
            button_right.style.backgroundColor = 'rgb(74, 74, 74)';
            button_right.style.borderRadius = '7px';
            button_right.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'ArrowDown') {
            button_down.style.backgroundColor = 'rgb(74, 74, 74)';
            button_down.style.borderRadius = '7px';
            button_down.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'ControlLeft') {
            button_ctrl.style.backgroundColor = 'rgb(74, 74, 74)';
            button_ctrl.style.borderRadius = '7px';
            button_ctrl.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'MetaLeft') {
            button_win.style.backgroundColor = 'rgb(74, 74, 74)';
            button_win.style.borderRadius = '7px';
            button_w.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'AltLeft') {
            button_alt.style.backgroundColor = 'rgb(74, 74, 74)';
            button_alt.style.borderRadius = '7px';
            button_alt.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'Space') {
            button_space.style.backgroundColor = 'rgb(47, 47, 47)';
            button_space.style.borderRadius = '7px';
            button_space.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'AltRight') {
            button_alt2.style.backgroundColor = 'rgb(74, 74, 74)';
            button_alt2.style.borderRadius = '7px';
            button_alt2.style.transition = 'border-radius 0.7s';
        }
        if (event.code == 'ControlRight') {
            button_ctrl2.style.backgroundColor = 'rgb(74, 74, 74)';
            button_ctrl2.style.borderRadius = '7px';
            button_ctrl2.style.transition = 'border-radius 0.7s';
        }


    })
}
keyboard()
let key = 0;
key_button.addEventListener('click', (event) => {
    key++
    if (key % 2 == true) {
        virtual_keyboard.style.height = '53vh'
        virtual_keyboard.style.display = 'block'
    }
    if (key % 2 != true) {
        virtual_keyboard.style.height = '0vh'

    }
})