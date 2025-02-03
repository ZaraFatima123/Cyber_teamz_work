chrome.webNavigation.onCompleted.addListener(
  (details) => {
    if (details.url) {
      chrome.storage.local.get({ visitedSites: [] }, (data) => {
        let visitedSites = data.visitedSites;
        visitedSites.unshift(details.url);
        chrome.storage.local.set({ visitedSites: visitedSites.slice(0, 10) });
      });
    }
  },
  { url: [{ schemes: ["http", "https"] }] }
);
