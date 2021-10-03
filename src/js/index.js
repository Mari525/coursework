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


import axios from "axios";

const formLogin = document.querySelector(".signin__form");
const inputLogin = formLogin.querySelector(".signin__input--login");
const inputPassword = formLogin.querySelector(".signin__input--password");

const ApiInformation = {
        BASE_URL: "http://delivery.std-1372.ist.mospolytech.ru",
        TIMEOUT: 5000
};

const createAPI = () => {
        const api = axios.create({
                baseURL: ApiInformation.BASE_URL,
                timeout: ApiInformation.TIMEOUT
        });
        
        const onSuccess = (response) => response;
        
        const onFail = (err) => {
                const {response} = err;
                throw err;
        };
        
        api.interceptors.response.use(onSuccess, onFail);
        
        return api;
        };

const api = createAPI();

const login = (email, password) => {
        console.log(email, password)
        api.post('/user/login/', {email, password})
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
};

const onFormSubmit = (evt) => {
        evt.preventDefault();
        const loginValue = inputLogin.value;
        const passwordValue = inputPassword.value;
        login(loginValue, passwordValue);
}

formLogin.addEventListener('submit', onFormSubmit);
