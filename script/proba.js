var keyboardIcon = document.querySelector('.search-form__keyboard');
var keyboard = document.querySelector('.keyboard');
var closeKeyboard = document.getElementById('close-keyboard');
var keyboardBtns = document.querySelectorAll('.keyboard button');
var searchForm = document.querySelector('.search-form__input');
var spinner = document.querySelector('.spinner');
var sMenu = document.querySelector('.sidebarMenu');

keyboardIcon.onclick = function () {
    keyboard.style.top = '50%';
}

closeKeyboard.onclick = function () {
    keyboard.style.top = '-50%';
}

spinner.onclick = function () {
    spinner.classList.toggle("active");
    sMenu.classList.toggle("rollUp");
}


for (let i = 0; i < keyboardBtns.length; i++) {
    keyboardBtns[i].onclick = function () {
        searchForm.value += keyboardBtns[i].textContent.trim();
        if (keyboardBtns[i].textContent.trim() == "") {
            searchForm.value += " ";
        }
        if (keyboardBtns[i].textContent.trim() == "Tab") {
            searchForm.value += "   ";
        }
        if (keyboardBtns[i].textContent.trim() == "⬅") {
            searchForm.value = searchForm.value.slice(0, -2);
        }
        // if (keyboardBtns[i].textContent.trim() == "caps") {
        //     searchForm.value += searchForm.value.ToUpperCase;
        // }

    }
    onclick = function () {

    }
    let rus = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "⬅", "Tab", "й", "ц", "у", "к", "у", "н", "г", "ш", "щ", "з", "х", "ъ", "/", "caps", "ф", "ы", "в", "а", "п", "р", "о", "л",
        "д", "ж", "э", "enter", "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "shift", "Язык", " ", "Ctrl"];

    let eng = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "⬅", "Tab", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/","caps","a", "s", "d", "f", "g", "h", "j", "k",
        "l", ";", "'","enter", "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".","shift", "Leng", " ", "Ctrl"];

}

// й ц у к е н г ш щ з х ъ ф ы в а п р о л д ж э я ч с м и т ь б ю .

// Й Ц У К Е Н Г Ш Щ З Х Ъ Ф Ы В А П Р О Л Д Ж Э Я Ч С М И Т Ь Б Ю .

//Q W E R T Y U I O P [ ] A S D F G H J K L ; ' Z X C V B N M , . /

// q w e r t y u i o p [ ] a s d f g h j k l ; ' z x c v b n m , . /
