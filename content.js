document.addEventListener("focusin", (event) => {
  if (event.target.tagName === "INPUT" && event.target.type === "password") {
    console.log("Password field detected"); // Debugging
    chrome.runtime.sendMessage({ action: "passwordFieldDetected" });
  }
});