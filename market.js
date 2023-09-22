const body = document.querySelector("html, body");
const modal = document.getElementById("my-modal");
const btn = document.getElementsByClassName("to-s-event");
const btn2 = document.getElementsByClassName("to-paybox");
const span = document.getElementsByClassName("close")[0];
const gallery = document.querySelectorAll(".gallery img");
const tktPrice1 = document.querySelector(".vvip h3");
const tktPrice2 = document.querySelector(".vip h3");
const tktPrice3 = document.querySelector(".regular h3");
const subtotal1 = document.querySelector("#one-subtotal-1 p");
const subtotal2 = document.querySelector("#one-subtotal-2 p");
const subtotal3 = document.querySelector("#one-subtotal-3 p");
const tktNo1 = document.querySelector("#ticket-no-1");
const tktNo2 = document.querySelector("#ticket-no-2");
const tktNo3 = document.querySelector("#ticket-no-3");
// const noChosen = document.querySelectorAll("#ticket-no option");
const totalAmount = document.querySelector(".total p");
const detectChange = document.querySelectorAll(".detect-change");
const tip = document.querySelector(".tip input");


//To make the y scroll appear
//We had removed y scroll due to the splash screen
document.addEventListener('DOMContentLoaded', (e) => {
  body.style.overflow = "auto";

})

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


//Events-Filter JS
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == 'all') {
      $(".gallery").show("1000");
    } else {
      $(".gallery")
        .not("." + value)
        .hide("1000");
      $(".gallery")
        .filter("." + value)
        .show("1000");
    }
  });
  //Add Active to btn
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});



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



// function totalCalculator(){
//   const total = subtotal1.innerHTML + subtotal2.innerHTML + subtotal3.innerHTML;
//   totalAmount.innerHTML = total;
// }
// for (let i = 0; i < detectChange.length; i++) {
 





// }




// for all some page buttons to lead to single-event page.
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    location.href = "single-event.html";
  }
}

