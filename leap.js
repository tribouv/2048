var controllerOptions = {enableGestures: true},
    lastSeen = 0;
Leap.loop(controllerOptions, function(frame) {

  // Display Gesture object data
  if (frame.gestures.length > 0) {
    for (var i = 0; i < frame.gestures.length; i++) {
      var gesture = frame.gestures[i];
      if(gesture.type == "swipe") {
          //Classify swipe as either horizontal or vertical
          var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);


          if(Date.now() - lastSeen > 350) {
            lastSeen = Date.now();


            //console.log(gesture.direction[0]);
            //Classify as right-left or up-down
            if(isHorizontal){
                if(gesture.direction[0] > 0){
                    swipeDirection = "right";
                      MoveRight(); 
                } else {
                    swipeDirection = "left";
                    MoveLeft(); 
                }
            } else { //vertical
                if(gesture.direction[1] > 0){
                    swipeDirection = "up";
                      MoveUp(); 
                } else {
                    swipeDirection = "down";
                      MoveDown(); 
                     
                }                  
            }
          }
            //console.log("fff"+gesture.dipPosition[0]+);
       }
       if(gesture.type == "keyTap") {
         // startGame()
       }

     }
  }

});