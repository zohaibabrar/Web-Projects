//Counter for the current slide
var slideIndex = 0;
showSlides();

/*
To display the images
*/
function showSlides() {
    //Update the index counter everytime the function is called
    slideIndex++;
    
    //Hide all the images and deactivate all the dots
   for(var i=1; i<5; i++){
       document.getElementById("img"+i).style.display="none";
       document.getElementById("dot"+i).className="dot";
   }
    //Reset index if it exceeds the maximum number of images
    if (slideIndex > 4) {
        slideIndex = 1;
    } 
    //Display the current image and activate the corresponding dot
    document.getElementById("img"+slideIndex).style.display= "block";
    document.getElementById("dot"+slideIndex).className += " active";
    
    //Change the image after every second
    setTimeout(showSlides, 2000);
}