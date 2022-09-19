function Mastermind(nbcolonnes, nblignes, nbcouleurs, nomvariable) {
		//Déclaration des attributs d'objets
		this.nbcolonnes = nbcolonnes;
		this.nblignes = nblignes;
		this.nbcouleurs = nbcouleurs;
		this.nomvariable = nomvariable;
		this.proposition = new Array();
		this.solution = new Array();
		
		//Déclaration des méthodes d'objets
		this.initialisation = initialisation;
		this.affichage = affichage;
		this.affich_bouttons = affich_bouttons;	
		this.affich_couleurs = affich_couleurs;
		this.affich_tableau = affich_tableau;
		this.affich_soluce = affich_soluce;
		this.placer = placer;
		this.effacer = effacer;
		this.verifier = verifier;
		this.soluce = soluce;
		this.recommencer = recommencer;
		
		//Constructeur principal
		this.initialisation();
		this.affichage();
	
	};	
//Déclaration de l'objet uneboule qui ets une boule du mastermind
	function UneBoule(couleur, etat) {
	this.couleur = couleur;
	this.etat = etat;
	};

//initialisation de la partie 
		function initialisation() {
			//demande du nombre de couleur, colonnes, lignes désirés
			this.nbcolonnes = prompt(' Entrer le nombre de colonnes (4 par défault)',"");
			if (this.nbcolonnes == '') {
				this.nbcolonnes = 4;
			};
			this.nblignes = prompt(' Entrer le nombre de lignes (12 par défault)',"");
			if (this.nblignes == '') {
				this.nblignes = 12;
			};
			this.nbcouleurs = prompt(' Entrer le nombre de couleurs(4 par défault, max 6)',"");
			if (this.nbcouleurs == '') {
				this.nbcouleurs = 4;
			};
			if (this.nbcouleurs >= 7) {
				this.nbcouleurs = 4;
				window.alert("Le max de couleurs est 8 reprise de 4 par défault !");
			};
			//initialisation des objets boules
			for (var i=0;i<=this.nbcolonnes;i++) {
				this.proposition[i] = new UneBoule(0, false);
				this.solution[i] = new UneBoule(Math.round(Math.random()*(this.nbcouleurs-1)+1), false);
			};
			//initialisation des variables de position ligne et colonne
			ligne=1;
			colonne=1;
		};
		function affichage() {
			this.affich_bouttons();	
			this.affich_couleurs();
			this.affich_tableau();
			this.affich_soluce();
		};
		
		//fonction d'affichage des boutons verifier effacer et recommencer
		function affich_bouttons() {
			//effacer appel la fonction effacer
			document.write("<input type=\"button\" class='s'style='font-weight:bold; color:#000000; background-color:#FFD18C; border-style:outset; border-color:#FFB74D;' name=\"Effacer\" value=\"Effacer la ligne\" onClick=\"" + this.nomvariable + ".effacer()\">");	
			//recommencer appel la fonction recommencer
			document.write("<input type=\"button\" class='s'style='font-weight:bold; color:#000000; background-color:#FFD18C; border-style:outset; border-color:#FFB74D;' name=\"Recommencer\" value=\"Recommencer\" onClick=\"" + this.nomvariable + ".recommencer()\"><p></p>");	
			//verifier appel la fonction verifier
			document.write("<input type=\"button\" class='s'style='font-weight:bold; color:#000000; background-color:#8AD0FF; border-style:outset; border-color:#4DB8FF;' name=\"Verifier\" value=\"Vérifier la ligne\" onClick=\"" + this.nomvariable + ".verifier()\"><p></p>");	
		};
		
		//fonction d'affiche des couleurs pour le choix selon le nombre de couleurs passer en paramètre
		function affich_couleurs() {
			for (i=1;i<=this.nbcouleurs;i++) {
				//affichage des couleurs 
				document.writeln("<a href=\"javascript:;\" onclick=\"" + this.nomvariable + ".placer(" + i + ")\"><img src=" + i + ".gif width=\"30\" height=\"30\"></a>");
			};	
			document.write("<br>");
		};
		
//fonction d'affichage du tableau
	function affich_tableau() {
			document.write("<table bgcolor=\"#000000\" border=0 cellspacing=1 cellpadding=3>");
			//boucle d'insertion des lignes
			for (i=1;i<=this.nblignes;i++) {
				document.write("<tr>");
				//numero de lignes
				document.write("<td bgcolor=\"#CCCCCC\" width=\"30\" align=\"center\">",i,"</td>");
				//boucle d'insertion des colonnes avec l'image vide.gif dans chaque cellule
				for (j=1;j<=this.nbcolonnes;j++) {
					document.write("<td bgcolor=\"#CCCCCC\"><img src=\"vide.gif\" name=\"i"+i+j+"\" width=\"30\" height=\"30\"></td>");
				};
				//cellule pour les reponses
				document.write("<td bgcolor=\"#F0F0F0\">");
				//boucle d'insertion des images rien.gif pour les reponses 
				for (j=1;j<=this.nbcolonnes;j++) {
					document.write("<img src=\"rien.gif\" name=\"p"+i+j+"\" width=\"15\" height=\"15\">");
					if (j==Math.round(this.nbcolonnes/2)) document.write("<br>");
				};
				document.write("</td>");
				document.write("</tr>");
			};
			document.write("</table>");
		};
		
		//fonction d'affichage des cases pour afficher la solution apr�s !
		function affich_soluce() {
			document.writeln("<br>Solution:<br>");
			for (i=1;i<=this.nbcolonnes;i++) {
				//affichage des cases 
				document.writeln("<img src=sol.gif name=\"s"+i+"\" width=\"30\" height=\"30\">");
			};	
			document.write("<br>");
		}; 

