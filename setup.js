document.addEventListener('DOMContentLoaded', () => {
    async function checkFirstRun() {
      const data = await new Promise((resolve) => {
          chrome.storage.local.get(['isFirstRun'], (data) => {
              resolve(data);
          });
      });
      if (data.isFirstRun === true) {
          // First run setup (if isFirstRun is not defined in storage)
          isFirst = true;
          // Mark the first run as completed
          chrome.storage.local.set({ isFirstRun: false });
      } else {
          // Subsequent runs
          isFirst = false;
      }
  
      console.log(isFirst);  // Check the result
      return isFirst

  }
  
  checkFirstRun().then((isFirst) => {
    console.log(isFirst)
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
  document.addEventListener('DOMContentLoaded', () => {
    if (isFirst) {
      document.getElementById("header").textContent = "Set Password";
      document.getElementById("submit").textContent = "Set Password";
    }
  });
  
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
    if (isFirst) {
      chrome.storage.local.set({ 'password': parts }, () => {
        alert('Password set successfully!');
        window.close();
      });
    } else {
      chrome.storage.local.get(['password'], (data) => {
        if (data.password == parts) {
          alert('Password inputted successfully!');
          window.close();
        } else {
          alert('Incorrect password. Try again.');
        }
      });
    }
  });
});
});