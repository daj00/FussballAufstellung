var cameraEl = document.querySelector('#camera');
var spielfeld = document.querySelector('#spielfeld');

logCameraData();

// Loggt die Position und Rotation in der Konsole
function logCameraData() {
    var position = cameraEl.getAttribute('position');
    var rotation = cameraEl.getAttribute('rotation');
    var positionSp = spielfeld.getAttribute('position');
    var rotationSp = spielfeld.getAttribute('rotation');
    console.log('Position:', position);
    console.log('Rotation:', rotation);
   // console.log('PositionSP', positionSp);
     //   console.log('RoatationSP', rotationSp);

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
        case 'd':
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

        

    var twPlane = document.getElementById('TW');
    twPlane.addEventListener('click', function () {
        console.log("TW clicked");
        

        // Zoomen (Beispiel: Setze die Kameraposition näher an den TW)
        cameraEl.setAttribute('position', '-1.5  100 -1.1');
        cameraEl.setAttribute('rotation', '0 95 0');
       //cameraEl.setAttribute('position', '-1.01 100 -1.15', 'rotation', ' 0 95 0');
        
        logCameraData();
    });
    
})