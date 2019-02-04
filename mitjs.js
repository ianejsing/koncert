/* Viser et tilfældigt eksempel fra en liste af citater */

function visdagenscitat(elementid, citatliste) {
    var citatindeks = Math.floor(Math.random() * citatliste.length);
    document.getElementById(elementid).innerText = citatliste[citatindeks];
}

/* Viser en musikliste ud fra mp3liste */
function vismusikliste(elementid, mp3liste) {
    for (var i = 0; i < mp3liste.length; i++) {
        document.getElementById(elementid).insertAdjacentHTML("afterbegin", "<p>" + mp3liste[i] + '</p><p><audio controls><source src="' + mp3liste[i] + '"  type="audio/mpeg"></audio></p>');
    }
}

function videokontrol(elementid, viskontroller) {
    if (viskontroller === true) {
        document.getElementById(elementid).setAttribute("controls", "");
    } else {
        document.getElementById(elementid).addEventListener("click",
            function() {
                if (document.getElementById(elementid).paused) {
                    document.getElementById(elementid).play();
                } else {
                    document.getElementById(elementid).pause();
                }
            }
        );
    }

}

/* Hovedprogramdel */

var musikliste = [
    "Bouncy_Fun_1.mp3",
    "Funky_Groove.mp3",
    "Walker.mp3"
];

var citater = [
    "Alt hvad jeg ved er, at jeg intet ved. (Rasmus Müller)",
    "Det har jeg aldrig gjort, så det klarer eg helt sikkert. (Rasmus Gali)",
    "Find ikke fejl, find en løsning. (DJ)",
    "Der findes ingen fremmede, kun venner vi ikke kender. (Oliver Gele)",
    "Du misser hundrede procent af de skud du ikke tager. (Kid Cudi)"
];

visdagenscitat("citat", citater);

vismusikliste("musikliste", musikliste);

videokontrol("koncertvideo", false);
