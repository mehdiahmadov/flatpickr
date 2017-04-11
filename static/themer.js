if (window.navigator.userAgent.indexOf('MSIE')){
	var iestyle = document.createElement("link");
	iestyle.setAttribute("href", "/flatpickr/bower_components/flatpickr/dist/ie.css");
	iestyle.setAttribute("rel", "stylesheet");
	iestyle.setAttribute("type", "text/css");
	document.head.appendChild(iestyle);
}


function themer() {
	var theme_sel = document.getElementById("themes"),
		stylesheet = document.head.querySelector(
			"link[href='https://chmln.github.io/flatpickr/bower_components/flatpickr/dist/flatpickr.css']"
		) ||
		document.head.querySelector(
			"link[href='http://localhost:1313/flatpickr/bower_components/flatpickr/dist/flatpickr.css']"
		),
		themes = [
			"dark",
			"material_blue", "material_green", "material_red", "material_orange",
			"airbnb",
			"confetti"
		];

	if (!theme_sel)
		return;

	for(var i = 0; i < themes.length; i++){
		var opt = document.createElement("option");
		opt.className=themes[i];
		opt.value = themes[i];
		opt.textContent = themes[i];

		theme_sel.appendChild(opt);
	}

	theme_sel.addEventListener("change", function(e){
		theme_sel.blur();

		if (!e.target.value || e.target.value === "default")
			return (stylesheet.href="/flatpickr/bower_components/flatpickr/dist/flatpickr.css");

		stylesheet.href="/flatpickr/bower_components/flatpickr/dist/themes/" + e.target.value +".css";
	});
};

themer();