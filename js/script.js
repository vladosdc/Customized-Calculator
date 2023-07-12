let count = document.getElementById('operator_equals');
let input_fields = document.getElementById('input_fields');
let error_msg = document.getElementById('error-message')


count.addEventListener("click", function () {
    let input = input_fields.value;
    if (input === '') {
        error_msg.innerHTML = "Enter something!";
        let img = document.createElement('img');
        img.src = 'img/icon_error.png';
        img.classList.add('img_error')
        error_msg.appendChild(img);
    }
    try {
        let result = math.evaluate(input);
        let showResult = input_fields;
        showResult.value = result;
        showResult.value = result === undefined ? '' : result;

    } catch (error) {
        error_msg.innerHTML = 'Error - check the expression!';
        let img = document.createElement('img');
        img.src = 'img/icon_error.png';
        img.classList.add('img_error')
        error_msg.appendChild(img);
    }
});


input_fields.addEventListener("click", function () {
    error_msg.innerHTML = "";
})


let get_number = document.querySelectorAll('#number')
get_number.forEach(function (number_button) {
    number_button.addEventListener("click", function () {
        input_fields.value += number_button.innerHTML;
        error_msg.innerHTML = "";
    })
})

let get_mathOperator = document.querySelectorAll('#math_operator')
get_mathOperator.forEach(function (mathOperator) {
    mathOperator.addEventListener("click", function () {
        input_fields.value += mathOperator.innerHTML;
        error_msg.innerHTML = "";
    })
})


let sinBtn = document.getElementById("sin_button");
let inputFields = document.getElementById("input_fields");

sinBtn.addEventListener("click", function () {
    let input = inputFields.value;
    if (input === '') {
        error_msg.innerHTML = "Error - check the expression!";
        let img = document.createElement('img');
        img.src = 'img/icon_error.png';
        img.classList.add('img_error')
        error_msg.appendChild(img);
        return;
    }
    error_msg.innerHTML = "";
    let result = Math.sin(parseFloat(input));
    inputFields.value = result;
});

let reset = document.getElementById('reset')
reset.addEventListener("click", function () {
    let inputReset = document.getElementById('input_fields')
    inputReset.value = "";
    error_msg.innerHTML = "";
})

//Settings

let btnSettings = document.querySelector('.setting_button')
let menuOpen = document.querySelector('.menuCustom')

btnSettings.addEventListener("click", function () {
    menuOpen.classList.toggle('menuCustom-open')
})


//Dark_Mode Theme
let darkmode_checkbox = document.getElementById('darkmode');
let darkmode = document.querySelector('body')
let button_darkmode = document.querySelectorAll('.button_proportions')
let inputfield = document.querySelector('.input_fields')
let settingbutton_DarkTheme = document.querySelector('.setting_button')

darkmode_checkbox.addEventListener("click", function () {
    darkmode.classList.toggle('dark_mode-body')
    button_darkmode.forEach(function (button_darkmode) {
        button_darkmode.classList.toggle("button_darkmode");
    });
    inputfield.classList.toggle('input_darkmode')
    settingbutton_DarkTheme.classList.toggle('setting_buttonDarkTheme')

    //Clear BG Settings

    document.body.style.backgroundImage = ""
    backgroundImageInput.value = null

    Title_BG.classList.remove('tileBG_')
    textVersion_BG.classList.remove('backgroundSettings_color')
    textIntarface_ThemeBG.classList.remove('backgroundSettings_color')
    textDarkModeBG.classList.remove('backgroundSettings_color')
    textAnimeThemeBG.classList.remove('backgroundSettings_color')
    textNameChangeBG.classList.remove('backgroundSettings_color')
    textSelectColorBG.classList.remove('backgroundSettings_color')
    textChangeButtonsBG.classList.remove('backgroundSettings_color')
    textSelectSizeNumbersBG.classList.remove('backgroundSettings_color')
    textSelectColorBtnBG.classList.remove('backgroundSettings_color')
    textChangeBackgroundBG.classList.remove('backgroundSettings_color')
    textStroke.classList.remove('backgroundSettings_color')
    text_InputFieldsBG.classList.remove('backgroundSettings_color')
    backgroundButtonsBG.classList.remove('backgroundSettings_color')

    InputFieldBG.style.backgroundImage = ""
    backgroundImageInputField.value = null

    InputFieldBG.classList.remove('InputField_Customized')


    for (let i = 0; i < buttonsBG.length; i++) {
        buttonsBG[i].classList.remove('customized-button');
        buttonsBG[i].classList.remove('numbers_colorCustom');
        buttonsBG[i].style.backgroundImage = ""
        backgroundButtons_change.value = null
    }

})

