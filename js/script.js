
document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {
      document.getElementById('navbar').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
      document.getElementById("navbar_top").classList.add("bg-nav-dark");
      document.getElementById("navbar_top").classList.remove("navbar-light");
      document.getElementById("navbar_top").classList.remove("navbg");
      document.getElementById("iconMenu").style.color = "#fff";
      document.getElementById("iconMenu").style.padding = "3px";

    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
      document.getElementById("navbar_top").classList.add("navbar-light");
      document.getElementById("navbar_top").classList.add("navbg");
      document.getElementById("navbar_top").classList.remove("bg-nav-dark");
      document.getElementById("iconMenu").style.color = "gray";
    }
  });
});

$(document).ready(function () {

  /***********Ripple water***************/
  $('main').ripples({
    resolution: 512,
    dropRadius: 12, //px
    perturbance: 0.05,
  });
  /*************End Ripple water***********/


  /***************start Count up********************** */
  $('.count').counterUp({
    delay: 10,
    time: 1000
  });

  /***************End Count up********************** */

  $("#arabic").trigger("click");

  // ******** MaxitUp ********* //
var mixer = mixitup('.photos');
mixer.filter('.Company-Labo');
// ****** End MaxitUp ******* //

});



// =================About Page===============/

if ($(".card-slider").length > 0) {


var swiper = new Swiper(".card-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  mousewheel: true,
  keyboard: true,
  breakpoints: {
    300:{
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

}

// ******************* Button top up ***********************//
const toTop = document.querySelector(".to-top");
window.onscroll = function () {
  //  console.log(this.scrollY);
  if (this.scrollY >= 800) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
}
// ******************* End Button top up *****************//


// *******************Button Translate Localization *****************//
function english() {
  document.getElementById("translatecss1").setAttribute("href", "css/custom.css");
  document.getElementById("translatecss2").setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
  document.getElementById("translatejs").setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
  document.getElementById("form-navbar").classList.add("me-auto");
  document.getElementById("flags-icons").style.float = "right";
  document.getElementById("eng-Name").style.textAlign = "right";
  document.getElementById("btnemail").classList.add("fa-share");
  document.getElementById("btnemail").classList.remove("fa-reply");

}
function arabic() {
  document.getElementById("translatecss1").setAttribute("href", "css/customArabic.css");
  document.getElementById("translatecss2").setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css");
  document.getElementById("translatejs").setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
  document.getElementById("ul-navbar").classList.add("me-auto");
  document.getElementById("flags-icons").style.float = "left";
  document.getElementById("eng-Name").style.textAlign = "left"
  document.getElementById("btnemail").classList.add("fa-reply");
  document.getElementById("btnemail").classList.remove("fa-share");

}
// *******************Button Translate Localization *******************//
