const parts = {
    //<emotion>: happy, neutral, sad, mad, or tired\n
    //<animal>: <color> bunny, cat, dog, or bear\n
    //<top>: <color> tshirt, sweater, hoodie, suit, dress, or blank (if you do not want a top)\n
    //<bottom>: <color> pants, shorts, skirt, or blank (if you do not want a bottom)\n
    //<shoes>: <color> sneakers, cowboy boots, combat boots, heels, slippers, or blank (if you do not want shoes)\n
    //<accessory>: <color> flower, star, glasses, sunglasses, scarf, gloves, or blank (if you do not want an accessory)\n
    //<color>: red, orange, yellow, green, blue, purple, pink, white, black, or brown\n
    emotion: null,
    animal: null,
    top: null,
    bottom: null,
    shoes: null,
    accessory: null,
    // Add other parts here...
  };
  
  const preview = document.getElementById('character-preview');
  const form = document.getElementById('password-form');
  
  function updateCharacterPreview() {
    preview.innerHTML = ''; // Clear current layers
    Object.keys(parts).forEach((part) => {
      if (parts[part]) {
        const img = document.createElement('img');
        img.src = `charImages/${parts[part]}.png`; // Example: `images/cat.png`
        img.className = 'character-layer';
        preview.appendChild(img);
      }
    });
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
    chrome.storage.local.set({ password: parts }, () => {
      alert('Password set successfully!');
      window.close();
    });
  });