//fonction de placement des boules dans le tableau
	//elle est appeller quand on click sur une couleur (la couleur y'est passer en paramètres)
	function placer(couleur) {
		//test si la partie est finie ! et dis c'est fini si c'est le cas !
		if (ligne > this.nblignes) {
			window.alert("C'est fini ! Recommencez");
		} else {
			//test si la ligne est complète et averti qu'il faut valider ou effacer si c'est le cas !
			if (colonne > this.nbcolonnes) {
				window.alert('Il faut valider, pour recommencer cette ligne ou effacer');
			} else {
				//preparation des variables pour le changement d'image
				img_en_cour='i' + ligne + colonne;
				adresse= + couleur + '.gif';
				//change l'adresse de l'image
				document[img_en_cour].src=adresse;
				//met dans l'objet en cour la couleur choisie
				this.proposition[colonne].couleur=couleur;
				//incrémente la variable de position colonne
				colonne++;
			};		
		};
	};
//fonction d'effacement d'une ligne 			
	function effacer() {
		for (colonne=1;colonne <= this.nbcolonnes;colonne++) {
			//réinitialisation des images de la ligne
			img_en_cour='i' + ligne + colonne;
			document[img_en_cour].src='vide.gif';
		};
		//remise de la position de colonne a 1
		colonne=1;
	};

//fonction de vérification de la ligne en cours
	function verifier() {	
		//test si toutes les cases on été remplies
		if (colonne<=this.nbcolonnes) {
			window.alert('Remplissez toutes les cases !');
		} else {
			//initialise les boules rouges et les boules grises à 0
			//bouler : bonne couleur bien placer / bouleg : bonne couleur mal placer
			bouler=0;
			bouleg=0;
			//test pour le nombre de boules rouges c'est a dir les boules bien placés de bonne couleur
			for (colonne=1;colonne<=this.nbcolonnes;colonne++) {
				//test si la boule solution et la boule proposition sont égal
				if (this.proposition[colonne].couleur==this.solution[colonne].couleur) {
					//incrémente les boules rouges
					bouler++;
					//blocage des boules pour ne plus les recomparer en mettant l'etat a true
					this.solution[colonne].etat=true;
					this.proposition[colonne].etat=true;
					//placement des boules rouges
					nom_img='p' + ligne + bouler;
					document[nom_img].src='bp.gif';
				};
			};
			
			//test pour le nombre de boules grise qui sont les boules de bonnes couleurs mais mal placés
			for (colonne=1;colonne<=this.nbcolonnes;colonne++) {
				//test si la boule proposé n'a pas encore été testée
				if (this.proposition[colonne].etat==false) {
					for (i=1;i<=this.nbcolonnes;i++) {
						//test si la solution n'a pas encore été testé mais dans une autre boucle
						//test aussi si la proposition n'a pas non plus été testé dans cette boucle
						if (this.solution[i].etat==false && this.proposition[colonne].etat==false) {
							//test si la couleur de la proposition en cour est la meme que la solution
							if (this.proposition[colonne].couleur==this.solution[i].couleur) {
								//incrémente les boules grises
								bouleg++;
								//bloque pour comparaison la boule de solution et la boule de proposition
								this.solution[i].etat=true;
								this.proposition[colonne].etat=true;
								//ajoute aux boules grises les boulesrouges déjà mises
								boule=bouler+bouleg;
								//placement des boules grises
								nom_img='p' + ligne + boule;
								document[nom_img].src='bc.gif';
							};
						};
					};
				};
			};
			//réinitialise les etats des propositions et des solutions pour la prochaine ligne
			for (var i=0;i<=this.nbcolonnes;i++) {
				this.proposition[i].etat=false;
				this.solution[i].etat=false;
			};
			//test si il n'y a que des boules rouges et si oui alert de la victoire
			if (bouler==this.nbcolonnes) {
				//affiche la solution
				this.soluce();
				window.alert("Bravo tu as gagné en "+ligne+" coups");
				ligne=this.nblignes+1;
			//si non test si on est a la fin et que c'est perdu !
			} else if (ligne==this.nblignes) {
				//affiche la solution
				this.soluce();
				window.alert("Désolé, tu as perdu!");
			};
			//changement de la ligne de position (incrémentation) et remise de la colonne a 1
			ligne++;
			colonne=1;
		};
	};

//function d'insertion des couleurs dans la soluce !
	function soluce() {
		for (i=1;i<=this.nbcolonnes;i++) {
			img_en_cour='s' + i;
			adresse= + this.solution[i].couleur + '.gif';
			//change l'adresse de l'image
			document[img_en_cour].src=adresse;	
		};
	};
	//fonction recommencer (elle permet de reinialiser tout le tableau et de refaire un tirage de couleur
	//elle est appeller par la bouton recommencer
	function recommencer() {
		//réinitialisation des variables de position
		ligne=1;
		colonne=1;
		//random des couleurs de la solution
		for (var i=1;i<=this.nbcolonnes;i++) {
			this.solution[i].couleur = Math.round(Math.random()*(this.nbcouleurs-1)+1);
			img_en_cour='s'+ i;
			document[img_en_cour].src='sol.gif';
		};
		//réinitialisation des images du tableau a vide.gif et rien.gif 	
		for (var i=1;i<=this.nblignes;i++) {
			for (var j=1;j<=this.nbcolonnes;j++) {
				img_en_cour='i'+ i + j;
				document[img_en_cour].src='vide.gif';
				img_en_cour='p'+ i + j;
				document[img_en_cour].src='rien.gif';
			};
		};
	};
