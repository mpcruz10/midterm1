//Scroll function//
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
document.body.style.backgroundColor = `rgb(${scrollPosition % 204}, ${scrollPosition % 283}, 197)`;
});