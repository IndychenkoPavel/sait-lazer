// slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// preloaded
$(function(){
  $(window).load(function(){
    $('.preloader').fadeOut(1500);
    $('body').addClass('loaded');
    // setTimeout(function(){
    //   $('body').addClass('loaded');
    // },2000);
   });
});

// scroll 

window.addEventListener('scroll', function() {
  let scrollPos = this.window.scrollY;
  if (scrollPos > 0 ) {
   document.querySelector('.nav_fixed-block').classList.add('nav_fixed'); 
  }else{document.querySelector('.nav_fixed-block').classList.remove('nav_fixed');
  }
});


// menu 

$( function () {
    $('.nav_block_open_menu').click(function (){
        $(this).css({'display' : 'none'});
        $('.nav_menu_container').css({'display' : 'flex'});
        $('.close_menu').css({'display' : 'flex'});
    });
    $('.close_menu').click(function (){
        $('.nav_menu_container').css({'display' : 'none'});
        $('.nav_block_open_menu').css({'display' : 'flex'});
    });
});

// document.querySelector('.nav_block_open_menu').addEventListener('click', function() {
//   this.style.css.display = 'none';
//   document.querySelector('.nav_menu_container').style.css.display = "flex";
//   document.querySelector('.close_menu').style.css.display = "flex";
// });
// document.querySelector('.close_menu').addEventListener('click', function() {
//   document.querySelector('.nav_menu_container').style.css = "display: none";
//   document.querySelector('.nav_block_open_menu').style.css = "display: flex";
// });


// targ 

$( function () {
  $('.str_about_btn_center').mouseover(function (){
    $('.targ').css({'box-shadow' : '0px 0px 10px 10px #5e8994be'});
    $('.targ_shoot-span').css({'display' : 'block'});
  });
  $('.str_about_btn_center').mouseout(function (){
    $('.targ').css({'box-shadow' : 'none'});
    $('.targ_shoot-span').css({'display' : 'none'});
    $('.targ_shoot-span').html('Сделай выстрел');
  });
  // let parag = '<p></p>';
  
  // let addClass = 'p_class';
  let addC = 0;
  $('.str_about_btn_center').click(function (){
    $('.targ_shoot-span').html('Сделай выстрел');
    if(addC < 20){
    let randTop = Math.floor(Math.random() * 220 + 100);
    let randLeft = Math.floor(Math.random() * 220 + 100);
    $('.targ').append('<p></p>');
    $(".targ p").addClass(function(i){ 
      return "p_" + i;
     });
     $('.p_'+addC).css({'background-color' : 'black', 'border-radius' : '50%', 'border' : '5px solid red', 'width' : '30px', 'height' : '30px', 'left' : randLeft, 'top' : randTop, 'position' : 'absolute'});
     addC++;
    } else{
      $('.targ').empty();
      addC=0;
    };
    if(addC == 20){
      $('.targ_shoot-span').html('Отличная работа!');
    }
     });
  });


// open  form 
let btnFofm = document.querySelectorAll('#open_form');
let openFofm = document.querySelector('.wrapper');


btnFofm.forEach(elem => {
    elem.addEventListener('click', function(){
        openFofm.style.display = "block";
        document.body.classList.add('no_scroll');
    })
});

// close form 
let closeWrapper = document.querySelectorAll('#close_wrapper');

closeWrapper.forEach(itemClose => {
  itemClose.addEventListener('click', function(){
    openFofm.style.display = "none";
    document.body.classList.remove('no_scroll');
  });
});


// tooltip 

$( function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });

  document.querySelector('.style_ball').addEventListener('click', function(){
    location.href = 'index_api.html';
  });




  // ------------------------ 
 
let languag = ['ua', 'ru'];
let langSel = '';

let selLang = document.querySelector('#langs');

// window.onload = function(){
//   langSel = selLang.value;
//   let decode_cookie = decodeURIComponent(document.cookie);
//   let start = decode_cookie.split('=').pop(); 
//   console.log(start);
//   location.href=window.location.pathname +'#'+start;
  
// };

selLang.addEventListener('change',clickSelectL);
function clickSelectL(){
    langSel = selLang.value; 
    location.href=window.location.pathname +'#'+langSel;
    let date = new Date();
    date.setTime(date.getTime() + (60*10*1000));
    let dateCookie = date.toUTCString();   
    document.cookie = `name = ${langSel}; expires = ${dateCookie}; path = "/";`;
    location.reload();    
};

// --------- 

function noLang(){
    let massLocation = window.location.hash;
    massLocation = massLocation.substr(1);
    if(!languag.includes(massLocation)){
        location.href = window.location.pathname +'#ru';
        location.reload();
    }
    selLang.value = massLocation;
    
    for(let j in massText){
      if(j==massLocation){
       document.querySelector('#langs').innerHTML = (massText[j]);
      }  
    }   
}
noLang();

function language() {
  langSel = selLang.value; //значение в select
  for(let i in massText){
    let elemLang = document.querySelector('#lng-'+i);
    let btnLang = document.querySelector('.btnLang-'+i);
    if (elemLang) {
      elemLang.innerHTML=(massText[i][langSel]);
    };   
    if (btnLang) {
      btnLang.innerHTML = massText[i][langSel];
    }
  }
};
language();



//Pop video.

$(function(){
  $('.video_link').on('click', togglePopup);
});
var iframe = $('#player');
function togglePopup() {
$('.video').css({'display': 'flex'});
// ?autoplay=1
};
$(function(){
  $('#close_video').click (function() {
    $('.video').css({'display': 'none'});
    iframe.attr('src', iframe.attr('src'));
    });
});

// instagrame 

let btnInst = document.querySelectorAll('.bnt_open');
btnInst.forEach(elems => {
  elems.addEventListener('click', function() {
    window.open('https://www.instagram.com/lasertag_if/', 'resizable=yes,top=150,left=150,width=640,height=480');
  });
});

// facebook

let btnface = document.querySelectorAll('.bnt_open-face');
btnface.forEach(elemF => {
  elemF.addEventListener('click', function() {
    window.open('https://www.facebook.com/artmax.lasertag/', 'resizable=yes,top=150,left=150,width=640,height=480');
  });
});

// telegrame

let btnTel = document.querySelectorAll('.bnt_open-tel');
btnTel.forEach(elemTel => {
  elemTel.addEventListener('click', function() {
    window.open('https://t.me/Radio_Control_Toys', 'resizable=yes,top=150,left=150,width=640,height=480');
  });
});





