window.onscroll = function() {myFunction()};

// Get the header
const header = document.getElementById('header-nav');
const brand = document.getElementById('brand');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        brand.src = './img/brand/brand.png';
        header.classList.add('header-nav__sticky');
    } else {
        brand.src = './img/brand/brand-white.png';
        header.classList.remove('header-nav__sticky');
    }
}