//Anime Theme
let anime_checkbox = document.getElementById('anime_theme')
let anime_bodyTheme = document.querySelector('body')
let button_anime = document.querySelectorAll('.button_proportions')
let inputfield_anime = document.querySelector('.input_fields')
let getSetting_btn = document.querySelector('.setting_button')
let error_MsgAnime = document.querySelector('#error-message')
let titleAnime = document.querySelector('.title')
let text_versionAnime = document.querySelector('.text_version')
let text_InterfaceAnime = document.querySelector('.text_interfaceTheme')
let text_DarkTheme_Anime = document.querySelector('.text_Darkmode')
let text_AnimeTheme = document.querySelector('.text_anime')
let text_NameChangeAnime = document.querySelector('.change_nameText')
let text_selectcolor_Anime = document.querySelector('.select_colorText')
let text_Stroke_Anime = document.querySelector('.AddShadow_text')
let text_ChangeButtons_Anime = document.querySelector('.change_ButtonsText')
let text_Selectsizenumber_Anime = document.querySelector('.select_SizeButton_Text')
let text_Selectbuttonscolor_Anime = document.querySelector('.select_colorButton')
let text_changeBackground_Anime = document.querySelector('.changeBackground_Text')
let text_ChangeInputFieldBG_Anime = document.querySelector('.changeInputField_Text')
let text_buttonbackgroundBG_Anime = document.querySelector('.text_backgroundBtn')
anime_checkbox.addEventListener("click", function () {
    anime_bodyTheme.classList.toggle('anime_bodyTheme')
    button_anime.forEach(function (button_anime) {
        button_anime.classList.toggle('anime_button');
    })
    inputfield_anime.classList.toggle('anime_inputField')
    getSetting_btn.classList.toggle('setting_buttonAnimeTheme')
    error_MsgAnime.classList.toggle('error_messageAnime')
    titleAnime.classList.toggle('titleAnime_Theme')
    text_versionAnime.classList.toggle('text_versionAnimeTheme')
    text_InterfaceAnime.classList.toggle('themeIntefaceText_AnimeFont')
    text_DarkTheme_Anime.classList.toggle('themeIntefaceText_AnimeFont')
    text_AnimeTheme.classList.toggle('themeIntefaceText_AnimeFont')
    text_NameChangeAnime.classList.toggle('themeIntefaceText_AnimeFont')
    text_selectcolor_Anime.classList.toggle('themeIntefaceText_AnimeFont')
    text_Stroke_Anime.classList.toggle('themeIntefaceText_AnimeFont')
    text_ChangeButtons_Anime.classList.toggle('themeIntefaceText_AnimeFont')
    text_Selectsizenumber_Anime.classList.toggle('themeIntefaceText_AnimeFont')
    text_Selectbuttonscolor_Anime.classList.toggle('themeIntefaceText_AnimeFont')
    text_changeBackground_Anime.classList.toggle('themeIntefaceText_AnimeFont')
    text_ChangeInputFieldBG_Anime.classList.toggle('themeIntefaceText_AnimeFont')
    text_buttonbackgroundBG_Anime.classList.toggle('themeIntefaceText_AnimeFont')

    //Clear BG settings
    document.body.style.backgroundImage = ""
    backgroundImageInput.value = null

    Title_BG.classList.remove('tileBG_')
    textVersion_BG.classList.remove('backgroundSettings_color')
    textIntarface_ThemeBG.classList.remove('backgroundSettings_color')
    textDarkModeBG.classList.remove('backgroundSettings_color')
    textAnimeThemeBG.classList.remove('backgroundSettings_color')
    textNameChangeBG.classList.remove('backgroundSettings_color')
    textSelectColorBG.classList.remove('backgroundSettings_color')
    textChangeButtonsBG.classList.remove('backgroundSettings_color')
    textSelectSizeNumbersBG.classList.remove('backgroundSettings_color')
    textSelectColorBtnBG.classList.remove('backgroundSettings_color')
    textChangeBackgroundBG.classList.remove('backgroundSettings_color')
    textStroke.classList.remove('backgroundSettings_color')
    text_InputFieldsBG.classList.remove('backgroundSettings_color')
    backgroundButtonsBG.classList.remove('backgroundSettings_color')

    InputFieldBG.style.backgroundImage = ""
    backgroundImageInputField.value = null

    InputFieldBG.classList.remove('InputField_Customized')


    for (let i = 0; i < buttonsBG.length; i++) {
        buttonsBG[i].classList.remove('customized-button');
        buttonsBG[i].classList.remove('numbers_colorCustom');
        buttonsBG[i].style.backgroundImage = ""
        backgroundButtons_change.value = null
    }

})


