

window.onload = function(){








	window.onscroll = function(){
 
let fixed = document.querySelector('.header')
let pos = window.pageYOffset;

    	   if(pos > 0){
                 fixed.classList.add('fixed');

    	   } else{
    	   	   fixed.classList.remove('fixed');
    	   }

   
};

$('.review-slider').slick({
 
   slidesToShow: 1,
   slidesToScroll: 1,
    prevArrow: false,
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow.png">',
   
   
    
 
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__list');
let body = document.querySelector('body');


burger.addEventListener('click', function(){
   burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');


});


let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors){
  if(anchor) {
    anchor.addEventListener('click',function(e){
      e.preventDefault();

       burger.classList.remove('active');
       menu.classList.remove('active');
       body.classList.remove('lock');

      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}







};

