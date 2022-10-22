
var TabReponseJuste =["rps3", "rps6","rps7","rps10","rps14","rps16","rps21","rps23"]; //un tableau contenant les id des reponse juste

var TabHiddenJuste =["rpsJuste1","rpsJuste2","rpsJuste3","rpsJuste4", // un tableau contenant les id d'evenement choix de reponse juste
"rpsJuste5","rpsJuste6","rpsJuste7","rpsJuste8"];

var TabHiddenFausse =["rpsFausse1","rpsFausse2","rpsFausse3","rpsFausse4","rpsFausse5",// un tableau contenant les id d'evenement choix de reponse Fausse
"rpsFausse6","rpsFausse7","rpsFausse8"];

let num=0;    //compteur de reponse juste


function RevientHaut() {                  //fonction revient au top de la page
  document.documentElement.scrollTop = 0;
}


function showHidden(elementId) {                // fonction qui permet d'afficher un element cachee avec display:none;
    var event = document.getElementById(elementId);
    if (event.style.display === "none") {           //si l'element est cachee afficher sinon cachee le
    event.style.display = "block";
    } else {
      event.style.display = "none";
    }
  }

function afficher(){                            //fonction qui affiche la correction l'evenement juste si la bonne reponse 
                                                //est choisi sinon fausse si pas choisi ou vide 
    for(let i=0; i<TabReponseJuste.length;i++)
    {
        if(document.getElementById(TabReponseJuste[i]).checked) // si la bonne reponse afficher l'evenemnt juste[i] 
            {                                                   //et incrementer le compteur 
                showHidden(TabHiddenJuste[i]);
                num++;
            }
            else                                                // sinon afficher l'evenement faux[i]
            {
                showHidden(TabHiddenFausse[i]);
            }
    }
}
function showResult()           // fonction qui s'execute on click le button affiche la note et la correction
  {

      RevientHaut()                                     //va en haut de la page

      afficher();                                       //afficher la correction

      var nombre = ""+num*10 + "/80";                   //La note sur 80 

      document.getElementById("resultat").innerHTML = nombre; // ecrir la note sur Html dans l'element avec Id = resultat
      showHidden("note");                                     //afficher la note

      showHidden("envoyer");            // cachee le button envoyer pour ne pas refaire le quiz
  }

