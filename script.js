document.addEventListener('DOMContentLoaded', function() {
    const preview = document.getElementById('preview');
    const statusDiv = document.getElementById('status');
    const door = document.querySelector('.door');
    
    // Valid access codes
    const validCodes = ["SECURE123", "ACCESS456", "DOOR789"];
    
    let scanner = new Instascan.Scanner({
        video: preview,
        mirror: false,
        captureImage: false,
        backgroundScan: true
    });
    
    scanner.addListener('scan', function(content) {
        if (validCodes.includes(content)) {
            // Grant access
            statusDiv.textContent = "ACCESS GRANTED";
            statusDiv.className = "status granted";
            door.classList.add('open');
            
            // Reset after 5 seconds
            setTimeout(() => {
                statusDiv.textContent = "Awaiting authorization...";
                statusDiv.className = "status";
                door.classList.remove('open');
            }, 5000);
        } else {
            // Deny access
            statusDiv.textContent = "ACCESS DENIED: Invalid code";
            statusDiv.className = "status denied";
            
            // Reset after 3 seconds
            setTimeout(() => {
                statusDiv.textContent = "Awaiting authorization...";
                statusDiv.className = "status";
            }, 3000);
        }
    });
    
    // Start scanner
    Instascan.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            statusDiv.textContent = "ERROR: No cameras found";
            statusDiv.className = "status denied";
            console.error('No cameras found.');
        }
    }).catch(function(e) {
        statusDiv.textContent = "ERROR: Camera access denied";
        statusDiv.className = "status denied";
        console.error(e);
    });
});
