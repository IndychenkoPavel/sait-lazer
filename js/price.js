
// preloaded
// $(function(){
//     $(window).load(function(){
//       $('.preloader').fadeOut(1500);
//       $('body').addClass('loaded');
//       // setTimeout(function(){
//       //   $('body').addClass('loaded');
//       // },2000);
//      });
//   });

// scroll 

window.addEventListener('scroll', function() {
    let scrollPos = this.window.scrollY;
    if (scrollPos > 0 ) {
     document.querySelector('.nav_fixed-block').classList.add('nav_fixed'); 
    }else{document.querySelector('.nav_fixed-block').classList.remove('nav_fixed');
    }
  });

// price block 


const tabsBtn = document.querySelectorAll('.tabs_nav-btn');
const tabsItems = document.querySelectorAll(".tabs_item");

tabsBtn.forEach(onTabClick);

function onTabClick(item){
    item.addEventListener("click", function (){
        let currentBtn = item;

        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('active')){
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item){
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');

        }
    });
}
document.querySelector('.tabs_nav-btn:nth-child(1)').click();

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

// open form 
let btnFofm = document.querySelectorAll('#open_form');
let openFofm = document.querySelector('.wrapper');


btnFofm.forEach(elem => {
    console.log(elem);
    elem.addEventListener('click', function(){
        openFofm.style.display = "block";
        document.body.classList.add('no_scroll');
    })
});

// close form 
let closeFofm = document.querySelector('.close_form');

closeFofm.addEventListener('click', function(){
    openFofm.style.display = "none";
    document.body.classList.remove('no_scroll');
});

// lang 

let languag = ['ua', 'ru'];
let langSel = '';

let selLang = document.querySelector('#langs');

selLang.addEventListener('change',clickSelectL);
function clickSelectL(){
    langSel = selLang.value;
    location.href=window.location.pathname +'#'+langSel;
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
         document.querySelector('.lang-title').innerHTML = (tittle[j]);
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