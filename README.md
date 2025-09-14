# qr-code-reader
QR Code Security Scanner 🚪🔒
A web-based security door access system that uses QR code scanning to grant or deny entry. Features a realistic door animation that slides open when valid QR codes are scanned.

Features
🎥 Real-time QR code scanning using webcam

🚪 Animated door that opens on successful access

🟢 Visual feedback (green for granted, red for denied)

🔐 Pre-defined valid access codes

📱 Responsive design

⚡ Automatic reset after access attempts

Valid Access Codes
The system accepts these QR code contents:

SECURE123

ACCESS456

DOOR789

Setup Instructions
Option 1: VS Code Setup (Recommended)
Prerequisites
VS Code

Live Server Extension

Installation Steps
Create Project Folder

bash
mkdir qr-scanner-project
cd qr-scanner-project
Create the three required files:

index.html (copy the HTML code)

styles.css (copy the CSS code)

script.js (copy the JavaScript code)

Install Live Server Extension in VS Code:

Open VS Code → Extensions (Ctrl+Shift+X)

Search for "Live Server" by Ritwick Dey

Click Install

Run the Project:

Right-click on index.html

Select "Open with Live Server"

Browser will open at http://127.0.0.1:5500

Test the Application:

Allow camera access when prompted

Generate QR codes with valid codes using any QR generator

Scan them with your webcam

Option 2: CodePen Setup
Steps for CodePen
Create a new Pen at CodePen.io

HTML Section - Paste the HTML code:

html
<!-- Copy the entire HTML code here -->
CSS Section - Paste the CSS code:

css
/* Copy the entire CSS code here */
JS Section - Paste the JavaScript code:

javascript
// Copy the entire JavaScript code here
External Resources Setup:

Go to Pen Settings → JavaScript

Add External Script: https://cdn.jsdelivr.net/gh/schmich/instascan-builds@master/instascan.min.js

Set "Load Type" to head

Run in Debug Mode (for camera access):

Click "Change View" → "Debug Mode"

Allow camera permissions when prompted

File Structure
text
qr-scanner-project/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
└── script.js           # JavaScript functionality
Troubleshooting
Common Issues & Solutions
Camera Not Working:

Ensure you're using HTTPS (CodePen) or localhost (VS Code)

Check browser camera permissions

Try Chrome or Firefox if Safari has issues

Live Server Not Starting:

Make sure you opened the folder in VS Code, not just the file

Verify Live Server extension is installed and enabled

QR Codes Not Scanning:

Ensure good lighting and camera focus

Use high-contrast QR codes

Test with valid codes: "SECURE123", "ACCESS456", "DOOR789"

CodePen Camera Access:

Use "Debug Mode" for better camera permission handling

Some browsers restrict camera access in embedded iframes

Browser Compatibility
✅ Chrome (recommended)

✅ Firefox

⚠️ Safari (may have camera permission issues)

✅ Edge

How to Generate Test QR Codes
Visit QR Code Generator

Enter one of the valid codes: SECURE123, ACCESS456, or DOOR789

Download or screenshot the QR code

Scan it with your webcam

Technology Stack
HTML5 - Structure and semantic markup

CSS3 - Styling and animations

JavaScript - Application logic

Instascan Library - QR code scanning

Webcam API - Camera access

Development
To modify the valid access codes, edit the validCodes array in script.js:

javascript
const validCodes = ["YOUR_CODE_1", "YOUR_CODE_2", "YOUR_CODE_3"];
License
This project is open source and available under the MIT License.

Support
If you encounter issues:

Check browser console for errors (F12)

Verify camera permissions are granted

Ensure you're using a supported browser

Test with different QR code generators

Note: For production use, consider adding proper security measures like encrypted QR codes and server-side validation.
