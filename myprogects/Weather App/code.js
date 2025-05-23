const url =
	'https://api.openweathermap.org/data/2.5/weather';//образец ссылки, по коротой будет получена информация
const apiKey =
	'c14a4e1b3b80c8d31785ae3d71cc1b36'; //личный API Open weather map для получения данных о погоде

$(document).ready(function () {
	weatherFn('Moscow'); //Москва - город по умолчанию
});

async function weatherFn(cName) { // функция принимает новый пользовательский город, отправляет по нему запрос и вызывает обновление страницы
	const temp =
		`${url}?q=${cName}&lang=ru&appid=${apiKey}&units=metric`; // Этот код
	try {                                                         // Работает на основе
		const res = await fetch(temp);                            // Sourse maps
		const data = await res.json();                            // Для упрощения работы с API
		if (res.ok) {
			weatherShowFn(data);
			console.log(data);
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
		format('MMMM D YYYY, HH:mm')); // Дата в фотмате Месяц - Дата - Год 
	$('#temperature').
		html(`${Math.round(data.main.temp)}°C`); //Округляет температуру до целого числа, отображает ее в °C
	$('#description').
		text(data.weather[0].description);//краткое сведение о погоде, например: ясно
	$('#wind-speed').
		html(`Скорость ветра: ${data.wind.speed} м/с`);// отображает скорость вертра
	$('#weather-icon').
		attr('src',
			`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); // отображает иконку погоды по ссылкке Open weather map
	$('#weather-info').fadeIn();
}
