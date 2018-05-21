document.addEventListener("DOMContentLoaded", function() {

	var points = parseInt(localStorage.fortniteClickerPoints) || 0;
	document.querySelector("p").textContent = points + " V-Bucks";

	document.querySelector("img").addEventListener("click", function() {
		points += Math.round(Math.random() * 100);
		localStorage.fortniteClickerPoints = points;
		document.querySelector("p").textContent = points + " V-Bucks";

		var rain = document.createElement("img");
		rain.src = "images/vbucks.png";
		rain.style.left = ((innerWidth / 2 * Math.random()) + (innerWidth / 4)) + "px";
		document.body.appendChild(rain);
		setTimeout(function() {
			rain.remove();
		}, 3000);
	});

	document.querySelector("div").addEventListener("click", function() {
		localStorage.fortniteClickerPoints = 0;
		points = 0;
		document.querySelector("p").textContent = points + " V-Bucks";
	});

	document.addEventListener("contextmenu", function(e){ e.preventDefault() });

});
