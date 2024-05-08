// script.js
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.backgroundColor = '#f8f8f8'; // Change background color on scroll
    } else {
        header.style.backgroundColor = 'transparent'; // Revert to initial background color
    }
});
