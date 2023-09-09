chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, 'parse');
});

chrome.action.onClicked.addListener((tab) => {
  chrome.identity.getAuthToken({}, (token) => {
    if (!chrome.runtime.lastError && token) {
      // console.log('User already authenticated:', token);
      chrome.tabs.sendMessage(tab.id, 'authed');
      // authenticate();
    } else {
      chrome.tabs.sendMessage(tab.id, 'not authed');
      authenticate();
    }
  });
});


// Function to handle OAuth2.0 authentication
function authenticate() {
  chrome.identity.getAuthToken({ interactive: true }, async (token) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }

    // Use the obtained access token for API requests
    const calendarAPI = 'https://www.googleapis.com/calendar/v3';

    // Example: Fetch the user's calendar list
    const calendarListResponse = await fetch(`${calendarAPI}/users/me/calendarList`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (calendarListResponse.status === 200) {
      const calendarListData = await calendarListResponse.json();
      // console.log("User's Calendar List:", calendarListData);
      chrome.tabs.sendMessage(calendarListData, 'data');
    } else {
      console.error('Failed to fetch calendar list:', calendarListResponse.statusText);
    }
  });
}

