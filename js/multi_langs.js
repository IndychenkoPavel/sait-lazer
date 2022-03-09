let languag = ['ua', 'ru'];
let langSel = '';


let selLang = document.querySelector('#langs');

selLang.addEventListener('change',clickSelectL);
function clickSelectL(){
    langSel = selLang.value;
    location.href=window.location.pathname +'#'+langSel;
    location.reload();  
    langSel = selLang.value; //значение в select
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
    }   }
    
}
// noLang();



