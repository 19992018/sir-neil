const body = document.querySelector("html, body");
const modal = document.getElementById("my-modal");
const btn = document.getElementsByClassName("to-s-event");
const btn2 = document.getElementsByClassName("to-paybox");
const span = document.getElementsByClassName("close")[0];
const gallery = document.querySelectorAll(".gallery img");


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


// for all some page buttons to lead to single-event page.
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    location.href = "single-event.html";
  }
}