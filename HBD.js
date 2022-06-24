var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var block_image_height="30";
 var block_image_width="30";

 function new_image()
 {
     fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
 
         block_image_object = Img;
 
         block_image_object.scaleToWidth(block_image_width);
         block_image_object.scaleToHeight(block_image_height);
         block_image_object.set({
 
         top:player_y,
         left:player_x
         });
     canvas.add(block_image_object);
 
     });
 }

function playSound(){
	x.play();
}

