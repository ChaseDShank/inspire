function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {

		draw(weather)
	})

	function draw(weather) {
		temp = weather.main.temp
		high = weather.main.temp_max
		low = weather.main.temp_min
		city = weather.name

		temp = Math.floor(temp)
		var cel = temp - 273.15
		cel = Math.floor(cel)
		var far = (cel * 1.8) + 32
		far = Math.floor(far)

		low = Math.floor(low)
		var celL = low - 273.15
		celL = Math.floor(celL)
		var farL = (celL * 1.8) + 32
		farL = Math.floor(farL)

		high = Math.floor(high)
		var celH = high - 273.15
		celH = Math.floor(celH)
		var farH = (celH * 1.8) + 32
		farH = Math.floor(farH)


		var template = `
		<div class="row">
		<div class="col-xs-2 col-xs-offset-8 text-right pad1">
			<h1>${city} <strong>${ far}°</strong>F</h1>
		</div>
			<div class="col-xs-1 mar">
				<h6 class="nopad">H <strong>${farH}°</strong></h6>
				<h6 class="nopad">L <strong>${farL}°</strong></h6>
			</div>
		</div>		
	`
		document.getElementById("weather").innerHTML = template
	}
}
