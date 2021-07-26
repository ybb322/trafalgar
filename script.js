const activeToggle = document.querySelector ('.burger')
const navMobile = document.querySelector ('.nav-mobile');
const navMobileList = document.querySelector ('.nav-mobile__list');
const menu = document.querySelector ('.menu');
let offset = 0;

activeToggle.addEventListener ('click', function (){
    this.classList.toggle ('active');
    if (this.classList.contains ('active')) {
        navMobileList.classList.remove ('hidden');
        menu.style.left = offset + 250 + 'px';
        navMobile.style.left = offset + 250 + 'px';

    }
    else {
        navMobileList.classList.add ('hidden');
        menu.style.left = offset + 400 + 'px';
        navMobile.style.left = + 400 + 'px';
    }
})