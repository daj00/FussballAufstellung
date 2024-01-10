/* // formation.js

// Funktionen zum Umschalten der Formationen
function buttonFormation1() {
    setFormation1();
}

function buttonFormation2() {
    setFormation2();
}

// Funktion zum Einstellen der 1-4-4-2-Formation
function setFormation1() {
    // Torwart
    document.getElementById("goalkeeper1").setAttribute("position", "0 0.5 4");

    // Verteidiger
    document.getElementById("defender1").setAttribute("position", "-2.5 2 3.5");
    document.getElementById("defender2").setAttribute("position", "-0.75 2 4");
    document.getElementById("defender3").setAttribute("position", "0.75 2 4");
    document.getElementById("defender4").setAttribute("position", "2.5 2 3.5");

    // Mittelfeldspieler
    document.getElementById("midfielder1").setAttribute("position", "-3.5 2 -1");
    document.getElementById("midfielder2").setAttribute("position", "-1 2 0.5");
    document.getElementById("midfielder3").setAttribute("position", "1 2 0.5");
    document.getElementById("midfielder4").setAttribute("position", "3.5 2 -1");

    // Stürmer
    document.getElementById("striker1").setAttribute("position", "-1 2 -5");
    document.getElementById("striker2").setAttribute("position", "1 2 -5");

    // Verstecken Spieler der anderen Formation
    hideFormation2();
    // Zeige Spieler der aktuellen Formation
    showFormation1();
}

// Funktion zum Einstellen der 1-4-2-3-1-Formation
function setFormation2() {
    // Torwart
    document.getElementById("goalkeeper2").setAttribute("position", "0 0.5 4");

    // Verteidiger
    document.getElementById("defender5").setAttribute("position", "-2.5 2 3.5");
    document.getElementById("defender6").setAttribute("position", "-0.75 2 4");
    document.getElementById("defender7").setAttribute("position", "0.75 2 4");
    document.getElementById("defender8").setAttribute("position", "2.5 2 3.5");

    // Defensives Mittelfeld
    document.getElementById("dm1").setAttribute("position", "1 2 1.5");
    document.getElementById("dm2").setAttribute("position", "-1 2 1.5");

    // Mittelfeldspieler
    document.getElementById("midfielder5").setAttribute("position", "-3.5 2 -2");
    document.getElementById("midfielder6").setAttribute("position", "0 2 -2");
    document.getElementById("midfielder7").setAttribute("position", "3.5 2 -2");

    // Stürmer
    document.getElementById("striker3").setAttribute("position", "0 3 -4");

    // Verstecken Spieler der anderen Formation
    hideFormation1();
    // Zeige Spieler der aktuellen Formation
    showFormation2();
}

// Funktion zum Verstecken der Spieler der 1-4-4-2-Formation
function hideFormation1() {
    var formation1Players = document.getElementsByClassName("formation1");
    for (var i = 0; i < formation1Players.length; i++) {
        formation1Players[i].setAttribute("visible", false);
    }
}

// Funktion zum Verstecken der Spieler der 1-4-2-3-1-Formation
function hideFormation2() {
    var formation2Players = document.getElementsByClassName("formation2");
    for (var i = 0; i < formation2Players.length; i++) {
        formation2Players[i].setAttribute("visible", false);
    }
}

// Funktion zum Zeigen der Spieler der 1-4-4-2-Formation
function showFormation1() {
    var formation1Players = document.getElementsByClassName("formation1");
    for (var i = 0; i < formation1Players.length; i++) {
        formation1Players[i].setAttribute("visible", true);
    }
}

// Funktion zum Zeigen der Spieler der 1-4-2-3-1-Formation
function showFormation2() {
    var formation2Players = document.getElementsByClassName("formation2");
    for (var i = 0; i < formation2Players.length; i++) {
        formation2Players[i].setAttribute("visible", true);
    }
}



// formation.js

// Funktionen zum Umschalten der Formationen
function buttonFormation1() {
    setFormation1();
}

function buttonFormation2() {
    setFormation2();
}

// Funktion zum Einstellen der 1-4-4-2-Formation
function setFormation1() {
    setPlayerInfo("goalkeeper1", "TW");
    setPlayerInfo("defender1", "LV");
    setPlayerInfo("defender2", "IV");
    setPlayerInfo("defender3", "IV");
    setPlayerInfo("defender4", "RV");
    setPlayerInfo("midfielder1", "LM");
    setPlayerInfo("midfielder2", "ZM");
    setPlayerInfo("midfielder3", "ZM");
    setPlayerInfo("midfielder4", "RM");
    setPlayerInfo("striker1", "ST");
    setPlayerInfo("striker2", "ST");

    // Verstecken Spieler der anderen Formation
    hideFormation2();
    // Zeige Spieler der aktuellen Formation
    showFormation1();
}

// Funktion zum Einstellen der 1-4-2-3-1-Formation
function setFormation2() {
    setPlayerInfo("goalkeeper2", "TW");
    setPlayerInfo("defender5", "LV");
    setPlayerInfo("defender6", "IV");
    setPlayerInfo("defender7", "IV");
    setPlayerInfo("defender8", "RV");
    setPlayerInfo("dm1", "DM");
    setPlayerInfo("dm2", "DM");
    setPlayerInfo("midfielder5", "LM");
    setPlayerInfo("midfielder6", "ZOM");
    setPlayerInfo("midfielder7", "RM");
    setPlayerInfo("striker3", "ST");

    // Verstecken Spieler der anderen Formation
    hideFormation1();
    // Zeige Spieler der aktuellen Formation
    showFormation2();
}

// Funktion zum Verstecken der Spieler der 1-4-4-2-Formation
function hideFormation1() {
    var formation1Players = document.getElementsByClassName("formation1");
    for (var i = 0; i < formation1Players.length; i++) {
        formation1Players[i].setAttribute("visible", false);
    }
}

// Funktion zum Verstecken der Spieler der 1-4-2-3-1-Formation
function hideFormation2() {
    var formation2Players = document.getElementsByClassName("formation2");
    for (var i = 0; i < formation2Players.length; i++) {
        formation2Players[i].setAttribute("visible", false);
    }
}

// Funktion zum Zeigen der Spieler der 1-4-4-2-Formation
function showFormation1() {
    var formation1Players = document.getElementsByClassName("formation1");
    for (var i = 0; i < formation1Players.length; i++) {
        formation1Players[i].setAttribute("visible", true);
    }
}

// Funktion zum Zeigen der Spieler der 1-4-2-3-1-Formation
function showFormation2() {
    var formation2Players = document.getElementsByClassName("formation2");
    for (var i = 0; i < formation2Players.length; i++) {
        formation2Players[i].setAttribute("visible", true);
    }
}

// Funktion zum Setzen von Namen und Informationen für einen Spieler
function setPlayerInfo(playerId, playerName) {
    // Fügen Sie ein a-text Element hinzu, um den Namen anzuzeigen
    var textId = playerId + "-text";
    var textElement = document.getElementById(textId);
    if (!textElement) {
        textElement = document.createElement("a-text");
        textElement.setAttribute("id", textId);
        textElement.setAttribute("position", "-0.25 -.35 0"); // Position unterhalb des Spielers
        textElement.setAttribute("width", "8px");
        textElement.setAttribute("color", "black");
        document.getElementById(playerId).appendChild(textElement);
    }

    textElement.setAttribute("value", playerName);
}
*/

