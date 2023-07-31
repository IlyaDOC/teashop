$('.single-item').slick();

$(function () {
    $("#accordion").accordion();
});

new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
}).init();

$(document).ready(function() {
    $('.product_image').magnificPopup({type:'image'});
});

let inputList = $('.form-input');
let indexInput = $('#index');

$('#phone').inputmask({"mask": "(999) 999-9999"});

indexInput.keydown((e)=>{
    if (isNaN(parseInt(e.key)) && e.key.toLowerCase() !== 'backspace') {
        alert('Можно вводить только цифры');
        return false;
    }
})



$('.submit-button').click(function () {
    for (let i = 0; i < inputList.length; i++) {
        if (inputList.eq(i).val().length === 0) {
            alert('Заполните все поля!');
            return;
        }
    }

    if (indexInput.val().length !== 6) {
        alert('Индекс должен состоять из 6 цифр');
        return;
    }

    $('.form').css('display', 'none');
    $('.order-title').text('Спасибо за заказ! Мы свяжемся с вами в ближайшее время!').addClass('wow animate__animated animate__backInRight')
})

let buttonsProduct = $('.main-products .btn');

for (let i = 0; i < buttonsProduct.length; i++) {
    buttonsProduct.eq(i).addClass('hvr-bounce-to-right');
}