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
       //Dark_Mode
       let darkmode_checkbox = document.getElementById('darkmode');
       let darkmode = document.querySelector('body')
       let button_darkmode = document.querySelectorAll('.button_proportions')
       let inputfield = document.querySelector('.input_fields')

       darkmode_checkbox.addEventListener("click", function (){
           darkmode.classList.toggle('dark_mode-body')
           button_darkmode.forEach(function(button_darkmode) {
               button_darkmode.classList.toggle("button_darkmode");
           });
           inputfield.classList.toggle('input_darkmode')



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


