var cargado = 1;
var indice = 1;
var currentBanner = 2;
var n = 1;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
		cargar();
    }
});

function cargar(){
	if (cargado <= 4) {
        $.getJSON("https://rawgit.com/kenzo98/news/master/data/noticias" + cargado + ".json", function (jsonObject) {
		addrows(jsonObject); }); 
		cargado++;
    } else {
        $('#gear').text('No hay más noticias');
    }
}

function addrows(json) {
    $.each(json, function (i, item) {
        $("#grupo").append('<div class="row">'+
			   	'<div class="col-sm-6">'+
					'<div class="thumbnail">'+
						'<img src="'+item.img +'" alt="img">'+
						'<h3>'+item.title+'</h3>'+
						'<p>'+item.date+'</p>'+
						'<p>'+item.sub+'</p>'+'</div>'+'</div>'+
			   	'<div class="col-sm-6">'+
					'<div class="thumbnail">'+
						'<img src="'+item.img +'" alt="img">'+
						'<h3>'+item.title+'</h3>'+
						'<p>'+item.date+'</p>'+
						'<p>'+item.sub+'</p>'+'</div>'+'</div>'
			);
	});
};

setInterval(function(){
	$('#anuncio').attr('src','img/anuncio'+currentBanner+'.png');
	currentBanner++;
	if (currentBanner>3){currentBanner=1};
	}, 3000);
