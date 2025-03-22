//This creates a JS variable protestinfo and hiddenMessage2 and assigns it the div element with the id "entertainmentInfo" and id "hiddenMessage2"
let infoBox2 = document.getElementById("entertainmentInfo");
let hiddenMessage2 = document.getElementById("hiddenMessage2");
function showMessage2() {
     hiddenMessage2.style.display = "block";
}
function hideMessage2() {
     hiddenMessage2.style.display = "none";
}
infoBox2.addEventListener("click", showMessage2);
//End Ru in the Emtertainment Business image section


let infoBox3 = document.getElementById("entertainmentInfo2");
let hiddenMessage3 = document.getElementById("hiddenMessage3");
function showMessage3() {
     hiddenMessage3.style.display = "block";
}
function hideMessage3() {
     hiddenMessage3.style.display = "none";
}
infoBox3.addEventListener("click", showMessage3);



let infoBox4 = document.getElementById("entertainmentInfo3");
let hiddenMessage4 = document.getElementById("hiddenMessage4");
function showMessage4() {
     hiddenMessage4.style.display = "block";
}
function hideMessage4() {
     hiddenMessage4.style.display = "none";
}
infoBox4.addEventListener("click", showMessage4);

//Scroll function//
window.addEventListener('scroll', function() {
     let scrollPosition = window.scrollY;
document.body.style.backgroundColor = `rgb(${scrollPosition % 204}, ${scrollPosition % 283}, 197)`;
});