// Step 3





// Funktionen zum Umschalten der Formationen
// Funktion zum Verstecken der Spieler der 1-4-2-3-1-Formation

function setFormation0() {
    
}

 function buttonFormation1() {
    setFormation1();
}

function buttonFormation2() {
    setFormation2();
}

// Funktion zum Einstellen der 1-4-4-2-Formation
function setFormation1() {
    setPlayerInfo("goalkeeper1", "TW");
    setPlayerInfo("defender1", "LV");
    setPlayerInfo("defender2", "IV");
    setPlayerInfo("defender3", "IV");
    setPlayerInfo("defender4", "RV");
    setPlayerInfo("midfielder1", "LM");
    setPlayerInfo("midfielder2", "ZM");
    setPlayerInfo("midfielder3", "ZM");
    setPlayerInfo("midfielder4", "RM");
    setPlayerInfo("striker1", "ST");
    setPlayerInfo("striker2", "ST");

    // Verstecken Spieler der anderen Formation
    hideFormation2();
    // Zeige Spieler der aktuellen Formation
    showFormation1();
}

// Funktion zum Einstellen der 1-4-2-3-1-Formation
function setFormation2() {
    setPlayerInfo("goalkeeper2", "TW");
    setPlayerInfo("defender5", "LV");
    setPlayerInfo("defender6", "IV");
    setPlayerInfo("defender7", "IV");
    setPlayerInfo("defender8", "RV");
    setPlayerInfo("dm1", "DM");
    setPlayerInfo("dm2", "DM");
    setPlayerInfo("midfielder5", "LM");
    setPlayerInfo("midfielder6", "ZOM");
    setPlayerInfo("midfielder7", "RM");
    setPlayerInfo("striker3", "ST");

    // Verstecken Spieler der anderen Formation
    hideFormation1();
    // Zeige Spieler der aktuellen Formation
    showFormation2();
}

