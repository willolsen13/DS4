chrome.runtime.onInstalled.addListener(() => {
    // Initialize the state if not already set

    chrome.storage.local.get('isFirstRun', (data) => {
        if (data.isFirstRun === undefined) {
            // Mark this as the first run
            chrome.storage.local.set({ isFirstRun: true });
        }
    });
});

chrome.action.onClicked.addListener(() => {
    console.log("Clicked")
    chrome.storage.local.get(['isFirstRun'], (data) => {
        console.log(data.isFirstRun)
        if (data.isFirstRun) {
            // Open the setup popup on the first run
            chrome.action.setPopup({ popup: 'setup.html' });

            // Mark setup as completed after showing it once
            chrome.storage.local.set({ isFirstRun: false });
        } else {
            // Open the login popup on subsequent runs
            chrome.action.setPopup({ popup: 'login.html' });
        }
    });
});