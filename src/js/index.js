$(document).ready(function() {
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

// let categoriesButton = document.getElementById("categories-button");
// let categoriesList = document.getElementById("categories-list");

// categoriesButton.addEventListener("mouseenter", function(){
        
// })