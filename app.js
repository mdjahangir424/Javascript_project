window.onload = function () {
 var canvas = document.getElementById("canvas");
 var context = canvas.getContext("2d");
 var img = new Image();
 img.src = "/img/bg2.webp";
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

  context.linewidth = 2;
  context.font = '40px sans-serif';
  context.strokeStyle = "black";
  context.fillStyle = "white";
  context.fillText("Canvas is Great!", 60, 375);
  context.shadowoffsetX = 10;
  context.shadowoffsetY = 5;
  context.shadowColor = "rgba (0,48,48,0,5)";
  context.shadowBlur = 5;
  context.strokeText("Canvas is Great!", 60, 375);

 }
}