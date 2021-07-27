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
});