//Change Name
let TitleText = document.querySelector('.title')
let InputChange = document.getElementById('change_nameInput')
let BtnChange = document.querySelector('.ChangeName_btn')

BtnChange.addEventListener('click', function () {
    TitleText.textContent = InputChange.value
    if (InputChange.value === "") {
        TitleText.innerHTML = "Customized Calculator";
    }
})


//Text Stroke

let textStroke_checkbox = document.getElementById('textStroke')
let Title_Stroke = document.querySelector('.title')
textStroke_checkbox.addEventListener('click', function () {
    Title_Stroke.classList.toggle('text_Stroke')
})


let BtnReset = document.querySelector('.ResetChangeName_btn')

BtnReset.addEventListener('click', function () {
    InputChange.value = "";
    TitleText.innerHTML = "Customized Calculator";

    //Clear Text Stroke
    if (textStroke_checkbox.checked) {
        textStroke_checkbox.checked = false
        Title_Stroke.classList.remove('text_Stroke')
    }


    //clear selected color

    if (checkBox_ColorRed.checked) {
        clickEffect_Red.classList.remove('clickEffect_selectColor')
        Name_Calculator.classList.remove('titleColor_Red')
    }

    if (checkBox_ColorOrange.checked) {
        clickEffect_Orange.classList.remove('clickEffect_selectColor')
        Name_Calculator.classList.remove('titleColor_Orange')
    }

    if (checkBox_ColorYellow.checked) {
        clickEffect_Yellow.classList.remove('clickEffect_selectColor')
        Name_Calculator.classList.remove('titleColor_Yellow')
    }

    if (checkBox_ColorGreen.checked) {
        clickEffect_Green.classList.remove('clickEffect_selectColor')
        Name_Calculator.classList.remove('titleColor_Green')
    }

    if (checkBox_ColorBlue.checked) {
        clickEffect_Blue.classList.remove('clickEffect_selectColor')
        Name_Calculator.classList.remove('titleColor_Blue')
    }

    if (checkBox_ColorDarkBlue.checked) {
        clickEffect_DarkBlue.classList.remove('clickEffect_selectColor')
        Name_Calculator.classList.remove('titleColor_DarkBlue')
    }

    if (checkBox_ColorPurple.checked) {
        clickEffect_Purple.classList.remove('clickEffect_selectColor')
        Name_Calculator.classList.remove('titleColor_Purple')
    }

    checkBox_ColorRed.checked = false
    clickEffect_Red.classList.remove('clickEffect_selectColor')
    Name_Calculator.classList.remove('titleColor_Red')

    checkBox_ColorOrange.checked = false
    clickEffect_Orange.classList.remove('clickEffect_selectColor')
    Name_Calculator.classList.remove('titleColor_Orange')

    checkBox_ColorYellow.checked = false
    clickEffect_Yellow.classList.remove('clickEffect_selectColor')
    Name_Calculator.classList.remove('titleColor_Yellow')

    checkBox_ColorBlue.checked = false
    clickEffect_Blue.classList.remove('clickEffect_selectColor')
    Name_Calculator.classList.remove('titleColor_Blue')

    checkBox_ColorDarkBlue.checked = false
    clickEffect_DarkBlue.classList.remove('clickEffect_selectColor')
    Name_Calculator.classList.remove('titleColor_DarkBlue')

    checkBox_ColorPurple.checked = false
    clickEffect_Purple.classList.remove('clickEffect_selectColor')
    Name_Calculator.classList.remove('titleColor_Purple')

    checkBox_ColorGreen.checked = false
    clickEffect_Green.classList.remove('clickEffect_selectColor')
    Name_Calculator.classList.remove('titleColor_Green')
})


//Change Size Buttons

let sizeSmall_Btn = document.querySelector('.sizeSmall_btn')
let sizeMedium_Btn = document.querySelector('.sizeMedium_btn')
let sizeLarge_Btn = document.querySelector('.sizeLarge_btn')
let button_Proportions = document.querySelectorAll('.button_proportions')

