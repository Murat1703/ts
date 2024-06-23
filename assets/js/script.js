let burgerBtn = document.querySelector('.burgerBtn');


function showMenu(){
    let mobileMenu = document.querySelector('.burgerMenu');
    mobileMenu.classList.toggle('__active');
    return mobileMenu;
}

burgerBtn.addEventListener('click', function(){
    let mobileMenu = document.querySelector('.burgerMenu');
    let bodyWrapper = document.querySelector('body');
    burgerBtn.classList.toggle('__active');
    mobileMenu.classList.toggle('__active');
    bodyWrapper.classList.toggle('__active');
})