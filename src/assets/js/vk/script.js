import { key_button, clear_input } from "../name_constants";
let key = 0;

function keyboard() {
    let input_area = document.createElement('div') //область клавиатуры
    input_area.id = 'input_area';
    input_area.className = "input_area"
    input_area.style.width = '107%';
    input_area.style.display = 'flex';
    input_area.style.flexDirection = 'row';
    input_area.style.flexWrap = 'wrap';
    input_area.style.paddingLeft = '0'
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




}
keyboard();
key_button.addEventListener('click', (event) => {
    key++
    if (key % 2 == true) {
        let element = document.body;
        element.onselectstart = function() { return false; }
        element.onmousedown = function() { return false; }
        virtual_keyboard.style.height = '53vh'
        virtual_keyboard.style.display = 'block'
    } else {
        let element = document.body;
        element.onselectstart = function() { return true; }
        element.onmousedown = function() { return true; }
        virtual_keyboard.style.height = '0vh'

    }

})