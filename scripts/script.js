function profileImageShow() {
  var profileImage = document.getElementById('profile-image');
  var profileText = document.getElementById('profile-text');
  /* profileImage.style.width = "200px";
  profileImage.style.height = "200px"; */
  /* var x = window.matchMedia("(min-width: 1200px)");
  if(x.matches){
    profileImage.className = "profile-image-1400";
  }else{
    profileImage.className = "profile-image-1600";
  } */
  var screen1600 = window.matchMedia("(min-width: 1451px)");
  var screen1400 = window.matchMedia("(min-width: 1250px)");
  var screen700 = window.matchMedia("(min-width: 700px)");
  var phone = window.matchMedia("(max-width: 699px)");
  if (screen1600.matches) {
    profileImage.className = "profile-image-1600";
    profileTextAnimation();
  } else if (screen1400.matches) {
    profileImage.className = "profile-image-1400";
    profileTextAnimation();
  } else if (screen700.matches) {
    profileImage.className = "profile-image-700";
    profileText.className = "profile-text-700";
    profileTextAnimation();
  }else if (phone.matches){
      profileImage.className = "profile-image-phone";
      profileTextAnimationPhone();
  } 
  /* profileImage.style.border = "10px solid white"; */
  var text1 = document.getElementById('text1');
  text1.style.width = "400px";
}
function profileTextAnimation() {
  let i = 0;
  setInterval(function () {
    const textArr = ["Web Developer", "UI/UX Designer"];
    var profileCaption = document.getElementById('profile-caption');
    if (profileCaption.style.width == "400px") {
      profileCaption.style.width = "0";
    } else {
      if (i === 2) i = 0;
      profileCaption.style.width = "400px";
      profileCaption.innerHTML = textArr[i];
      i = i + 1;
    }
  }, 2000);
}

function profileTextAnimationPhone() {
  let i = 0;
  setInterval(function () {
    const textArr = ["Web Developer", "UI/UX Designer"];
    var profileCaption = document.getElementById('profile-caption');
    if (profileCaption.style.width == "300px") {
      profileCaption.style.width = "0";
    } else {
      if (i === 2) i = 0;
      profileCaption.style.width = "300px";
      profileCaption.innerHTML = textArr[i];
      i = i + 1;
    }
  }, 2000);
}



(function () {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();

function openNavModal() {
  var navbar = document.getElementById('navbar-phone');
  var header = document.getElementById('header-phone');
  header.style.display = "none";
  navbar.style.display = "block";
}
function closeNavModal() {
  var navbar = document.getElementById('navbar-phone');
  var header = document.getElementById('header-phone');
  header.style.display = "block";
  navbar.style.display = "none";
}
