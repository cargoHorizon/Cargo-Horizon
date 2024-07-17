let cargoBurger = document.querySelector('.cargo-burger');
let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');

let c = 0;
cargoBurger.onclick = () =>{
    
    c++;
    if(c % 2 == 1){
        burgerMenu.style.width = '0px';
        burgerMenu.style.transition = '0.2s';
        menu.style.opacity = '0';
        // menu.style.transition = '0.3s';
    }else{
        burgerMenu.style.width = '260px';
        burgerMenu.style.transition = '0.2s';
        menu.style.opacity = '1';
        menu.style.animationDelay = '0.3s';
        menu.style.transition = '0.2s'

    }
}


let arrow1 = document.querySelector('.arrow-1-btn');
let settings = document.querySelector('.Quick-settings');

let i = 0;
arrow1.onclick = () =>{
    i++;
    if(i % 2 == 1){
        settings.style.height = '128px';
        settings.style.transition = '0.2s';
        arrow1.style.transform = 'rotate(180deg)';
        
    }else{
        settings.style.height = '45px';
        settings.style.transition = '0.2s';
        arrow1.style.transform = 'rotate(0deg)';
    }
}

let arrow2 = document.querySelector('.arrow-2-btn');
let filter = document.querySelector('.Filter-settings');

let j = 0;
arrow2.onclick = () =>{
    j++;
    if(j % 2 == 1){
        filter.style.height = '156px';
        filter.style.transition = '0.2s';
        arrow2.style.transform = 'rotate(180deg)';
        
    }else{
        filter.style.height = '45px';
        filter.style.transition = '0.2s';
        arrow2.style.transform = 'rotate(0deg)';
    }
}


let k = 0;
const img = document.querySelector(".container-1-img")
const button = document.querySelector(".btn-3")
const container = document.querySelector(".container-1")
button.addEventListener("click",()=>{
    k++;
    if(k%2!=0){
        img.src=`image/Refresh.png`;
        img.style.transition = '0.2s';
        container.classList.add("animation");
        container.style.backgroundColor="rgb(189,227,255)";
        container.style.transition = '0.2s';
    }
    else{
        img.src=`image/Group 633055.png`;
        img.style.transition = '0.2s';
        container.classList.remove("animation");
        container.style.backgroundColor=`rgb(242,237,247)`;
        container.style.transition = '0.2s';
    }
})

let arrow3 = document.querySelector('.arrow-3');
let details = document.querySelector('.details-full');

let l = 0;
arrow3.onclick = () =>{
    l++;
    if(l % 2 == 1){
        details.style.height = '178px';
        details.style.transition = '0.2s';
        details.style.marginTop = '30px';
        arrow3.style.transform = 'rotate(180deg)';
        
    }else{
        details.style.height = '0px';
        details.style.transition = '0.2s';
        details.style.marginTop = '0px';
        arrow3.style.transform = 'rotate(0deg)';
    }
}

let p = 1;

let cargoOne = document.querySelector('#cargo-one');
let truckOne = document.querySelector('#track-one');
let statemantSection = document.querySelector('.statemant-section');
let trackMapSection = document.querySelector('.track-map-section');
let trackMapText = document.querySelector('.track-map-text');
let cargoText = document.querySelector('.cargo-text');


if(p == 1){
    cargoOne.style.marginLeft = '20px';
    cargoOne.style.backgroundColor = '#bb951b';
}

function cargoFunction(){
    cargoOne.style.marginLeft = '20px';
    cargoOne.style.backgroundColor = '#bb951b';
    truckOne.style.marginLeft = '0px';
    truckOne.style.backgroundColor = '';
    statemantSection.style.scale = '1';
    statemantSection.style.transition = '0.5s';
    trackMapSection.style.scale = '0';
    trackMapSection.style.transition = '0.5s';
    trackMapSection.style.pointerEvents = 'none';
    trackMapText.style.opacity = '0';
    cargoText.style.opacity = '1';
    trackMapText.style.transition = '0.2s';
    cargoText.style.transition = '0.2s';
}
function mapFunction(){
    cargoOne.style.marginLeft = '0px';
    cargoOne.style.backgroundColor = '';
    truckOne.style.marginLeft = '20px';
    truckOne.style.backgroundColor = '#bb951b';
    statemantSection.style.scale = '0';
    trackMapSection.style.scale = '1';
    statemantSection.style.transition = '0.5s';
    trackMapSection.style.transition = '0.5s';
    trackMapSection.style.pointerEvents = 'auto';
    trackMapText.style.opacity = '1';
    cargoText.style.opacity = '0';
    trackMapText.style.transition = '0.2s';
    cargoText.style.transition = '0.2s';
}


let arrow4 = document.querySelector('.arrow-4');
let details3 = document.querySelector('.details-full-3');

let q = 0;
arrow4.onclick = () =>{
    q++;
    if(q % 2 == 1){
        details3.style.height = '178px';
        details3.style.transition = '0.2s';
        details3.style.marginTop = '30px';
        arrow4.style.transform = 'rotate(180deg)';
        
    }else{
        details3.style.height = '0px';
        details3.style.transition = '0.2s';
        details3.style.marginTop = '0px';
        arrow4.style.transform = 'rotate(0deg)';
    }
}

let arrow5 = document.querySelector('.arrow-5');
let details4 = document.querySelector('.details-full-4');

let w = 0;
arrow5.onclick = () =>{
    w++;
    if(w % 2 == 1){
        details4.style.height = '178px';
        details4.style.transition = '0.2s';
        details4.style.marginTop = '30px';
        arrow5.style.transform = 'rotate(180deg)';
        
    }else{
        details4.style.height = '0px';
        details4.style.transition = '0.2s';
        details4.style.marginTop = '0px';
        arrow5.style.transform = 'rotate(0deg)';
    }
}

