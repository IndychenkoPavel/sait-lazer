// "use strict"

// стандартная проверка что файл уже загружен 
document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById('form');
    const formSubmit = document.querySelector('#submit');
    formSubmit.addEventListener('click', formSend);

    function formSend (e) {
        e.preventDefault();

        let error = formValidate(form);

        // let formData = new FormData(form);

        // сделать display "none" для span_error
        let divCheck = document.querySelector('.checkbox'); 
        let errorNone = document.querySelectorAll('.span_error'); 
        for (let j = 0; j<errorNone.length; j++){
            errorNone[j].style.display = "none";
        };   

        if (error === 0) {
            cookie ();
            form.reset();

        }else {
            // добавить display = "block" для span_error
            let errorInput = document.querySelectorAll('.form__item._error');
            for (let i = 0; i<errorInput.length; i++){
                errorInput[i].querySelector('.span_error').style.display = "block";
            }   
            // добавить display = "block" для span_error checkbox, если у его родителя есть класс _error
            if(divCheck.classList.contains('_error')){
                let errCheck = document.querySelector('.checkbox._error');      
                errCheck.querySelector('.span_error').style.display = "block"; 
            };          
        };
    };

    function formValidate (form) {
        let error = 0;
        // все проверяемые input 
        let formReq = document.querySelectorAll('._req');

        // убрать класс _error 
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            // если не прошел валидацию 
            if (input.classList.contains('_tel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                };
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            }else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                };
            };
        };
        return error
    };

    

        // добавить класс error 
    function formAddError (input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    };

        // убрать класс error 
    function formRemoveError (input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    };

    function telTest (input) {
        return !/\+38[\(]{0,1}[0-9]{3}[\)]{0,1}\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/.test(input.value);
    };
 
});

// условия для input name 
$(function () {
    $('#formName').on('keypress', function() {
      var that = this; 
        setTimeout(function() {
            var res = /[^а-яa-zA-ZА-Я\s?\.?\'?\-?]/g.exec(that.value);
            that.value = that.value.replace(res, '');
        }, 0);
    });
});


// mask телефона 
function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    };
  };

function mask(e) {
    
    var matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });


// cookie 

function cookie () {
    let date = new Date();
    let inpName= document.querySelector('#formName').value;
    let inpTel = document.querySelector('#online_phone').value;
            
    date.setTime(date.getTime() + (60*10*1000));
    let dateCookie = date.toUTCString();   
    document.cookie = `name = ${inpName}; expires = ${dateCookie}; path = "/";`;  
    document.cookie = `firstName = ${inpTel}; expires = ${dateCookie}; path = "/";`;  
            
    document.querySelector('.welcom').innerHTML += firstName.value + '!!!';  
    let welWin = document.getElementById('open_window');
    welWin.style.display = 'flex'; 
    document.querySelector('.welcome_name').innerHTML = inpName + ', спасибо за заявку.';
    document.querySelector('.form').style.display = 'none';
};


