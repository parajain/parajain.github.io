//Get the button
let mybutton = document.getElementById("btn-back-to-top");
console.log(mybutton)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//over sample my own pic to avoid annoying visitors :D
var myimages = ['pic_from_arthurs_seat.jpeg', 'prof_pic.png', 'prof_pic1.jpg', 'prof_pic1.jpg', 'prof_pic1.jpg', 'pic_to_arthurs_seat.jpeg'];
document.getElementById("profile-pic").src = "pictures/"+myimages[getRandomInt(myimages.length)];
