

// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('parseButton').addEventListener('click', function() {
//     // Send a message to the content script to request the current page's HTML
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       const activeTab = tabs[0];
//       chrome.scripting.executeScript({
//         target: { tabId: activeTab.id },
//         function: scrapeHTML
//       });
//     });
//   });
// });


// function scrapeHTML() {

//     let courseDict = {}

//     const courseAttributes = document.querySelectorAll('.result__link'); // Replace 'your-selector' with the appropriate CSS selector for your element

//     console.log(courseAttributes.length)
//     console.log(courseAttributes[8])
//     console.log(courseAttributes[9])

//     courseAttributes.forEach(course => {
//         const courseTitle = course.getAttribute('data-group').substring(5)
//         // console.log(courseTitle)
//         const courseSection = course.getElementsByClassName('result__flex--3')[0].textContent.substring(16)
//         // console.log(courseSection)
//         const maybeCourseTimes = course.getElementsByClassName('flex--grow')
//         const courseTime = Array.from(maybeCourseTimes)[maybeCourseTimes.length - 1].textContent.substring(7)
//         // console.log(courseTime)
//         courseDict[courseTitle + ' ' + courseSection] = courseTime
//     });

//     console.log(courseDict)

// }


