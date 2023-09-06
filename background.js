// Listen for the extension button click event
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the content script to request the current page's HTML
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: scrapeHTML
  });
});

function scrapeHTML() {
  const courseDict = {};

  const courseAttributes = document.querySelectorAll('.result__link');

  courseAttributes.forEach(course => {
    const courseTitle = course.getAttribute('data-group').substring(5);
    const courseSection = course.getElementsByClassName('result__flex--3')[0].textContent.substring(16);
    const maybeCourseTimes = course.getElementsByClassName('flex--grow');
    const courseTime = Array.from(maybeCourseTimes)[maybeCourseTimes.length - 1].textContent.substring(7);
    courseDict[courseTitle + ' ' + courseSection] = courseTime;
  });

  // Send the scraped data back to the background script
  chrome.runtime.sendMessage({ action: 'scrapedData', data: courseDict });
}
