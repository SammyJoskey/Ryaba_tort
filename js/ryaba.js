const dataURL = "https://api.myjson.com/bins/jcmhn";
const vars = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
]

function formValues() {
	let obj = {};

	vars.forEach(function(field) {
		obj[field] = $("input[name=" + field + "]")[0].value
	});

	return obj;
}

function handleButton() {
	$.getJSON(dataURL, handleData);
}

function handleData(data) {
	let message = "";

	let obj = formValues();

	data["text"].forEach(function(item) {
		for (key in obj) {
		item = item.replace("{" + key + "}", obj[key]);
		}

		message = message + item + "<br>";
	});

		$("div#result").html(message);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
