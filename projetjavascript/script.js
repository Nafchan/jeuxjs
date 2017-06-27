console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est pret");
	var posDepartSouris;
	var posDepartBoite;
	//tableau1: contient les case à déplacer sur l'avatar
	var tableau1=[$('.case0'),$('.case1'),$('.case2'),$('.case3'),$('.case4'),$('.case5'),$('.case6'),$('.case7'),$('.case8')];
	//tableau2: contient les emplacement d'origine de chaque case
	var tableau2=[$('#place'),$('#place1'),$('#place2'),$('#place3'),$('#place4'),$('#place5'),$('#place6'),$('#place7'),$('#place8')];
	//image1: contient les images pour les objets garcon
	var image1=[$('#couronne'), $('#chapeau'),$('#lunettes1'),$('#hautgarcon'),$('#cravate'),$('#cape'),$('#cheveuxgarcon1'),$('#cheveuxgarcon2'),$('#cheveuxgarcon3')];
	//image2: contient les images pour les objets filles
	var image2=[$('#etoile'), $('#fleur'),$('#lunettes2'),$('#hautfille'),$('#sac'),$('#robe'),$('#cheveuxfille1'),$('#cheveuxfille2'),$('#cheveuxfille3')];

	//des qu'on clique sur une boite avec la souris
	// la boite prend la classe en mouvement
	//on ne déplace que les objets ayant la classe "deplacer"
	$('.deplacer').mousedown(function(event)
		{
			console.log("Le bouton de la souris a été appuyé sur la boite.");
			// Seulement le bouton gauche de la souris
			if(event.which!==1){return;}
			// Éviter de sélectionner texte si la souris bouge pendant le click
			event.preventDefault();
			var boite=$(this);
			$('.en-mouvement').removeClass('en-mouvement');
			boite.addClass('en-mouvement');
			// Se souvenir de la position de départ
			posDepartSouris={left:event.pageX,
							 top: event.pageY};
			posDepartBoite =boite.offset();
		});

	// des qu'on appuie sur le bouton
	// on retire toutes les boites sur l'avatar, donc ceux qui ont la classe "poser"
	// et on les remet à leur place
	$('#bouton').mousedown(function(e)
	{
		
		for (var i=0;i<tableau1.length;i++)
		{
			if(tableau1[i].hasClass('poser'))
			{
				tableau1[i].offset(tableau2[i].offset());
			}
		}
		});
	// Si on appuie sur le bouton garcon on fait apparaitre les images garcon
	$('#Garcon').mousedown(function(e)
	{
		for(var i=0;i<image1.length;i++)
		{
			image2[i].hide();
			image1[i].show();
		}
		$('#fond').css('background-image',' url("images/wall1.png")');
		});
// Si on appuie sur le bouton fille on fait apparaitre les images fille
	$('#Fille').mousedown(function(e)
	{
		
		for(var i=0;i<image1.length;i++)
		{
			image1[i].hide();
			image2[i].show();
		}
		$('#fond').css('background-image',' url("images/wall2.png")');
		
		});

// si on relache l'objet
// si il se trouve dans la zone de l'avatar, c'est bon! il sera magnetisé au bon emplacement
// sinon il retourne à sa place

	$('html').mouseup(function(e)
		{
			console.log("Le bouton de la souris a été relaché.");
			// on prend la boite qui est "en-mouvement" pour la placer
			var boite=$('.en-mouvement');
			// la fonction ne s'appliquera seulement sur un objet en-mouvement
			if  (boite.hasClass('en-mouvement')){
			//x et y sont les position de la boite en mouvement
			var x = boite.offset().left+50;
			var y = boite.offset().top+50;
			// posX et posY sont les position du coin de la tete de l'avatar
			var posX= $("#tetechat").offset().left;
			var posY= $("#tetechat").offset().top;
			// large et haut, sont les largeur et hauteur du chat
			var large=$('#tetechat').width()+$("#tetechat").offset().left;
			var haut=$("#tetechat").offset().top +$('#tetechat').height() +$('#bustechat').height()+$('#piedchat').height();

			//si x et compris entre le coin de la tete du chat et entre la largeur  et hauteur du chat il va se positionner sur l'avatar
			if (x>posX && x<large && y>posY && y<haut)
			{
				//si c'est un accessoire 
				if (boite.hasClass('accessoire'))
				{

					for (var i=0;i<3;i++)
						//les accessoires se trouvent seulement entre les indices 0 à 2
					{
						if(tableau1[i].hasClass('poser'))
						{
							// les objets ayant deja la classe "poser" sont retirés
							tableau1[i].removeClass('poser');
							tableau1[i].offset(tableau2[i].offset());
						}
					}
					// les accessoires 0 et 1 doivent apparaitre par dessus la coupe de cheveux
					tableau1[0].css('z-index','100');
					tableau1[1].css('z-index','100');
					//Les accessoires se positionnent la ou se trouve la classe .a sur le chat
					$('.en-mouvement').offset($('.a').offset());
					//on leur rajoute la classe "poser"
					$('.en-mouvement').addClass('poser');
					//ils ne sont plus en mouvement donc leur retire cette classe
					$('.en-mouvement').removeClass('en-mouvement');
				
				
				}
				// même principe pour les coiffures
				if (boite.hasClass('coiffure'))
				{
					for (var i=3;i<6;i++)
					{
						if(tableau1[i].hasClass('poser'))
						{
							tableau1[i].removeClass('poser');
							tableau1[i].offset(tableau2[i].offset());
						}
					}
					
					
					$('.en-mouvement').offset($('.c').offset());
					$('.en-mouvement').addClass('poser');
					$('.en-mouvement').removeClass('en-mouvement');
					
				
				}
				//meme principe pour les vêtements

				if (boite.hasClass('buste'))
				{
					
					for (var i=6;i<9;i++)
					{
						if(tableau1[i].hasClass('poser'))
						{
							tableau1[i].removeClass('poser');
							tableau1[i].offset(tableau2[i].offset());
						}
					}
					
					
				$('.en-mouvement').offset($('.b').offset());
				$('.en-mouvement').addClass('poser');
				$('.en-mouvement').removeClass('en-mouvement');
				}
		}
		//si la boite était mal posiitonnée
		else
		{
			//on récupère la classe de l'objet en mouvement
			var classe=['case0','case1','case2','case3','case4','case5','case6','case7','case8'];
			for (var i=0;i<9;i++)
					{
						if(boite.hasClass(classe[i]))
						{
						//on retire la classe en mouvement
						boite.removeClass('en-mouvement');
						//on le remet à la bonne place
						boite.offset(tableau2[i].offset());
						}
					}
						

		}
		
	

	}});
	// On suit les mouvements sur toute la page.
	// Si on suivait uniquement à l'intérieur de la boite un 
	// grand mouvement de la souris pourrait faire sortir le pointeur de la boite et
	// on "perdrait" la boite.
	$('html').mousemove(function(event)
		{
			console.log("La souris à bougé dans la page");
			var boite=$('.en-mouvement');
			if(boite.length===0){return;}
			var pos={left:event.pageX,
					 top: event.pageY};
			pos.top -=posDepartSouris.top;
			pos.left-=posDepartSouris.left;
			pos.top +=posDepartBoite.top;
			pos.left+=posDepartBoite.left;
			boite.offset(pos);
			
		});

	console.log("La mise en place est finie. En attente d'événements...");
});