var cargado = 1;
var currentBanner = 2;
var scroll = true;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
		cargar(1);
    }
});

$(document).ready(function() {
	$("#switch").click(function(){
		if(scroll==true){
			scroll=false;
			$('#switch').text('Activar Scroll');
		}
		else{
			scroll=true;
			$('#switch').text('Desactivar Scroll');
		}
	})
	$("#gear").click(function(){
		cargar(0);
	})
});

function cargar(origen){
	if(scroll==true||origen==0){
		if (cargado <= 4){
			$.getJSON("https://rawgit.com/kenzo98/news/master/data/noticias" + cargado + ".json", function (jsonObject) {
			addrows(jsonObject); }); 
			cargado++;
		} else {
			$('#cargar').attr('title','No hay más noticias');
		}
	}
}

function addrows(json) {
        $("#grupo").append('<div class="row">'+
				'<div class="col-sm-6">'+
					'<div class="thumbnail">'+
						'<img src="'+json[0].img +'" alt="img">'+
						'<h3>'+json[0].title+'</h3>'+
						'<p>'+json[0].date+'</p>'+
						'<p>'+json[0].sub+'</p>'+'</div>'+'</div>'+
				'<div class="col-sm-6">'+
					'<div class="thumbnail">'+
						'<img src="'+json[1].img +'" alt="img">'+
						'<h3>'+json[1].title+'</h3>'+
						'<p>'+json[1].date+'</p>'+
						'<p>'+json[1].sub+'</p>'+'</div>'+'</div>'
		);
};

setInterval(function(){
	$('#anuncio').attr('src','img/anuncio'+currentBanner+'.png');
	currentBanner++;
	if (currentBanner>3){currentBanner=1};
	}, 3000);

