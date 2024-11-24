chrome.runtime.onInstalled.addListener(() => {
    // Initialize password storage if not already set
    chrome.storage.local.get('password', (data) => {
        if (!data.password) {
            chrome.storage.local.set({ isFirstRun: true });
        }
    });
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "showPopup") {
      chrome.action.openPopup();
    }
});

chrome.action.onClicked.addListener(() => {
    chrome.storage.local.get('isFirstRun', (data) => {
        const popup = data.isFirstRun ? 'setup.html' : 'login.html';
        chrome.action.setPopup({ popup });
    });
});