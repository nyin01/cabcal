// content.js
let courseDict = {};
// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

 
  console.log(message);

  if (message === "parse") {
    // TODO: select the children. This is the css selector for the parents
    // let courses = document.querySelectorAll("body > main > div.panel.panel--kind-results.panel--visible.cart.cart--primary > div > div.panel__body > *");
    const courses = document.querySelectorAll('.result__link');
    if (courses.length == 0) {
      console.log("You gotta click on primary cart first")
    } else {
      courses.forEach((course) => {
        console.log(course);
        const courseTitle = course.getAttribute('data-group').substring(5)
        // console.log(courseTitle)
        const courseSection = course.getElementsByClassName('result__flex--3')[0].textContent.substring(16)
        // console.log(courseSection)
        const maybeCourseTimes = course.getElementsByClassName('flex--grow')
        const courseTime = Array.from(maybeCourseTimes)[maybeCourseTimes.length - 1].textContent.substring(7)
        if (courseTime != 'TBA') {
          const daysTimesSplit = courseTime.split(' ')
          // console.log(daysTimesSplit)
          courseDict[courseTitle + ' ' + courseSection] = daysTimesSplit
        }
      })
      // console.log("parsed: ", courseDict)

    }
    
  }

  if (message === "authed") {
    console.log("dict: ", courseDict)
    // console.log(sender)
    // console.log(sendResponse)
  }

  if (message === "not authed") {
    console.log("not authed")
  }


  if (message === "data") {
    console.log(sender)
  }


});



