const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-bth');
const PHONEA = document.getElementById('phone1');
const PHONEB = document.getElementById('phone2');
const CONTENT1 = document.getElementById("phone-content1");
const CONTENT2 = document.getElementById("phone-content2");
const portfolio_menu = document.getElementById('portfolio-menu');
const gallery = document.getElementById('gallery');

// Слайдер
let sliderItems = document.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnable = true;

// Окно отправки сообщения
BUTTON.addEventListener('click', () => {
	const subject = document.getElementById('subject').value.toString();
	const describe = document.getElementById('describe').value.toString();
	

	if (!document.getElementById("name").checkValidity() || !document.getElementById("email").checkValidity())
        return;

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
	document.querySelector('.form').reset();
})	


// Вкл выкл экрана телефонов
PHONEA.addEventListener('click', () => {
	if (!event.target.classList.contains('slider__phone1') && !event.target.classList.contains('slider__phone-content1')) { // проверка на попадания в тень телефона
		return;
	} else {
		removePicture(CONTENT1);
	}
})

PHONEB.addEventListener('click', () => {
	if (!event.target.classList.contains('slider__phone2') && !event.target.classList.contains('slider__phone-content2')) { // проверка на попадания в тень телефона
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

// Слайдер

function changeCurrentItem(n) {
	currentItem = (n + sliderItems.length) % sliderItems.length;
}

function hideItem (direction) {
	isEnable = false;
	sliderItems[currentItem].classList.add(direction);
	sliderItems[currentItem].addEventListener('animationend', function () {
		this.classList.remove('slider-active', direction);		
	});
}

function showItem (direction) {	
	sliderItems[currentItem].classList.add('slider-next', direction);
	sliderItems[currentItem].addEventListener('animationend', function () {
		this.classList.remove('slider-next', direction);
		this.classList.add('slider-active');
		isEnable = true; 		
	})
}

function previosItem (n) {
	hideItem('to-right')
	changeCurrentItem(n - 1);
	showItem('from-left');	
}

function nextItem (n) {
	hideItem('to-left')
	changeCurrentItem(n + 1);
	showItem('from-right');	
}

document.querySelector('.slider__left-arrow').addEventListener('click', function() {
	if (isEnable) {
		previosItem(currentItem);
	}
});

document.querySelector('.slider__right-arrow').addEventListener('click', function() {
	if (isEnable) {
		nextItem(currentItem);
	}
});

// Скролл меню
document.addEventListener('scroll', onScroll);

function onScroll(event) {
	const curPos = window.scrollY;	
	const divs = document.querySelectorAll('.menu-anchor');
	const links = document.querySelectorAll('#menu a');
	const linksMobile = document.querySelectorAll('#menu-mobil a');

	divs.forEach((el) => {
		console.log(el + "" + curPos);
		
		if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos ) {
			links.forEach((a) => {
				a.classList.remove('active-link')
				if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
					a.classList.add('active-link')
				}			
			})
		} 

		if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos ) {
			linksMobile.forEach((a) => {
				a.classList.remove('active-link')
				if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
					a.classList.add('active-link')
				}			
			})
		} 




	});
}

// Gamburger menu
const Gamburger = document.getElementById('gamburger');
const mobilMenu = document.getElementById('menu-mobil');


Gamburger.addEventListener('click', () => {
	
	if (Gamburger.classList.contains('gamburger-rotate')) {
		Gamburger.classList.remove('gamburger-rotate');
		mobilMenu.classList.remove('mobil-nav-on');
	} else {
		Gamburger.classList.add('gamburger-rotate');
		mobilMenu.classList.add('mobil-nav-on');
	}	
})	

mobilMenu.addEventListener('click', () => {
	if (mobilMenu.classList.contains('mobil-nav-on')) {
		Gamburger.classList.remove('gamburger-rotate');
		mobilMenu.classList.remove('mobil-nav-on');
	} 
	
})


