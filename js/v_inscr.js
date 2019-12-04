// fonction pour vider la zone de saisie
function saisie(txt_defaut,nom_controle)
{
  if(document.getElementById(nom_controle).value == txt_defaut)
    document.getElementById(nom_controle).value='';
}

// fonction retablir rétablira la valeur par défaut si on sort de la zone de saisie
function retablir(txt_defaut,nom_controle)
{
  if(document.getElementById(nom_controle).value == '')
    document.getElementById(nom_controle).value= txt_defaut;
}


// la fonction mev vérifie la validité de tous les contrôles
function mev(txt_defaut,nom_controle)
{
  var longueur = document.getElementById(nom_controle).value.length;
  var msg = document.getElementById('message');
  var button = document.getElementById(nom_controle);
  
  if(nom_controle=="date_n"){

    if(validateAge()===false){

      button.style.border ='#CC3300 2px solid';
      msg.innerText = "Vous devez avoir plus de 18ans";
      b_date=false;

    } 
    else{
      msg.innerText =" ";
      button.style.border='#333 1px solid';
      b_date=true;

    }
  }

  else if(nom_controle=="mail_inscr"){

    // idexOf permet de retourner la position d'un caractère dans la chaine de caractère si vaut -1 le caractère n'a pas été trouvé

    if(document.getElementById(nom_controle).value.indexOf("@")==-1 || document.getElementById(nom_controle).value.indexOf(".")==-1){
      button.style.border ='#CC3300 2px solid';
      msg.innerText="Votre mail ne semble pas correct";
      b_mail=false;
    
    }else if(document.getElementById(nom_controle).value=="root@paca.happy-dev.fr" || document.getElementById(nom_controle).value=="admin@paca.happy-dev.fr" || document.getElementById(nom_controle).value=="dieu@paca.happy-dev.fr"){
      button.style.border ='#CC3300 2px solid';
      alert("Cette adresse mail est déjà utilisée");
    }else{
      msg.innerText =" ";
      button.style.border='#333 1px solid';
      // b_mail=true;

    }
  }

  else if(nom_controle=="cmail_inscr"){

    // idexOf permet de retourner la position d'un caractère dans la chaine de caractère si vaut -1 le caractère n'a pas été trouvé

    if(button.value.indexOf("@")==-1 || button.value.indexOf(".")==-1){
      button.style.border='#CC3300 2px solid';
      msg.innerText="Votre mail ne semble pas correct";
      b_mail=false;
      // si la valeur est différente de celle du mail initial alors...
    }else if(button.value!=document.getElementById("mail_inscr").value){

      button.style.border='#CC3300 2px solid';
      msg.innerText="Les deux mails ne correspondent pas";
      b_mail=false;
    }else{
      msg.innerText=" ";
      button.style.border='#333 1px solid';
      b_mail=true;
    }
  }

  else if(nom_controle=="mp_inscr"){
    if(button.value.length<5 || button.value.length>10){
      button.style.border='#CC3300 2px solid';
      msg.innerText="Le mot de passe doit comporter entre 5 et 10 caractères";
      b_mp=false;
      // **
    }else{
      msg.innerText=" ";
      button.style.border='#333 1px solid';
    }
  }

  else if(nom_controle=="mp_conf"){
    if(button.value.length<5 || button.value.length>10){
      button.style.border='#CC3300 2px solid';
      msg.innerText="Le mot de passe doit comporter entre 5 et 10 caractères";
      b_mp=false;
    }else if(button.value!=document.getElementById("mp_inscr").value){

      button.style.border='#CC3300 2px solid';
      msg.innerText="Les deux mots de passe ne correspondent pas";
      b_mp=false;
    }else{
      msg.innerText=" ";
      button.style.border='#333 1px solid';
      b_mp=true;
    }
  }

  else if(nom_controle=="pseudo"){
    if(document.getElementById('pseudo').value =='dieu' || document.getElementById('pseudo').value =='admin' || document.getElementById('pseudo').value =='root'){
      button.style.border='#CC3300 2px solid';
      alert("Ce pseudo est déjà pris");
    }else{
      msg.innerText=" ";
      button.style.border='#333 1px solid';
      b_pseudo=true;
    }
  }
  // on créé une condition qui si la logueur de caractère est inf4 et si on laisse le txt par defaut alors

  else if(longueur<4 || button.value==txt_defaut){

    // alors la bordure va s'afficher en rouge on lui change sa propriété style

    button.style.border='#CC3300 2px solid';

    // switch evalue une expression selon le cas associé

    switch(nom_controle){

      case "pseudo":
        b_pseudo=false;
        break;
      case "nom":
        b_nom=false;
        break;
      case "prenom":
        b_prenom=false;
        break;
      case "date_n":
        b_date_n=false;
        break;
      case "mail_inscr":
        b_mail=false;
        break;
      case "mp_inscr":
        b_mp=false;
        break; 
      case "sexe":
        b_sexe=false;
        break;     

    }

  }else{
    button.style.border='#333 1px solid';
    switch(nom_controle){

      case "pseudo":
        b_pseudo=true;
        break;
      case "nom":
        b_nom=true;
        break;
      case "prenom":
        b_prenom=true;
        break;
    }
    
  }
}

