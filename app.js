var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = '0';
  } else {
    document.getElementById('header').style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};

ScrollReveal().reveal('.work-title', {
  origin: 'bottom',
  distance: '50px',
  easing: 'ease',
  scale: '0.8',
  reset: false,
  delay: 100,
});

ScrollReveal().reveal('.contact-title', {
  origin: 'bottom',
  distance: '50px',
  easing: 'ease',
  scale: '0.8',
  reset: true,
  delay: 100,
});
