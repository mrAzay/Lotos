//one page 
pageslider(document.getElementById('wrap'), function () { });


//меню
const menuWrapper = document.querySelectorAll('.menu__wrapper');
const menu = document.querySelectorAll('.menu');


menuWrapper.forEach(item => {
	item.addEventListener('click', (e) => {
		// menu.forEach(item => {
		// 	item.classList.toggle('show');
		// });
		document.querySelector('.menu__links').classList.toggle('showMenu');
	});
});


//табы
const softTab = document.querySelectorAll('.sort__tab');
const softContent = document.querySelectorAll('.soft__tab-item');


const teacherTab = document.querySelectorAll('.teacher__tab');
const teacherContent = document.querySelectorAll('.teacher__tab-item');
const teacherImg = document.querySelectorAll('.girl-tab');

const reviewsTab = document.querySelectorAll('.reviews__tab');
const reviewsContent = document.querySelectorAll('.reviews__tab-item');



let perebor = function (tab, content, img) {
	tab.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			tab.forEach((item, i) => {
				item.classList.remove('tab--active');
				content[i].classList.remove('tab-item--active');
				if (img) img[i].classList.remove('img-tab--active');

			});
			tab[i].classList.add('tab--active');
			content[i].classList.add('tab-item--active');
			if (img) img[i].classList.add('img-tab--active');
		});
	});
};

perebor(softTab, softContent);
perebor(teacherTab, teacherContent, teacherImg);
perebor(reviewsTab, reviewsContent);


//popup
let popupButton = document.querySelectorAll('.central-text > button');
let popupButtonThnx = document.querySelector('.central-text__form > button');
let popupButtonReview = document.querySelector('.central-text__add-view > a');
let popupButtonThree = document.querySelector('.popup-three__button');
let popupOne = document.querySelector('.popup-one');
let popupTwo = document.querySelector('.popup-two');
let popupThree = document.querySelector('.popup-three');
let popupGo = document.querySelector('.popup-one__button');
let popupClose = document.querySelectorAll('.popup__close');

let remove = item => {
	item.classList.remove('active-popup');
};

let add = item => {
	item.classList.add('active-popup');
};


popupButton.forEach(item => {
	item.addEventListener('click', e => {
		add(popupOne);
	});
});


popupButtonThnx.addEventListener('click', e => {
	add(popupTwo);
	setTimeout(() => popupTwo.classList.remove('active-popup'), 1500);
});

popupButtonReview.addEventListener('click', e => {
	add(popupThree);
});



popupGo.addEventListener('click', e => {
	remove(popupOne);
	add(popupTwo);
	setTimeout(() => popupTwo.classList.remove('active-popup'), 1500);
});

popupClose.forEach(item => {
	item.addEventListener('click', e => {
		remove(popupOne);
		remove(popupThree);
	});
});

popupButtonThree.addEventListener('click', e => {
	remove(popupThree);
	add(popupTwo);
	setTimeout(() => popupTwo.classList.remove('active-popup'), 1500);
});



