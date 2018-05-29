var currentBanner = 2;

setInterval(function(){
	$('#anuncio').attr('src','img/anuncio'+currentBanner+'.png');
	currentBanner++;
	if (currentBanner>3){currentBanner=1};
	}, 3000);
