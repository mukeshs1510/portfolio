// firebase connection
var firebaseConfig = {
  apiKey: "AIzaSyBjiLX2qbRBz5FXVwpTPr5ZF1hQn5Tyxvk",
  authDomain: "lazzyengineeer.firebaseapp.com",
  projectId: "lazzyengineeer",
  storageBucket: "lazzyengineeer.appspot.com",
  messagingSenderId: "295905297849",
  appId: "1:295905297849:web:6541d3125b95008a452268",
  measurementId: "G-K8JE1SVGCM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference database
let contactInfo = firebase.database().ref("infos");

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["UI/UX Designer", "App Developer", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["UI/UX Designer", "App Developer", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //get info of sender
  var name = document.querySelector(".namee").value;
  var email = document.querySelector(".emaill").value;
  var subject = document.querySelector(".subjectt").value;
  var message = document.querySelector(".messagee").value;
  console.log(name, email, subject, message);

  saveContactInfo(name, email, subject, message);

  document.getElementsByClassName("popup")[0].classList.add("active");
  document.querySelector(".contact-form").reset();
}

document.querySelector(".dismiss-popup").addEventListener("click", function () {
  document.getElementsByClassName("popup")[0].classList.remove("active");
});

//save infos to firebase
function saveContactInfo(name, email, subject, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}
