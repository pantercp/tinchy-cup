const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const faqBtn = document.querySelector('.faq-bar');
let faqOpen = false;
faqBtn.addEventListener('click', () => {
  if(!faqOpen) {
    faqBtn.classList.add('open');
    faqOpen = true;
  } else {
    faqBtn.classList.remove('open');
    faqOpen = false;
  }
});