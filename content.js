document.addEventListener("focusin", (event) => {
    if (event.target.type === "password") {
      chrome.runtime.sendMessage({ action: "showPopup" });
    }
  });