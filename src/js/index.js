$(document).ready(function() {
	// $('.burger').click(function(){
        //         $('.burger').toggleClass('open-menu');
        //         $('.nav').toggleClass('open-menu');
        //         $('body').toggleClass('fixed-page');
	// });

        // $('.about__button-more').click(function(){
        //         $(".about__appear").fadeIn(1000);
        //         $('.about__button-more').addClass('about__appear');
        // });

        $('.categories__button').focus(function () {
                $('.categories__list').toggleClass('categories__list--opened');
        })

        $('.profile').click(function () {
                $('.profile__list').toggleClass('profile__list--closed');
        })

        $('.profile__button').focus(function () {
                $('.profile__list').toggleClass('profile__list--closed');
        })

        $('#carousel-1').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		// autoplay: true,
		smartSpeed: 600,
		nav: true,
		navText: [
			'<svg viewBox="0 0 512 512" width="35" height="35"> \
				<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M335.083,271.083 \
						L228.416,377.749c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165 \
						L289.835,256l-91.584-91.584c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0l106.667,106.667 \
						C343.424,249.259,343.424,262.741,335.083,271.083z"/> \
			</svg>',
			'<svg viewBox="0 0 512 512" width="35" height="35"> \
				<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M335.083,271.083 \
						L228.416,377.749c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165 \
						L289.835,256l-91.584-91.584c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0l106.667,106.667 \
						C343.424,249.259,343.424,262.741,335.083,271.083z"/> \
			</svg>'
		  ]
	});

	$('.owl-carousel').each(function() {
		$(this).find('.owl-prev').each(function() {
			$(this).attr('aria-label', 'предыдущий слайд');
		});
		$(this).find('.owl-next').each(function() {
			$(this).attr('aria-label', 'следующий слайд');
		});
		$(this).find('.owl-dot').each(function(index) {
			$(this).attr('aria-label', 'переключить на слайд' + (index + 1));
		});
		$(this).find('.active').each(function() {
			$(this).attr('aria-label', 'текущий слайд');
		});
	});
});