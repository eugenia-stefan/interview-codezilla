(function ($) {
  "use strict";

  // STICKY
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".sticky").addClass("nav-sticky");
    } else {
      $(".sticky").removeClass("nav-sticky");
    }
  });

  // scrollspy
  $("#mySidenav").scrollspy({
    offset: 70,
  });

  /* Add your code after this line */
})(jQuery);

function onSubmitContactForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const comments = document.getElementById("comments").value;

  if (
    hasValue(name) &&
    hasValue(comments) &&
    isValidEmail(email) &&
    isValidPhoneNumber(phone)
  ) {
    document.getElementById("success-message").style.display = "inline-block";
    document.getElementById("error-message").style.display = "none";
  } else {
    document.getElementById("success-message").style.display = "none";
    document.getElementById("error-message").style.display = "inline-block";
  }
}

function hasValue(value) {
  if (!value) return false;
  return true;
}

function isValidEmail(value) {
  if (!hasValue(value)) return false;

  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return filter.test(value);
}

function isValidPhoneNumber(value) {
  if (!hasValue(value)) return false;

  return /^\d+$/.test(value);
}
