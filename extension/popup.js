const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "your-rapid-api-key",
    "x-rapidapi-host": "malicious-scanner.p.rapidapi.com",
  },
};

async function isSafe(url) {
  const absoluteUrl = `https://malicious-scanner.p.rapidapi.com/rapid/url?url=${url}`;
  try {
    const response = await fetch(absoluteUrl, options);
    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (error) {
    console.log("Error Checking Url: ", error);
    throw error;
  }
}

async function checkCurrentUrl() {
  const statusElement = document.getElementById("status");
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    const url = tab.url;
    const response = await isSafe(url);
    const safe = response?.status == "Malicious" ? false : true;

    statusElement.className = safe ? "status-safe" : "status-unsafe";
    statusElement.innerHTML = safe
      ? `<h3>✓ Safe Website</h3><p>${response.message}.</p>`
      : `<h3>⚠️ Warning</h3><p>${response.message}.<br>The website is flagged as ${response.category}.<br>Proceed with caution.</p>`;
  } catch (error) {
    statusElement.className = "status-unsafe";
    statusElement.innerHTML =
      "<h3>Error</h3><p>Unavailable to check website safety</p>";
  }
}

document.addEventListener("DOMContentLoaded", checkCurrentUrl);
