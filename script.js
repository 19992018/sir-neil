const splash = document.getElementById("splash");
const splashNone = document.getElementById("splash-none");
const body = document.querySelector("html, body");
const btn = document.getElementsByClassName("to-s-event");
const btn2 = document.getElementsByClassName("to-paybox");
const gallery = document.querySelectorAll(".gallery img");
const modal = document.getElementById("my-modal");
const span = document.getElementsByClassName("close")[0];
const allSplash = document.querySelectorAll("#splash *");


//To make the top menu bar turn black omn scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scroll = window.scrollTop || document.documentElement.scrollTop;
    var transparentElement = document.querySelector(".transparent");

    if (scroll > 19) {
      transparentElement.style.background = "black";
    } else {
      transparentElement.style.background = "transparent";
    }
  });
});

//autotype on splash screen
var typed = new Typed(".auto-type2", {
  strings: ["Ishi Life Vile Unataka"],
  typeSpeed: 75,
  backSpeed: 150,
  loop: false
})



///////////////////////////SPLASH SCREEN CODE
// The splash screen displays when the page loads:

document.addEventListener('DOMContentLoaded', (e) => {
  //To display the first page after 4 seconds:
    const myTimeout = setTimeout(() => {
      splash.classList.add('display-none');
      splash.classList.remove('display-flex');
      body.style.overflow = "auto";
  }, 4000);

  if (sessionStorage.getItem('landing-page') !== 'true') {
    myTimeout;
    sessionStorage.setItem('landing-page', 'true');
    
  } 
  // else {
  //   //This ELSE-STATEMENT is supposed to display the home page immediately if session storage contains 'landing-page'
  //   //Instead, the splash screen flashes before the first page appears
  //   // How do I remove this flashing?
  //   //NOTE: Comment out this else statement of you want to see the splash screen for four seconds
  //   splash.classList.add('display-none');
  //   splash.classList.remove('display-flex');
  //   body.style.overflow = "auto";
    
  // }
  
});


//Autotype on landing page
var typed = new Typed(".auto-type", {
  strings: ["See", "Buy", "Attend"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})

//To open single-event.html on clicking gallery div
for (var i = 0, length = gallery.length; i < length; i++) {
  gallery[i].onclick = function () {
    location.href = "single-event.html";
  }
}

// MODAL BOX FUNCTIONALITY
// When the user clicks on the button, open the modal

for (let i = 0; i < btn2.length; i++) {
  btn2[i].onclick = function () {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// for some buttons to lead to single-event page.
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    location.href = "single-event.html";
  }
}

