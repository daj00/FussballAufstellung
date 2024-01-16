var cameraEl = document.querySelector('#camera');


logCameraData();

// Loggt die Position und Rotation in der Konsole
function logCameraData() {
    var position = cameraEl.getAttribute('position');
    var rotation = cameraEl.getAttribute('rotation');
  
    console.log('Position:', position);
    console.log('Rotation:', rotation);
   

}

// Fügt Event-Listener für die Tastatur hinzu
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'w':
            cameraEl.object3D.translateZ(-0.1);
            break;
        case 'a':
            cameraEl.object3D.translateX(-0.1);
            break;
        case 's':
            cameraEl.object3D.translateZ(0.1);
            break;
        case 'd':w
            cameraEl.object3D.translateX(0.1);
            break;
        case 'ArrowUp':
            cameraEl.object3D.rotation.x -= Math.PI / 180;
            break;
        case 'ArrowDown':
            cameraEl.object3D.rotation.x += Math.PI / 180;
            break;
        case 'ArrowLeft':
            cameraEl.object3D.rotation.y -= Math.PI / 180;
            break;
        case 'ArrowRight':
            cameraEl.object3D.rotation.y += Math.PI / 180;
            break;
        case 'p':
            logCameraData();
            break;
    }



    // Klick-Event für das Element mit der ID "TW" (Torwart)
    var twPlane = document.getElementById('TW');
    twPlane.addEventListener('click', function () {
        console.log("TW clicked");

        // Zoomen zur Position des TW mit Animation
        animateCameraToPosition('-10 97 -0.45', '50 95 0');
    });

    // Klick-Event für das Element mit der ID "ZIV" (Zentrales Defensives Mittelfeld)
    var zivPlane = document.getElementById('ZIV');
    zivPlane.addEventListener('click', function () {
        console.log("ZIV clicked");

        // Bewegen zur Position des ZIV mit Animation
        animateCameraToPosition('-11 98 -0.45', '50 95 0');
    });

    // Klick-Event für das Element mit der ID "RIV" (Zentrales Defensives Mittelfeld)
    var zivPlane = document.getElementById('RIV');
    zivPlane.addEventListener('click', function () {
        console.log("RIV clicked");

        // Bewegen zur Position des RIV mit Animation
        animateCameraToPosition('-11 98.5 -2.2', '50 95 0');
    });

    // Klick-Event für das Element mit der ID "LIV" (Zentrales Defensives Mittelfeld)
    var zivPlane = document.getElementById('LIV');
    zivPlane.addEventListener('click', function () {
        console.log("LIV clicked");

        // Bewegen zur Position des LIV mit Animation
        animateCameraToPosition('-11 98.5 1.6ww', '50 95 0');
    });

});

// Klick-Event für das Element mit der ID "resetPlane" (Neue Plane für Reset)
var resetPlane = document.getElementById('resetPlane');
resetPlane.addEventListener('click', function () {
    console.log("Reset Plane clicked");

    // Animation zur Ursprungsposition mit einer Beispielposition und -rotation
    animateCameraToPosition('-1.01 100 -1.15', '0 95 0');
});

// Funktion zum Animieren der Kamera zu einer bestimmten Position und Rotation
function animateCameraToPosition(position, rotation) {
    cameraEl.setAttribute('animation', {
        property: 'position',
        to: position,
        dur: 1000,  // Dauer der Animation in Millisekunden
        easing: 'easeInOutQuad'  // Animations-Typ
    });

    cameraEl.setAttribute('animation__rotation', {
        property: 'rotation',
        to: rotation,
        dur: 1000,
        easing: 'easeInOutQuad'
    });


    // Logge die Kameradaten nach der Animation
    setTimeout(logCameraData, 1000);
}