sizeSmall_Btn.addEventListener('click', function () {
    button_Proportions.forEach(function (allBtn_Numbers) {
        allBtn_Numbers.classList.toggle('button_Small')
        allBtn_Numbers.classList.remove('button_Medium')
        allBtn_Numbers.classList.remove('button_Large')
    })
})
sizeMedium_Btn.addEventListener('click', function () {
    button_Proportions.forEach(function (allBtn_Numbers) {
        allBtn_Numbers.classList.toggle('button_Medium')
        allBtn_Numbers.classList.remove('button_Small')
        allBtn_Numbers.classList.remove('button_Large')
    })
})
sizeLarge_Btn.addEventListener('click', function () {
    button_Proportions.forEach(function (allBtn_Numbers) {
        allBtn_Numbers.classList.toggle('button_Large')
        allBtn_Numbers.classList.remove('button_Small')
        allBtn_Numbers.classList.remove('button_Medium')
    })
})

let ResetStyleButton_btn = document.querySelector('.ResetButtonSettings_btn')

ResetStyleButton_btn.addEventListener('click', function () {

    clickEffect_YellowBtn.classList.remove('clickEffect_selectColor');
    clickEffect_RedBtn.classList.remove('clickEffect_selectColor');
    clickEffect_GreenBtn.classList.remove('clickEffect_selectColor');
    clickEffect_BlueBtn.classList.remove('clickEffect_selectColor');
    clickEffect_DarkBlueBtn.classList.remove('clickEffect_selectColor');
    clickEffect_PurpleBtn.classList.remove('clickEffect_selectColor');
    clickEffect_OrangeBtn.classList.remove('clickEffect_selectColor');
    ProportionsBtn.forEach(function (BtnAll) {
        BtnAll.classList.remove('BtnColor_Green')
        BtnAll.classList.remove('BtnColor_Blue')
        BtnAll.classList.remove('BtnColor_DarkBlue')
        BtnAll.classList.remove('BtnColor_Purple')
        BtnAll.classList.remove('BtnColor_Yellow')
        BtnAll.classList.remove('BtnColor_Orange')
        BtnAll.classList.remove('BtnColor_Red')


    });

    checkBox_ColorGreenBtn.checked = false;
    checkBox_ColorBlueBtn.checked = false;
    checkBox_ColorDarkBlueBtn.checked = false;
    checkBox_ColorPurpleBtn.checked = false;
    checkBox_ColorYellowBtn.checked = false;
    checkBox_ColorOrangeBtn.checked = false;
    checkBox_ColorRedBtn.checked = false;

    button_Proportions.forEach(function (allBtn_Numbers) {
        allBtn_Numbers.classList.remove('button_Medium')
        allBtn_Numbers.classList.remove('button_Small')
        allBtn_Numbers.classList.remove('button_Large')
    })

});

//Change Background

let backgroundImageInput = document.getElementById('backgroundImageInput');
let Title_BG = document.querySelector('.title')
let textVersion_BG = document.querySelector('.text_version')
let textIntarface_ThemeBG = document.querySelector('.text_interfaceTheme')
let textDarkModeBG = document.querySelector('.text_Darkmode')
let textStroke = document.querySelector('.AddShadow_text')
let textAnimeThemeBG = document.querySelector('.text_anime')
let textNameChangeBG = document.querySelector('.change_nameText')
let textSelectColorBG = document.querySelector('.select_colorText')
let textChangeButtonsBG = document.querySelector('.change_ButtonsText')
let textSelectSizeNumbersBG = document.querySelector('.select_SizeButton_Text')
let textSelectColorBtnBG = document.querySelector('.select_colorButton')
let textChangeBackgroundBG = document.querySelector('.changeBackground_Text')
let text_InputFieldsBG = document.querySelector('.changeInputField_Text')
let backgroundButtonsBG = document.querySelector('.text_backgroundBtn')

backgroundImageInput.addEventListener('change', handleBackgroundImageSelect);

function handleBackgroundImageSelect(event) {
    let reader = new FileReader();
    reader.onload = function () {
        let backgroundImage = `url(${reader.result})`;
        document.body.style.background = 'no-repeat center center fixed';
        document.body.style.backgroundImage = backgroundImage;
        document.body.style.backgroundSize = 'cover';

        Title_BG.classList.add('tileBG_')
        textVersion_BG.classList.add('backgroundSettings_color')
        textIntarface_ThemeBG.classList.add('backgroundSettings_color')
        textDarkModeBG.classList.add('backgroundSettings_color')
        textAnimeThemeBG.classList.add('backgroundSettings_color')
        textNameChangeBG.classList.add('backgroundSettings_color')
        textSelectColorBG.classList.add('backgroundSettings_color')
        textChangeButtonsBG.classList.add('backgroundSettings_color')
        textSelectSizeNumbersBG.classList.add('backgroundSettings_color')
        textSelectColorBtnBG.classList.add('backgroundSettings_color')
        textChangeBackgroundBG.classList.add('backgroundSettings_color')
        textStroke.classList.add('backgroundSettings_color')
        text_InputFieldsBG.classList.add('backgroundSettings_color')
        backgroundButtonsBG.classList.add('backgroundSettings_color')

    };
    reader.readAsDataURL(event.target.files[0]);
}

