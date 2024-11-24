document.addEventListener("DOMContentLoaded", () => {
    const correctImageId = "img3"; // Define the correct option
    const images = document.querySelectorAll("img");
  
    images.forEach((image) => {
      image.addEventListener("click", () => {
        if (image.id === correctImageId) {
          alert("Correct! You can proceed.");
          window.close(); // Close the popup
        } else {
          alert("Incorrect. Try again.");
        }
      });
    });
  });
  