// Funktion zum Verstecken der Spieler der 1-4-4-2-Formation
function hideFormation1() {
    var formation1Players = document.getElementsByClassName("formation1");
    for (var i = 0; i < formation1Players.length; i++) {
        formation1Players[i].setAttribute("visible", false);
    }
}

// Funktion zum Verstecken der Spieler der 1-4-2-3-1-Formation
function hideFormation2() {
    var formation2Players = document.getElementsByClassName("formation2");
    for (var i = 0; i < formation2Players.length; i++) {
        formation2Players[i].setAttribute("visible", false);
    }
}

// Funktion zum Zeigen der Spieler der 1-4-4-2-Formation
function showFormation1() {
    var formation1Players = document.getElementsByClassName("formation1");
    for (var i = 0; i < formation1Players.length; i++) {
        formation1Players[i].setAttribute("visible", true);
    }
}

// Funktion zum Zeigen der Spieler der 1-4-2-3-1-Formation
function showFormation2() {
    var formation2Players = document.getElementsByClassName("formation2");
    for (var i = 0; i < formation2Players.length; i++) {
        formation2Players[i].setAttribute("visible", true);
    }
}

function setPlayerInfo(playerId, playerName) {
    // Fügen Sie ein a-text Element hinzu, um den Namen anzuzeigen
    var textId = playerId + "-text";
    var textElement = document.getElementById(textId);
    if (!textElement) {
        textElement = document.createElement("a-text");
        textElement.setAttribute("id", textId);
        textElement.setAttribute("position", "-0.25 -.35 0"); // Position unterhalb des Spielers
        textElement.setAttribute("width", "8px");
        textElement.setAttribute("color", "black");
        document.getElementById(playerId).appendChild(textElement);
        textElement.addEventListener("click", function() {
            openPlayerForm(playerId);
        });
    }

    textElement.setAttribute("value", playerName);
}

// Funktion zum Öffnen des Spielerformulars
function openPlayerForm(playerId) {
    document.getElementById("playerForm").style.display = "block";
    // Setze den aktuellen Spieler, damit die Informationen gespeichert werden können
    currentSelectedPlayerId = playerId;
}

// Funktion zum Schließen des Spielerformulars
function closePlayerForm() {
    document.getElementById("playerForm").style.display = "none";
    // Zurücksetzen des aktuellen Spielers
    currentSelectedPlayerId = null;
}

// Funktion zum Speichern von Spielerinformationen
function savePlayerInfo() {
    var playerName = document.getElementById("playerName").value;
    var playerAge = document.getElementById("playerAge").value;
    var playerHeight = document.getElementById("playerHeight").value;
    var playerStrengths = document.getElementById("playerStrengths").value;
    var playerRequirements = document.getElementById("playerRequirements").value;

    // Füge hier die Logik zum Speichern der Spielerinformationen hinzu
    // Verwende currentSelectedPlayerId, um den ausgewählten Spieler zu identifizieren
    // Beispiel: savePlayerInfoToBackend(currentSelectedPlayerId, playerName, playerAge, playerHeight, playerStrengths, playerRequirements);
    // ...

    // Schließe das Formular nach dem Speichern
    closePlayerForm();
}


