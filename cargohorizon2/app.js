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
}
