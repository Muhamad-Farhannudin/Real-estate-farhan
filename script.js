// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Image Slider
const leftBtn = document.querySelectorAll('.left-btn');
const rightBtn = document.querySelectorAll('.right-btn');
const card = document.querySelectorAll('.card');
console.log(leftBtn);

card.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    leftBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    rightBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})