// il y a trois fonctions a ajouter sur chaque bouton
// function isValidDate(dateStr, format) {
//   if (format == null) { format = "MDY"; }
//   format = format.toUpperCase();
//   if (format.length != 3) { format = "MDY"; }
//   if ( (format.indexOf("M") == -1) || (format.indexOf("D") == -1) || (format.indexOf("Y") == -1) ) { format = "MDY"; }
//   if (format.substring(0, 1) == "Y") { 
// 	 var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
// 	 var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
//   } else if (format.substring(1, 2) == "Y") { 
// 	 var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
// 	 var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
//   } else { 
// 	 var reg1 = /^\d{1,2}(\/)\d{1,2}\1\d{2}$/
// 	 var reg2 = /^\d{1,2}(\/)\d{1,2}\1\d{4}$/
//   }
  
//   if ( (reg1.test(dateStr) == false) && (reg2.test(dateStr) == false) ) { return false; }
//   var parts = dateStr.split(RegExp.$1); 
  
//   if (format.substring(0, 1) == "M") { var mm = parts[0]; } else
// 	 if (format.substring(1, 2) == "M") { var mm = parts[1]; } else { var mm = parts[2]; }
//   if (format.substring(0, 1) == "D") { var dd = parts[0]; } else
// 	 if (format.substring(1, 2) == "D") { var dd = parts[1]; } else { var dd = parts[2]; }
//   if (format.substring(0, 1) == "Y") { var yy = parts[0]; } else
// 	 if (format.substring(1, 2) == "Y") { var yy = parts[1]; } else { var yy = parts[2]; }
//   if (parseFloat(yy) <= 50) { yy = (parseFloat(yy) + 2000).toString(); }
//   if (parseFloat(yy) <= 99) { yy = (parseFloat(yy) + 1900).toString(); }
//   var dt = new Date(parseFloat(yy), parseFloat(mm)-1, parseFloat(dd), 0, 0, 0, 0);
//   if (parseFloat(dd) != dt.getDate()) { return false; }
//   if (parseFloat(mm)-1 != dt.getMonth()) { return false; }
//   return true;
// }
function validateAge(){
  var errorMsg = document.getElementById('message');
  var today = new Date();
  var bthDate = new Date(document.getElementById('date_n').value);
  var AY = today.getFullYear() - bthDate.getFullYear();
  var AM = today.getMonth() - bthDate.getMonth();
  var AD = today.getDay() - bthDate.getDay();

  // console.log(bthDate);
  // console.log(today);
  // console.log(AY);
  // console.log(AM);
  // console.log(AD);
  if(AY>18){
      // errorMsg= "Bienvenue vieille branche";
      // document.location.href = "cercle.html";
      return true;
  }else if(AY===18 && AM===0 && AD>=0){
      // errorMsg.= "Bienvenue vieille branche";
      // document.location.href = "cercle.html";
      return true;        
  }else{
      // errorMsg.innerText= "";
      return false;
  }

};