var ball=document.getElementById("ball");
var velocity=100;
var positionX=0;
var reverse=false;
var positionY=0;

function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  let newpositionX;
  let newpositionY;
  var Xmin = 0;
  var Xmax = 300;
  var Ymin=0;
  var Ymax=300;
  if (reverse=false){
      newpositionX=positionX+velocity;
      ball.style.left=newpositionX + "px";

      newpositionY=positionY+velocity;
      ball.style.top=newpositionY+ "px";
  }
  else{
      newpositionX=positionX-velocity;
      ball.style.left=newpositionX + "px";
      
      newpositionY=positionY-velocity;
      ball.style.top=newpositionY+ "px";
  }

  if (newpositionX>=Xmax || newpositionX<=Xmin) {
    reverse=true;
  }
  if (newpositionY>=Ymax || newpositionY<=Ymin) {
    reverse=true;
  }
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
