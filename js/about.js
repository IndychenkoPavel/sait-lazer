
// preloaded
// $(function(){
//   $(window).load(function(){
//     $('.preloader').fadeOut(1500);
//     $('body').addClass('loaded');
//     // setTimeout(function(){
//     //   $('body').addClass('loaded');
//     // },2000);
//    });
// });


// scroll 

window.addEventListener('scroll', function() {
  let scrollPos = this.window.scrollY;
  if (scrollPos > 0 ) {
   document.querySelector('.nav_fixed-block').classList.add('nav_fixed'); 
  }else{document.querySelector('.nav_fixed-block').classList.remove('nav_fixed');
  }
});
// ----- 


const btn = document.querySelector('.str_about_blocks_hover');

btn.onmouseover = function(){
    const none = document.querySelector('.str_about_block_info');
    const block = document.querySelector('.str_about_block_info_img');
    block.style.transform = 'rotateY(180deg)';
    none.style.transform = 'rotateY(360deg)';
};
btn.onmouseout = function(){
    const none = document.querySelector('.str_about_block_info');
    const block = document.querySelector('.str_about_block_info_img');
    none.style.transform = 'rotateY(180deg)';
    block.style.transform = 'rotateY(360deg)';
};

// menu 

$( function () {
    $('.nav_block_open_menu').click(function (){
        $(this).hide();
        $('.nav_menu_container').fadeIn(500);
        $('.close_menu').show();
    });
    $('.close_menu').click(function (){
        $('.nav_menu_container').fadeOut(500);
        $('.nav_block_open_menu').show();
    })
});

$( function () {
    $('.str_about_btn_center').mouseover(function () {
        $('.str_about_btn_small_left').css({'width' : '12px', 'height':'12px'});
        $('.str_about_btn_left').css({'border' : '#743aa3 solid 7px'});
        $('.str_about_btn_small_right').css({'width' : '12px', 'height':'12px'});
        $('.str_about_btn_right').css({'border' : '#743aa3 solid 7px'});
    });
    $('.str_about_btn_center').mouseout(function () {
        $('.str_about_btn_small_left').css({'width' : '5px', 'height':'5px'});
        $('.str_about_btn_left').css({'border' : '#6f1ad1 solid 12px'});
        $('.str_about_btn_small_right').css({'width' : '5px', 'height':'5px'});
        $('.str_about_btn_right').css({'border' : '#6f1ad1 solid 12px'});

    });
});


// lang 

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
         document.querySelector('.lang-title').innerHTML = (massText[j]);
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

// instagrame 
let open;
let btnInst = document.querySelectorAll('.bnt_open');
btnInst.forEach(elems => {
  elems.addEventListener('click', function() {
    open = window.open('https://www.instagram.com/lasertag_if/', 'resizable=yes,top=150,left=150,width=640,height=480');
  });
});

