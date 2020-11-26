$(document).ready(function () {
  $('#phone').mask('(000)000-0000');
});

// reCaptcha Form Requirement
window.removeFakeCaptcha = function () {
  document.querySelector('.captcha-fake-field').remove();
};
