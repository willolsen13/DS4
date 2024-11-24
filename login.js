document.addEventListener('DOMContentLoaded', () => {
    const parts = {
        //<emotion>: happy, neutral, sad, mad, or tired\n
        //<animal>: <color> bunny, cat, dog, or bear\n
        //<top>: <color> tshirt, sweater, hoodie, suit, dress, or blank (if you do not want a top)\n
        //<bottom>: <color> pants, shorts, skirt, or blank (if you do not want a bottom)\n
        //<shoes>: <color> sneakers, cowboy boots, combat boots, heels, slippers, or blank (if you do not want shoes)\n
        //<accessory>: <color> flower, star, glasses, sunglasses, scarf, gloves, or blank (if you do not want an accessory)\n
        //<color>: red, orange, yellow, green, blue, purple, pink, white, black, or brown\n
        emotion: null,
        animalColor: null,
        animal: null,
        topColor: null,
        top: null,
        bottomColor: null,
        bottom: null,
        shoesColor: null,
        shoes: null,
        accessoryColor: null,
        accessory: null,
        // Add other parts here...
      };
      
      const preview = document.getElementById('character-preview');
      const form = document.getElementById('password-form');
      
      function updateCharacterPreview() {
        console.log(parts); // Check the current state of the parts object
        console.log(parts.emotion); // Ensure this is a string like "happy"
        preview.innerHTML = ''; // Clear current layers
        if (parts.animal && parts.animalColor && parts.animal != "blank" && parts.animalColor != "blank") {
            const animalImg = document.createElement('img');
            animalImg.src = `charImages/${parts.animalColor}_${parts.animal}.png`; // Example: `images/cat.png`
            animalImg.className = 'character-layer';
            preview.appendChild(animalImg);
          }
        if (parts.emotion && parts.emotion != "blank") {
            const emotionImg = document.createElement('img');
            emotionImg.src = `charImages/${parts.emotion}.png`; // Example: `images/cat.png`
            emotionImg.className = 'character-layer';
            preview.appendChild(emotionImg);
          }
        if (parts.bottom && parts.bottomColor && parts.bottom != "blank" && parts.bottomColor != "blank") {
            const bottomImg = document.createElement('img');
            bottomImg.src = `charImages/${parts.bottomColor}_${parts.bottom}.png`; // Example: `images/cat.png`
            bottomImg.className = 'character-layer';
            preview.appendChild(bottomImg);
          }
        if (parts.top && parts.topColor && parts.top != "blank" && parts.topColor != "blank") {
            const topImg = document.createElement('img');
            topImg.src = `charImages/${parts.topColor}_${parts.top}.png`; // Example: `images/cat.png`
            topImg.className = 'character-layer';
            preview.appendChild(topImg);
          }
        if (parts.shoes && parts.shoesColor && parts.shoes != "blank" && parts.shoesColor != "blank") {
            const shoesImg = document.createElement('img');
            shoesImg.src = `charImages/${parts.shoesColor}_${parts.shoes}.png`; // Example: `images/cat.png`
            shoesImg.className = 'character-layer';
            preview.appendChild(shoesImg);
          }
        if (parts.accessory && parts.accessoryColor && parts.accessory != "blank" && parts.accessoryColor != "blank") {
            const accessoryImg = document.createElement('img');
            accessoryImg.src = `charImages/${parts.accessoryColor}_${parts.accessory}.png`; // Example: `images/cat.png`
            accessoryImg.className = 'character-layer';
            preview.appendChild(accessoryImg);
          }
      }
      
      // Handle dropdown changes
      Object.keys(parts).forEach((part) => {
        document.getElementById(part).addEventListener('change', (event) => {
          parts[part] = event.target.value;
          updateCharacterPreview();
        });
      });
      
      // Handle form submission
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        storedPass = chrome.storage.local.get('password', (data) => {
          if (storedPass == parts) {
            alert('Password input successfully!');
            window.close();
          }
          else {
            alert('Password input unsuccessfully! Try again!');
          }
        })
    });
});