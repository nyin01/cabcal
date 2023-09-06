// content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'scrapedData') {
    // Handle the scraped data as needed
    const courseDict = request.data;
    console.log('Scraped Data:', courseDict);
  }
});

