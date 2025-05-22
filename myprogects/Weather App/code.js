const url =
	'https://api.openweathermap.org/data/2.5/weather';//образец ссылки, по коротой будет получена информация
const apiKey =
	'c14a4e1b3b80c8d31785ae3d71cc1b36'; //личный API Open weather map для получения данных о погоде

$(document).ready(function () {
	weatherFn('Moscow'); //Москва - город по умолчанию
});

async function weatherFn(cName) { // функция принимает новый пользовательский город, отправляет по нему запрос и вызывает обновление страницы
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('Грород не найден. Пожалуйста, попробуйте снова.'); //при ошибке поиска города выдаст ошибку
		}
	} catch (error) {
		console.error('Ошибка получения сведений', error); //при неудачном получении инфо. о погоде выдаст ошибку
	}
}

function weatherShowFn(data) { // обновляет страницу под текущий город
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY,')); // Дата в фотмате Месяц - Дата - Год (поддерживает только англ. язык)
	$('#temperature').
		html(`${Math.round(data.main.temp)}°C`); //Округляет температуру до целого числа, отображает ее в °C
	$('#description').
		text(data.weather[0].description);//краткое сведение о погоде, например "clear sky' - ясно
	$('#wind-speed').
		html(`Скорость ветра: ${data.wind.speed} м/с`);// отображает скорость вертра
	$('#weather-icon').
		attr('src',
			`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); // отображает иконку погоды по ссылкке Open weather map
	$('#weather-info').fadeIn();
}
