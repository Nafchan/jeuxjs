function testFonction()
			{
				//alert(MaVariable*MaVariable2);
				if(document.getElementById("texteCache").style.display=="none")//on regarde la valeur du "display"
				{
					document.getElementById("texteCache").style.display="block";
				}
				else
				{
					document.getElementById("texteCache").style.display="none";
				}
				
			}
function testerSaisie(parametre)
{
	document.getElementById("attention").innerHTML="";
	if(parametre=="login")
	{
		if (testEmail(document.getElementById("login").value)==false) {
				document.getElementById("attention").innerHTML="<div style='color:#00878e;text-align:center;'>Email invalide</div>";	
				return false;
		}
		else {return true}
	}
	else if(parametre=="mdp"){
			if(document.getElementById("mdp").value==""){
				document.getElementById("attention").innerHTML="<div style='color:#00878e;text-align:center;'>Indiquer un mot de passe</div>";
				return false;
			}
			else{return true;}

 	
			
		}

	}
	function testEmail (email)
	{
		var reg = new RegExp("[.@.]+","g");// on crée un objet qui contient l'expression reguliere
		var tableau=email.split(reg);// split fonction qui decoupe l'element avec comme separateur @ et . designé par l'objet reg

		if(tableau.length==3 || tableau.length==4)
		{
			return true;
		}else
		{
			return false;
		}

	}

	function creerCookie(asNomCookie, asValeur)
	{
		var dExpires= new Date();
		dExpires.setYear(2025);
		document.cookie= asNomCookie+"="+asValeur+";expires="+dExpires.toGMTString();
		
	}
	function recupCookie()
	{
		var cookieNom = document.cookie;
		console.log(cookieNom);	
		var tableau=cookieNom.split("=");
		console.log(tableau);
		return (tableau[1]);	
	}
	function afficheCookie()
	{

		document.getElementById('messageBienvenue').style.display="block";
		document.getElementById('co').style.display="none";
	}
	function valider()
	{
		if (testerSaisie('login') && testerSaisie('mdp'))
		{
			var sPrenom= document.getElementById("login").value;
			var reg = new RegExp("[.@.]+","g");
			var tableau=sPrenom.split(reg);
			
			var lbl_resultat=document.getElementById("lbl_resultat");
			recupFichier();	
			if (navigator.cookieEnabled)
			{
				creerCookie("cookPrenom",sPrenom);

				lbl_resultat.innerHTML="<br/> Le cookie est enregistré bienvenue ";
					
			}
			else
			{
				lbl_resultat.innerHTML="<br/> Vous refusez les cookies";
			}
			afficheCookie();
		}
		else{
			document.getElementById('attention').innerHTML="<div style='color:#00878e;text-align:center;'>vous avez mal saisies les infos ou les champs sont vides</div>";
		}

		

	}
	function recupFichier()
	{
			var url = "xmlhttp.txt"
			var range = 0 
			range += "-" + 100002000000000;
			getData(url,range);

		}; 


		// Get data from file 
		function getData(url, range) { 
		
			if (url !== "") { 

				var xhr = new XMLHttpRequest(); // Set up xhr request 
				xhr.open("GET", url, true); // Open the request 
				xhr.responseType = "text"; // Set the type of response expected 


				// If there's a range set, create a request header to limit to that range 

				if (range !== undefined && range !== null && range.length > 0) 
				{ 
					xhr.setRequestHeader("Range", "bytes=0-100000000000");
				} 
				xhr.send(); 			// Asynchronously wait for the data to return 
				xhr.onreadystatechange = function () 
				{ 
						if (xhr.readyState == xhr.DONE)

						{ 
							//reponse ajax
							var tempoutput = xhr.response; 
							 
							traitementReponse(tempoutput);
							
						} 
				} // Report errors if they happen 
				xhr.addEventListener("error", function (e) 
					{ 
						console("Error: " + e + " Could not load url."); 
					}, false); 
				} 
		} 
	function traitementReponse (fichier)
	{
		console.log(fichier);
		var tableauSplit= fichier.split(";");
		var tableauSplit2;
		var tableauLogin=[];
		var tableauMdp=[];
		var tableauNom=[];
		for (var i=0; i<tableauSplit.length;i++)
		{
				tableauSplit2=tableauSplit[i].split(':');
				tableauLogin.push(tableauSplit2[0]);	
				tableauMdp.push(tableauSplit2[1]);
				tableauNom.push(tableauSplit2[2]);
		}
		var cookieLogin=recupCookie();
	
		var index;

		for (var i=0;i<tableauLogin.length;i++){
			console.log("hey"+tableauLogin[i]+cookieLogin);
			if(tableauLogin[i]==cookieLogin)
			{
				index=i;
			}

		}
		console.log(index);
		if(tableauMdp[index]==document.getElementById("mdp").value)
		{
			lbl_resultat.innerHTML+=tableauNom[index];
			return true;
		}
		else{ return false;}
		/*
		if (tableauMdp[index]==document.getElementById('mdp').value)
		{
			console.log('youpi');
		}*/
	}