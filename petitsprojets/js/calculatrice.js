

	var booleen=true;
function effacer()
{
	document.getElementById('affiche').innerHTML="";
	document.getElementById('nb1').value="";
	document.getElementById('nb2').value="";
	return booleen=true;
} 
function recupValeur(valeur)
{

	if(valeur=='=')
	{
		calcul();
	}
	//document.getElementById("operat").value!="";
	if (!isNaN(valeur) && booleen==true)
	{
		document.getElementById('affiche').innerHTML+=valeur;
		document.getElementById('nb1').value+=valeur;
		console.log('nb1:'+document.getElementById('nb1').value);
		
	}

	else if(!isNaN(valeur) && booleen==false )
	{
		
		document.getElementById('affiche').innerHTML+=valeur;
		document.getElementById('nb2').value+=valeur;

	}
	/*if (booleen==false && valeur=='-' && document.getElementById('operat').value!="" && isNaN(document.getElementById('nb1')))
	{
		console.log('ici');
		document.getElementById('affiche').innerHTML+=valeur;
		document.getElementById('nb2').value+=valeur;
		booleen=true;

	}*/
		if ( valeur=='+'|| valeur=='-' || valeur=='/' || valeur=='*')
		{

			if(document.getElementById('nb1').value!="" && document.getElementById('nb2').value!="" && document.getElementById('operat').value!="")
			{
				calcul();
				document.getElementById('operat').value=valeur;
			}
			else
			{
				if (valeur=='-' )
				{
					if(document.getElementById('nb1').value=="" )
					{
						document.getElementById('affiche').innerHTML+=valeur;
						document.getElementById('nb1').value+=valeur;
						console.log('nb1:'+document.getElementById('nb1').value);
						booleen=true;
					}
					else
					{
						if(document.getElementById('operat')=="")
						{
						document.getElementById('affiche').innerHTML+=valeur;
						document.getElementById('nb2').value+=valeur;
						}
						else
						{

							if (document.getElementById('operat').value!="")
							{
								document.getElementById('affiche').innerHTML+=valeur;
								document.getElementById('nb2').value+=valeur;
							}
							else
							{
								document.getElementById('affiche').innerHTML+=valeur;
								document.getElementById('operat').value+=valeur;
								booleen=false;
							}
						
						}

					}

				}
				else
				{
				booleen=false;
				document.getElementById('affiche').innerHTML+=valeur;
				document.getElementById('operat').value=valeur;
				console.log(document.getElementById('operat').value);
				}
			}
		}
	if(valeur=="." )
	{
		if(booleen==true)
		{
			document.getElementById('nb1').value+=valeur;
			document.getElementById('affiche').innerHTML+=valeur;
		}
		else
		{
			console.log('parici');
			document.getElementById('nb2').value+=valeur;
			document.getElementById('affiche').innerHTML+=valeur;
		}
	}

}
function calcul ()
{
	var nb1= parseFloat(document.getElementById('nb1').value);
	var nb2= parseFloat(document.getElementById('nb2').value);
	var resultat;
	switch(document.getElementById('operat').value) {
    case '+':
        resultat=nb1+nb2;
        break;
    case '-':
         resultat=nb1-nb2;
        break;
    case '/':
         resultat=Math.round((nb1/nb2)*10000000000000000)/10000000000000000;

        break;
    case '*':
    	if (nb1>0 && nb1>0)
    	{
			resultat=nb1*nb2;
    	}
    	else if ((nb1<0 && nb2>0) || (nb1>0 && nb2<0) ) 
    	{
    		resultat=-(nb1*nb2);
    	}
    	else
    	{
    		resultat=nb1*nb2;
    	}
        break;
    default:
        alert('Erreur de saisie');
	}
	 document.getElementById('affiche').innerHTML=resultat;
	 document.getElementById('nb1').value=resultat;
	 document.getElementById('nb2').value="";
	 document.getElementById('operat').value="";
	 booleen=true;
}


function gestionClavier()
{
	
	switch (event.keyCode)
	{
		case 48:
			recupValeur(0);
			break;
		case 49:
			recupValeur(1);
			break;
		case 50:
			recupValeur(2);
			break;
		case 51:
			recupValeur(3);
			break;
		case 52:
			recupValeur(4);
			break;
		case 53:
			recupValeur(5);
			break;
		case 54:
			recupValeur(6);
			break;
		case 55:
			recupValeur(7);
			break;
		case 56:
			recupValeur(8);
			break;
		case 57:
			recupValeur(9);
			break;
		case 107:
			recupValeur('+');
			break;
		case 109:
			recupValeur('-');
			break;
		case 111:
			recupValeur('/');
			break;
		case 106:
			recupValeur('*');
			break;
		case 107:
			recupValeur('=');
			break;
		case 8:
			effacer();
			break;
		default:
			alert('erreur saisie');
	}
}
document.addEventListener('DOMContentLoaded',function()
{
	document.getElementById('mainPage').addEventListener('keypress',gestionClavier,false);
},false);
	


