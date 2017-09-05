
var tableauPhotos=["#photo1", "#photo2", "#photo3" ,"#photo4", "#photo5", "#photo6", "#photo7", "#photo8", "#photo9", "#photo10"];
var tableauPhotosM=["#photo1m", "#photo2m", "#photo3m" ,"#photo4m", "#photo5m", "#photo6m", "#photo7m", "#photo8m", "#photo9m", "#photo10m"];
var tableauPtns=["#ptn0", "#ptn1","#ptn2","#ptn3","#ptn4","#ptn5","#ptn6","#ptn7","#ptn8","#ptn9",]
var timerFunction=null;
var timerPetit=null;

var i=0;
console.log(timerFunction);
function startAnimation() { 
	if(timerFunction == null ) { 
		timerFunction = setInterval(animeDiapo, 6000); 

	} 

} 
function stopAnimation() { 
	if(timerFunction != null){ 
		clearInterval(timerFunction); 
		timerFunction = null; 
	} 
	
} 

function choisiPhoto ()
{	
	$('.photosm').mousedown(function(){
		cacherPhoto();
		var photo="";
		photo=$(this).attr('id');
		var strg="#"+photo;
		i=tableauPhotosM.indexOf(strg);
		$(tableauPtns[i]).addClass("aSonTour");
		$(tableauPhotosM[i]).fadeTo("slow",1);
		$(tableauPhotos[i]).show().css("position","relative");
	
		
	});
}
function cacherPhoto()
{
	
	for (var i=0; i<tableauPhotos.length;i++)
	{
		if ($(tableauPhotos[i]).show())
		{
		$(tableauPtns[i]).removeClass("aSonTour");
		$(tableauPhotos[i]).hide();
		$(tableauPhotosM[i]).fadeTo("slow",0.5);
				
		}
	}
}
function animeDiapo()
{	
	
	//var i;
	

	
	if (i>=0 && i<10)
	{
		$(tableauPhotosM[i]).fadeTo("slow",0.5);
		$(tableauPtns[i]).removeClass("aSonTour");
		$(tableauPhotos[i]).fadeOut(200,function()
			{
				if(i<9)
				{
				i++;
				$(tableauPtns[i]).addClass("aSonTour");
				$(tableauPhotosM[i]).fadeTo("slow",1);
				$(tableauPhotos[i]).fadeIn(200);
				
				}
				else
				{
					i=0;
					$(tableauPtns[i]).addClass("aSonTour");
					$(tableauPhotos[i]).show();
					$(tableauPhotosM[i]).fadeTo("slow",1);
				}
				
			});
				
				
			
	}


	
	
	
}


$(document).ready(function()
{	
	choisiPhoto();
	startAnimation();
	

	$(tableauPhotosM[6]).width(70);
	$(tableauPhotos[6]).width(400);
	$('#play').click(function () {
		startAnimation();
	})
	$('#pause').click(function(){
		stopAnimation();
	})
	
	$('#fdroite').click(function()

	{

		$(tableauPhotosM[i]).fadeTo("slow",0.5);
		$(tableauPtns[i]).removeClass("aSonTour");
		$(tableauPhotos[i]).hide('slide', {direction: 'left'}, 100, function(){
	
				if(i<9)
				{
					
						i++;
				$(tableauPtns[i]).addClass("aSonTour");
				$(tableauPhotosM[i]).fadeTo("slow",1);
				$(tableauPhotos[i]).show('slide',{direction:'right'},100);
				clearInterval(timerFunction);
				timerFunction=null;
				startAnimation();
				
				}
				else
				{
					i=0;
					
					$(tableauPhotos[i]).show();
					$(tableauPhotosM[i]).fadeTo("slow",1);
				}
				
		});
	});
	$('#fgauche').click(function()

	{

		$(tableauPhotosM[i]).fadeTo("slow",0.5);
		$(tableauPtns[i]).removeClass("aSonTour");
		$(tableauPhotos[i]).hide('slide', {direction: 'left'}, 100, function(){
			if(i!=0)
			{	
				i--;

				if(i<9)
				{
				$(tableauPtns[i]).addClass("aSonTour");
				$(tableauPhotosM[i]).fadeTo("slow",1);
				$(tableauPhotos[i]).show('slide',{direction:'right'},100);
				clearInterval(timerFunction);
				timerFunction=null;
				startAnimation();
				
				}
				else
				{
					i=0;
					
					$(tableauPhotos[i]).show();
					$(tableauPhotosM[i]).fadeTo("slow",1);
				}
			}
			else
			{
				i=9;
				$(tableauPhotos[i]).show('slide',{direction:'right'},100);
			}
				
		});
			
	});



})