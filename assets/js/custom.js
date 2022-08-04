$(document).ready(function(){
	"use strict";
    
    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})
	
    // 3. slide animation

        $(function(){
        	$(".slide-hero-txt h4,.slide-hero-txt h2,.slide-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".slide-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(function(){
        	$(".slide-hero-txt h4,.slide-hero-txt h2,.slide-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".slide-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });
		
});
const sub = document.querySelectorAll('.sub');
const dropMenus = document.querySelectorAll('.drop-menu');

sub.forEach(lisub => {
    lisub.addEventListener('mouseover', () => {
        removeActive();
        lisub.classList.add('active');
        document.querySelector(lisub.dataset.target).classList.add('active');
		$('.drop-menu').show();
    })
})

const removeActive = () => {
    sub.forEach(lisub => lisub.classList.remove('active'));
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
}

window.onclick = (e) => {
    if (!e.target.matches('.sub')) {
        removeActive()
    }
}
