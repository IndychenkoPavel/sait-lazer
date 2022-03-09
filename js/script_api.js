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



window.onload = function() {
    nasaApi();
  };

let dateInput = document.getElementById('dates');
function nasaApi() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);

      let copyright = data["copyright"];
      let date = data["date"];
      let api_text = data["explanation"];
      let hdurl = data["hdurl"];
      let media_type = data["media_type"];
      let url = data["url"];
      let title = data["title"];

      let imageType = `
        <div>
          <a id="wrap-hdurl" href="" > 
            <img class="api_img" id="wrap-image" src="">
          </a>
        </div>
       
        `;   
          

      let videoType = `
        <div>
          <iframe class="api_video" id="wrap-video" src="https://www.youtube.com/embed/vlDzYIIOYmM" title="YouTube video"></iframe>
        </div>
      `;

      // document.getElementById('img').src = url;
      document.getElementById('api_title').innerHTML = title;
      document.getElementById('api_text').innerHTML = api_text;
      document.getElementById('api_copyright').innerHTML += copyright;
      document.getElementById('date').innerHTML = date;
      // document.getElementById('hdurl').href = hdurl;

      if (media_type === "video") {
        document.getElementById('wrap-media').innerHTML = videoType;
        document.getElementById('wrap-video').src = url;
      }else {
        document.getElementById('wrap-media').innerHTML = imageType;
        document.getElementById('wrap-image').src = url;
        document.getElementById('wrap-hdurl').href = hdurl;
      }
    }       
  };

  let queryUrl = "https://api.nasa.gov/planetary/apod?";
  let queryKey = "api_key=WTxmAMAfbahNYWKbyMMf5eYQ5N3y36XnITyjkXVA&";
  
  let queryDate = "date=" + dateValue + "&";
  // console.log(queryDate);

  let queryFull = queryUrl + queryKey + queryDate;

  xmlhttp.open("GET", queryFull, true);
  xmlhttp.send();
};

let dateValue = '';
document.getElementById('btn').addEventListener('click', function () {
  dateValue = dateInput.value;
  nasaApi();
});




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




