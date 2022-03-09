"use strict"

// стандартная проверка что файл уже загружен 
document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend (e) {
        e.preventDefault();

        let error = formValidate(form);

        // let formData = new FormData(form);
        console.log(error)
        if (error === 0) {
            form.reset();
        } else {
            alert('заполните поля');
            
        }
    }

    function formValidate (form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);


            if (input.classList.contains('_tel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                }
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            }else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error
    }

        // добавить класс error 
    function formAddError (input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

        // убрать класс error 
    function formRemoveError (input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function telTest (input) {
        return !/\+38[\(]{0,1}[0-9]{3}[\)]{0,1}\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/.test(input.value);
    }
 
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
    }
  }

function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
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





