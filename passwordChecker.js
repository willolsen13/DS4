function monitorPasswordFields() {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    console.log(passwordFields)
    if (passwordFields.length > 0) {
        const iframe = document.createElement('iframe');
        iframe.src = chrome.runtime.getURL('setup.html');
        iframe.style.position = 'fixed';
        iframe.style.left = '50%';
        iframe.style.top = '50%';
        iframe.style.transform = 'translate(-50%, -50%)'
        iframe.style.width = '80vw';
        iframe.style.height = '80vh';
        iframe.style.border = '1px solid #ccc';
        iframe.style.zIndex = '100000000000';
        iframe.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        iframe.style.background = 'white';
        document.body.appendChild(iframe);
        window.addEventListener('message', (event) => {
            // Ensure the message is from your iframe
            if (event.origin === chrome.runtime.getURL('').slice(0, -1)) {
              if (event.data === 'hideIframe') {
                iframe.style.visibility = 'hidden';
              }
            }
          });
    }
  }
monitorPasswordFields();