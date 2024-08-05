window.onload = function () {
 var canvas = document.getElementById("canvas");
 var context = canvas.getContext("2d");
 var img = new Image();
 img.src = "/img/logo.png";
 img.onload = function () {
  context.linewidth = 5;
  context.drawImage(img, 0, 0, 400, 400);
  context.beginPath();
  context.linewidth = 5;
  context.fillStyle = "orange";
  context.strokeStyle = "black";
  context.rect(50, 340, 300, 50);
  context.fill();
  context.stroke();
  
 }
}