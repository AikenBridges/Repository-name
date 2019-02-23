var c1 = document.getElementById("Canvas1");
var ctx1 = c1.getContext("2d");

var H1 = new Image();
var H2 = new Image();
var H3 = new Image();

ctx1.beginPath();
ctx1.moveTo(0,500)
ctx1.lineTo(1000,500)
ctx1.lineTo(1000,800)
ctx1.lineTo(0,800)
ctx1.closePath();
ctx1.strokeStyle = "navy";
ctx1.stroke();
ctx1.fillStyle = "navy";
ctx1.fill();

ctx1.beginPath();
ctx1.arc(150, 150, 60, 0, 2 * Math.PI);
ctx1.closePath();
ctx1.strokeStyle = "lightgrey";
ctx1.stroke();
ctx1.fillStyle = "orange";
ctx1.fill();

WebFontConfig = {
      typekit: { id: 'xxxxxx' }
   };

   (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      s.parentNode.insertBefore(wf, s);
  })(document);

ctx1.font = "80px Trebuchet MS"
ctx1.fillStyle = "grey";
ctx1.fillText("Something", 250, 180)