//reset background button

let resetBackground_btn = document.getElementById('reset_BackgroundBtn')

resetBackground_btn.addEventListener('click', function () {
    document.body.style.backgroundImage = ""
    backgroundImageInput.value = null

    Title_BG.classList.remove('tileBG_')
    textVersion_BG.classList.remove('backgroundSettings_color')
    textIntarface_ThemeBG.classList.remove('backgroundSettings_color')
    textDarkModeBG.classList.remove('backgroundSettings_color')
    textAnimeThemeBG.classList.remove('backgroundSettings_color')
    textNameChangeBG.classList.remove('backgroundSettings_color')
    textSelectColorBG.classList.remove('backgroundSettings_color')
    textChangeButtonsBG.classList.remove('backgroundSettings_color')
    textSelectSizeNumbersBG.classList.remove('backgroundSettings_color')
    textSelectColorBtnBG.classList.remove('backgroundSettings_color')
    textChangeBackgroundBG.classList.remove('backgroundSettings_color')
    textStroke.classList.remove('backgroundSettings_color')
    text_InputFieldsBG.classList.remove('backgroundSettings_color')
    backgroundButtonsBG.classList.remove('backgroundSettings_color')
})


//Change InputField Background


let backgroundImageInputField = document.getElementById('backgroundImageInputFields');
let InputFieldBG = document.getElementById('input_fields')

backgroundImageInputField.addEventListener('change', BGInputField);

function BGInputField(event) {
    let reader = new FileReader();
    reader.onload = function () {
        let backgroundImageInpt = `url(${reader.result})`;
        InputFieldBG.style.background = 'no-repeat center center';
        InputFieldBG.style.backgroundImage = backgroundImageInpt;
        InputFieldBG.style.backgroundSize = 'cover';

        InputFieldBG.classList.add('InputField_Customized')

    };
    reader.readAsDataURL(event.target.files[0]);
}

//reset InputField background

let reset_BackgroundInputField_btn = document.getElementById('reset_BackgroundInputField')


reset_BackgroundInputField_btn.addEventListener('click', function () {
    InputFieldBG.style.backgroundImage = ""
    backgroundImageInputField.value = null

    InputFieldBG.classList.remove('InputField_Customized')
})


//Change Buttons backgorund


let buttonsBG = document.querySelectorAll('.button_proportions');
let backgroundButtons_change = document.getElementById('backgroundButtonsChange');

backgroundButtons_change.addEventListener('change', function (event) {
    let reader = new FileReader();
    reader.onload = function () {
        let backgroundButtons_custom = `url(${reader.result})`;
        for (let i = 0; i < buttonsBG.length; i++) {
            buttonsBG[i].classList.add('customized-button');
            buttonsBG[i].classList.add('numbers_colorCustom')
            buttonsBG[i].style.backgroundImage = backgroundButtons_custom;
        }
    };
    reader.readAsDataURL(event.target.files[0]);
});

let reset_buttonscustom_btn = document.getElementById('ResetButtonSettings_btn');
reset_buttonscustom_btn.addEventListener('click', function () {
    for (let i = 0; i < buttonsBG.length; i++) {
        buttonsBG[i].classList.remove('customized-button');
        buttonsBG[i].classList.remove('numbers_colorCustom');
        buttonsBG[i].style.backgroundImage = ""
        backgroundButtons_change.value = null
    }
});


let checkboxTheme_Dark = document.getElementById('darkmode')
let checkboxTheme_Anime = document.getElementById('anime_theme')

checkboxTheme_Dark.addEventListener('change', function () {
    if (checkboxTheme_Dark.checked) {
        checkboxTheme_Anime.disabled = true;
    } else {
        checkboxTheme_Anime.disabled = false;
    }
})

checkboxTheme_Anime.addEventListener('change', function () {
    if (checkboxTheme_Anime.checked) {
        checkboxTheme_Dark.disabled = true;
    } else {
        checkboxTheme_Dark.disabled = false;
    }
})

//Reset All button

let resetAllBtn = document.querySelector('.ResetAll_btn')
resetAllBtn.addEventListener('click', function () {
    location.reload()
})

