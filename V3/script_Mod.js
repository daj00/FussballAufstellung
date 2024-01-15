document.addEventListener('DOMContentLoaded', function () {
    // Warte, bis das Dokument vollständig geladen ist

    // Hole das graue Spielfeld-Element
    var field = document.getElementById('field');

    // Füge einen Klick-Event-Listener hinzu
    field.addEventListener('click', function () {
        // Ändere die Farbe des angeklickten Feldes
        field.setAttribute('color', 'blue');
    });

    // Füge einen Tasten-Event-Listener hinzu
    document.addEventListener('keypress', function (event) {
        // Überprüfe, ob die gedrückte Taste die "1" ist
        if (event.key === '1') {
            // Wähle den Torwart aus (hier ändere die Eigenschaften nach Bedarf)
            var goalkeeper = document.getElementById('TW');
            goalkeeper.setAttribute('color', 'red');
        }
    });
});
