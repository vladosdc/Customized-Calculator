// let elem1 = document.getElementById("number_one")
// let elem2 = document.getElementById("number_two")
// let result1 = document.getElementById("result")
// let result_show = document.querySelector('.look_result')
// result_show.addEventListener("click", function (event) {
// result1.value = Number(elem1.value) + Number(elem2.value);
// })

let elem1 = document.getElementById("number_one")
let elem2 = document.getElementById("number_two")
let result1 = document.getElementById("result")
let result_show = document.querySelector('.look_result')
result_show.addEventListener("click", function (event) {
    result1.value = Number(elem1.value) + Number(elem2.value);
})

