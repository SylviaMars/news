var cargado = 3;

var json= "noticias.json";
var json2= "noticias2.json"

$(window).scroll(function () {
	if(cargado < 3){
		alert("scroll");
		cargado = 2;
	}
	/*
    if ($(window).scrollTop() + $(window).height() -1{
        if (cargado < 3) {
            $.getJSON(json, function (jsonObject) {
                addrow(jsonObject);
             }); cargado++;
         } else {
         	$('#gear').text('No hay más noticias');
         }
     }*/
});

$(document).ready(function() {
    $("#n1").click(function(){
    	window.location.href=("Noticia.html");
    }); 
});


function cargar() {
	alert("click");
    // if (cargado < 6) {
        // $.getJSON("https://rawgit.com/arsg93/Noticias/master/data/" + cargado + ".json", function (jsonObject) {
            // addrow(jsonObject);
        // }); cargado++;
    // } else {
        // $('#mas').text('No hay más noticias');
    // }
};

// function addrow(json) {
    // $.each(json, function (i, item) {
        // $(".noticias").append('<div class="col-sm-6 col-md-6">' +
            // '<div class="thumbnail">' +
            // '<div class="caption">' + '<h3 class="text-justify">' + item.titulo + "</h3>" + "</div>" +
            // '<img src="' + item.imgmid + '" alt="..." />' +
            // '<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
            // '<p class="text-right">' + "<em>" + item.fecha + "</em>" + "</p>" + "</div>" + "</div>" + "</div>");
    // })
// };

