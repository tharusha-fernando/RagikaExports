let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{

    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox =>{
faqBox.onclick =() => {
  faqBox.parentElement.classList.toggle('active');
}
});

var swiper = new Swiper(".home-slider", {
    loop:true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // galary slider start
  var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
    slidesPerView:"auto",
    centeredSlides:true,
    grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // galary slider end

