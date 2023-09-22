const splash = document.getElementById("splash");
const splashNone = document.getElementById("splash-none");
const body = document.querySelector("html, body");
const btn = document.getElementsByClassName("to-s-event");
const btn2 = document.getElementsByClassName("to-paybox");
const gallery = document.querySelectorAll(".gallery img");
const modal = document.getElementById("my-modal");
const span = document.getElementsByClassName("close")[0];
const allSplash = document.querySelectorAll("#splash *");
const tktPrice1 = document.querySelector(".vvip h3");
const tktPrice2 = document.querySelector(".vip h3");
const tktPrice3 = document.querySelector(".regular h3");
const subtotal1 = document.querySelector("#one-subtotal-1 p");
const subtotal2 = document.querySelector("#one-subtotal-2 p");
const subtotal3 = document.querySelector("#one-subtotal-3 p");
const tktNo1 = document.querySelector("#ticket-no-1");
const tktNo2 = document.querySelector("#ticket-no-2");
const tktNo3 = document.querySelector("#ticket-no-3");
const totalAmount = document.querySelector(".total p");
const detectChange = document.querySelectorAll(".detect-change");
const tip = document.querySelector(".tip input");


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
  gallery[i].onclick = function (event) {
    event.preventDefault();
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

//The Ticket pricing within the modal:
function totalCalculator(){
  const subtotal1Int = (parseInt(subtotal1.innerHTML, 10) || 0);
  const subtotal2Int = parseInt(subtotal2.innerHTML, 10);
  const subtotal3Int = parseInt(subtotal3.innerHTML, 10);
  const tipValue = tip.value;
  const tipInt = (parseInt(tipValue, 10) || 0);
  const total = subtotal1Int + subtotal2Int + subtotal3Int + tipInt;
  totalAmount.textContent = total;
}
// for (let i = 0; i < noChosen.length; i++) {
tktNo1.onchange =function() {
  const tktPriceInt= parseInt(tktPrice1.innerText, 10);
  const tktNoValue = tktNo1.value;
  const noOfTkts =parseInt(tktNoValue, 10);
  const subtotalBox1 = tktPriceInt * noOfTkts;
  subtotal1.innerHTML = subtotalBox1;
  totalCalculator();
}

tktNo2.onchange =function() {
  const tktPriceInt= parseInt(tktPrice2.innerText, 10);
  const tktNoValue = tktNo2.value;
  const noOfTkts =parseInt(tktNoValue, 10);
  const subtotalBox2 = tktPriceInt * noOfTkts;
  subtotal2.innerHTML = subtotalBox2;
  totalCalculator();
}

tktNo3.onchange =function() {
  const tktPriceInt= parseInt(tktPrice3.innerText, 10);
  const tktNoValue = tktNo3.value;
  const noOfTkts =parseInt(tktNoValue, 10);
  const subtotalBox3 = tktPriceInt * noOfTkts;
  subtotal3.innerHTML = subtotalBox3;
  totalCalculator();
}



// for some buttons to lead to single-event page.
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    location.href = "single-event.html";
  }
}

