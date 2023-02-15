       let count = document.getElementById('operator_equals');
        count.addEventListener("click", function() {
        let input = document.getElementById('input_fields').value;
        let result = eval(input);
        let showResult = document.getElementById('input_fields');
        showResult.value = result;

         if (input === "") {
             document.getElementById('input_fields').value = input;
            }
        });

        
        //При нажатии на кнопку цифра или оператор переноситься в поле input
        let get_number1 = document.getElementById('number_1')
        get_number1.addEventListener("click", function (){
            input_fields.value += get_number1.innerHTML;
        })

       let get_number2 = document.getElementById('number_2')
        get_number2.addEventListener("click", function (){
            input_fields.value += get_number2.innerHTML;
        })

       let get_number3 = document.getElementById('number_3')
        get_number3.addEventListener("click", function (){
            input_fields.value += get_number3.innerHTML;
        })

       let get_number4 = document.getElementById('number_4')
        get_number4.addEventListener("click", function (){
            input_fields.value += get_number4.innerHTML;
        })

       let get_number5 = document.getElementById('number_5')
        get_number5.addEventListener("click", function (){
            input_fields.value += get_number5.innerHTML;
        })

       let get_number6 = document.getElementById('number_6')
        get_number6.addEventListener("click", function (){
            input_fields.value += get_number6.innerHTML;
        })

       let get_number7 = document.getElementById('number_7')
        get_number7.addEventListener("click", function (){
            input_fields.value += get_number7.innerHTML;
        })

       let get_number8 = document.getElementById('number_8')
        get_number8.addEventListener("click", function (){
            input_fields.value += get_number8.innerHTML;
        })

       let get_number9 = document.getElementById('number_9')
        get_number9.addEventListener("click", function (){
            input_fields.value += get_number9.innerHTML;
        })

       let get_number0 = document.getElementById('number_0')
        get_number0.addEventListener("click", function (){
            input_fields.value += get_number0.innerHTML;
        })

       let get_operatorPlus = document.getElementById('operator_plus')
        get_operatorPlus.addEventListener("click", function (){
            input_fields.value += get_operatorPlus.innerHTML;
        })

        let get_operatorMinus = document.getElementById('operator_minus')
        get_operatorMinus.addEventListener("click", function (){
            input_fields.value += get_operatorMinus.innerHTML;
        })

        let get_operatorMultiplication = document.getElementById('operator_multiplication')
        get_operatorMultiplication.addEventListener("click", function (){
            input_fields.value += get_operatorMultiplication.innerHTML;
        })

        let get_operatorDivision = document.getElementById('operator_division')
        get_operatorDivision.addEventListener("click", function (){
            input_fields.value += get_operatorDivision.innerHTML;
        })

        let get_dot = document.getElementById('dot')
        get_dot.addEventListener("click", function (){
            input_fields.value += get_dot.innerHTML;
        })

       let reset = document.getElementById('reset')
       reset.addEventListener("click", function (){
           let inputReset = document.getElementById('input_fields')
           inputReset.value = ""
       })

       //Settings

       let btnSettings = document.querySelector('.setting_button')
       let menuOpen = document.querySelector('.menuCustom')

       btnSettings.addEventListener("click", function (){
           menuOpen.classList.toggle('menuCustom-open')
       })

       let darkmode_checkbox = document.getElementById('darkmode');
       let darkmode = document.querySelector('.dark_mode')

       darkmode_checkbox.addEventListener("click", function (){
           darkmode.classList.toggle('dark_mode-active')
       })