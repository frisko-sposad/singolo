const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-bth');
const PHONEA = document.getElementById('phone1');
const PHONEB = document.getElementById('phone2');
const CONTENT1 = document.getElementById("phone-content1");
const CONTENT2 = document.getElementById("phone-content2");
const portfolio_menu = document.getElementById('portfolio-menu');
const gallery = document.getElementById('gallery');
const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const leftArrow1 = document.getElementById('left-arrow1');
const rightArrow1 = document.getElementById('right-arrow1');
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');

// Слайдер
leftArrow1.addEventListener('click', (event) => {
	sliderList(slider1,slider2);
} )

rightArrow1.addEventListener('click', (event) => {
	sliderList(slider1,slider2);
} )

leftArrow2.addEventListener('click', (event) => {
	sliderList(slider2,slider1);
} )

rightArrow2.addEventListener('click', (event) => {
	sliderList(slider2,slider1);
} )

function sliderList(s1,s2) {
	s1.classList.add('list-slider');
	s2.classList.remove('list-slider');
}
// Слайдер

// главное меню
MENU.addEventListener('click', (event) => {
MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
event.target.classList.add('active');
})
// главное меню

// Окно отправки сообщения
BUTTON.addEventListener('click', () => {
	const subject = document.getElementById('subject').value.toString();
	const describe = document.getElementById('describe').value.toString();

	if (subject === "") { 
		document.getElementById('result').innerText = "Без темы";
	} else {
		document.getElementById('result').innerText = "Тема: " + subject;
	}

	if (describe === "") { 
		document.getElementById('result2').innerText = "Без описания";
	} else {
		document.getElementById('result2').innerText = "Описание: " + describe;
	}	

	document.getElementById('message-block').classList.remove('hidden');
	})

CLOSE_BUTTON.addEventListener('click', () => {
	document.getElementById('result').innerText = '';
	document.getElementById('message-block').classList.add('hidden');
})	
// Окно отправки сообщения

// Вкл выкл экрана телефонов
PHONEA.addEventListener('click', () => {
	if (!event.target.classList.contains('slider__phone1')) { // проверка на попадания в тень телефона
		return;
	} else {
		removePicture(CONTENT1);
	}
})

PHONEB.addEventListener('click', () => {
	if (!event.target.classList.contains('slider__phone2')) { // проверка на попадания в тень телефона
		return;
	} else {
		removePicture(CONTENT2);
	}		
})

function removePicture(style) {
	if (style.classList.contains('remove-picture')){
		style.classList.remove('remove-picture')
	}
	else {
		style.classList.add('remove-picture')
	}
}
// Вкл выкл экрана телефонов

//меню портфолио
portfolio_menu.addEventListener('click', (event) => {
	portfolio_menu.querySelectorAll('li').forEach(el => el.classList.remove('portfolio-button-active'));
	if (!event.target.classList.contains('portfolio-button')) { 
		return;
	}
	else{
		event.target.classList.add('portfolio-button-active');
	} 

	var array = gallery.querySelectorAll('div'); gallery.append(array[0]);	// перемещаем первый элемент в конец архива
	})

//Галерея подсвечиваем картинки
gallery.addEventListener('click', (event) => {
	gallery.querySelectorAll('div').forEach(el => el.classList.remove('img-ative'));
	if (!event.target.classList.contains('gallery-img')) { 
		return;
	}
	else{
		event.target.classList.add('img-ative');
	} 
	
		})


		