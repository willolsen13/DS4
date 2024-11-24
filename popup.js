// window.addEventListener ("load", myMain, false);

// function myMain (evt) {
    
// }

document.addEventListener("DOMContentLoaded", () => {
    const correctImageId = "black_bear"; // Example: correct image ID
    const images = document.querySelectorAll("black");
  
    images.forEach((image) => {
      image.addEventListener("click", () => {
        if (image.id === correctImageId) {
          alert("Correct! You can proceed.");
          window.close(); // Close the popup
        } else {
          alert("Incorrect. Try again!");
        }
      });
    });
  });