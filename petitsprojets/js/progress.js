/*function changeValue()
{
	document.getElementById("progCtrl").value=document.getElementById("rangeCtrl").value;
	document.getElementById("idKiwi").value=document.getElementById("rangeCtrl").value;
}*/
/*function changeNombre()
{
	document.getElementById("idKiwi").value=document.getElementById("valeur").value;
}*/
/*document.addEventListener('DOMContentLoaded', function()
	{
		document.getElementById("rangeCtrl").addEventListener('change', changeValue, false);
	}, false);*/
/*document.addEventListener('DOMContentLoaded', function()
	{
		document.getElementById("valeur").addEventListener('blur',changeNombre, false);
	}, false);*/
var tableauQuestion=['question1','question2','question3','question4','question5'];
var tableauReponse=['rouge','gris','3','Tokyo','chat'];
var time=60;
var chrono=setInterval(chronometre,1000);

function verifReponse(i)
{
	if (document.getElementById(tableauQuestion[i]).value!=tableauReponse[i])
	{
		return true;
	}
	

}
function verifRempliTableau ()
{
	var verif=0;
	for(var i=0; i<tableauQuestion.length;i++)
			{
				if (document.getElementById(tableauQuestion[i]).value!="")
				{
					verif++;
				}
			}
	if(verif==5)
	{
		return true;
	}
}

function chronometre()
{
	 time--;
	 if(time<=15 && time>=0)
	 {
	 	document.getElementById('chrono').style.color="#f9005f";
	 	document.getElementById('chrono').style.borderColor="#f9005f";
	 }
	 else
	 {
	 	document.getElementById('chrono').style.color="#fff7fa";
	 	document.getElementById('chrono').style.borderColor="#fff7fa";
	 }
	 if(time<0)
	 {
	 	var r=confirm("Trop tard voulez-vous retenter?");
	 	if (r==true)
	 	{
	 		time=60;
	 		chronometre();
	 		ressayer();
	 	}
	 	else
	 	{
	 		clearInterval(chrono);
	 		return;
	 	}
	 }
	document.getElementById("chrono").textContent=time;
}

function ressayer()
{
	time=60;
	document.getElementById('mesure').value=0;
	document.getElementById('barre').value=0;
	for(var i=0; i<tableauQuestion.length;i++)
	{
		document.getElementById(tableauQuestion[i]).value="";
		document.getElementById(tableauQuestion[i]).style.borderColor="white";
	}
	console.log('ici');
}
function reponseRempli()
{
	var resultat=0;
	console.log(resultat);
	for(var i=0; i<tableauQuestion.length;i++)
	{
		if(document.getElementById(tableauQuestion[i]).value!="")
		{
		resultat += 1/(tableauQuestion.length);

		}
		
	}
	document.getElementById('mesure').value=resultat*100;
}
function compteurQuestion()
{
	var reponseBonne=0;
	var fini=true;
	for(var i=0; i<tableauQuestion.length;i++)
	{
		if (document.getElementById(tableauQuestion[i]).value!="")
		{
			if (verifRempliTableau())
			{
					if(!verifReponse(i))
				{
					reponseBonne+=20;
					document.getElementById('barre').value=reponseBonne;
					document.getElementById(tableauQuestion[i]).style.borderColor="lightGreen";
				}
				else
				{
					document.getElementById(tableauQuestion[i]).style.borderColor="#f9005f";
				}
			}else{
				fini=false;
			}

			
			
			
		}

	}
	if(fini==false)
	{
		alert('Tas oublié des questions!!')
	}
	if (document.getElementById('mesure').value==100)
	{
		if(reponseBonne==100)
		{
			document.getElementById('barre').value=100;
			var r=confirm('bien joué, veux tu recommencer?');
			if (r==true)
		 	{
		 		time=60;
		 		chronometre();
		 		ressayer();
		 	}
		 	else
		 	{
		 		clearInterval(chrono);
		 		return;
		 	}
			
			
		}
		else
		{
			if(verifRempliTableau())
			{
				alert('Il y a de mauvaises réponses, Corriges toi!');
			}
			else
			{
				alert('T\'as oublié de répondre à des questions!');
			
			}
			
		}
	}
	
}
	
document.addEventListener('DOMContentLoaded',function()
{
	chronometre();
	for(var i=0; i<tableauQuestion.length;i++)
	{
		document.getElementById(tableauQuestion[i]).addEventListener('blur',reponseRempli,false);	
	}

	document.getElementById('envoie').addEventListener('click',compteurQuestion,false);


	
}, false);