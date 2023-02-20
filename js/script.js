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
        input_fields.addEventListener("click", function (){
            error_msg.innerHTML = "";
        })




        //При нажатии на кнопку цифра или оператор переноситься в поле input
        let get_number = document.querySelectorAll('#number')
        get_number.forEach(function (number_button){
            number_button.addEventListener("click", function (){
            input_fields.value += number_button.innerHTML;
            error_msg.innerHTML = "";
        })
        })

        let get_mathOperator = document.querySelectorAll('#math_operator')
        get_mathOperator.forEach(function (mathOperator){
            mathOperator.addEventListener("click", function (){
                input_fields.value += mathOperator.innerHTML;
                error_msg.innerHTML = "";
            })
        })


        let sinBtn = document.getElementById("sin_button");
        let inputFields = document.getElementById("input_fields");

        sinBtn.addEventListener("click", function() {
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
       reset.addEventListener("click", function (){
           let inputReset = document.getElementById('input_fields')
           inputReset.value = "";
           error_msg.innerHTML = "";
       })

       //Settings

       let btnSettings = document.querySelector('.setting_button')
       let menuOpen = document.querySelector('.menuCustom')

       btnSettings.addEventListener("click", function (){
           menuOpen.classList.toggle('menuCustom-open')
       })


       //Dark_Mode Theme
       let darkmode_checkbox = document.getElementById('darkmode');
       let darkmode = document.querySelector('body')
       let button_darkmode = document.querySelectorAll('.button_proportions')
       let inputfield = document.querySelector('.input_fields')
       let settingbutton_DarkTheme = document.querySelector('.setting_button')

       darkmode_checkbox.addEventListener("click", function (){
           darkmode.classList.toggle('dark_mode-body')
           button_darkmode.forEach(function(button_darkmode) {
               button_darkmode.classList.toggle("button_darkmode");
           });
           inputfield.classList.toggle('input_darkmode')
           settingbutton_DarkTheme.classList.toggle('setting_buttonDarkTheme')

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
        anime_checkbox.addEventListener("click", function (){
            anime_bodyTheme.classList.toggle('anime_bodyTheme')
            button_anime.forEach(function (button_anime){
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
        })

        //Запрещаем включать другие теми когда одна уже включена
        let checkboxTheme_Dark = document.getElementById('darkmode')
        let checkboxTheme_Anime = document.getElementById('anime_theme')

        checkboxTheme_Dark.addEventListener('change', function (){
            if (checkboxTheme_Dark.checked) {
                checkboxTheme_Anime.disabled = true;
            } else {
                checkboxTheme_Anime.disabled = false;
            }
        })

        checkboxTheme_Anime.addEventListener('change', function (){
            if (checkboxTheme_Anime.checked){
                checkboxTheme_Dark.disabled = true;
            } else {
                checkboxTheme_Dark.disabled = false;
            }
        })


