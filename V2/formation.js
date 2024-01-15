// Füge Event-Listener für das Keyup-Ereignis hinzu
document.addEventListener('keyup', function(event) {
    // Überprüfe, ob die gedrückte Taste die Leertaste ist
    if (event.code === 'Space') {
        // Rufe die Funktion zum Umschalten der Formationen auf
        toggleFormations();
    }
});

// Funktion zum Umschalten der Formationen
function toggleFormations() {
    // Überprüfe die aktuelle Formation und wechsle zur anderen
    if (isFormation1Visible()) {
        setFormation2();
    } else {
        setFormation1();
    }
}

// Funktion zum Überprüfen, ob die 1-4-4-2-Formation sichtbar ist
function isFormation1Visible() {
    var formation1Players = document.getElementsByClassName("formation1");
    return formation1Players.length > 0 && formation1Players[0].getAttribute("visible") === true;
}
