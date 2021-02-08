let active_tab_id = 0;

// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         active_tab_id = tab.tabId;

//         if (current_tab_info.url.includes("healthzon")) {
//             // chrome.tabs.insertCSS(null, { file: 'mystyles.css' });
//             chrome.tabs.executeScript(null, { file: 'jquery.js' }, () => chrome.tabs.executeScript(null, { file: 'foreground.js' }))
//             // chrome.tabs.executeScript(null, { file: 'foreground.js' }, () => console.log('i injected'))
//         }
//     });
// });

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  
      // do your things
      chrome.tabs.get(tabId, current_tab_info => {
        active_tab_id = tabId;

        if (current_tab_info.url.includes("/www.v3healthzone.com/marketing/feedback_check.php")) {
          // alert("No");
            // chrome.tabs.insertCSS(null, { file: 'mystyles.css' });
            chrome.tabs.executeScript(null, { file: 'jquery.js' }, () => chrome.tabs.executeScript(null, { file: 'foreground.js' }))
            // chrome.tabs.executeScript(null, { file: 'foreground.js' }, () => console.log('i injected'))
            // chrome.tabs.create({ url: "https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab", active: false });
        }
        if (current_tab_info.url.includes("/www.v3healthzone.com/marketing/feedback_check1.php")) {
          // alert("yes");
          // chrome.tabs.insertCSS(null, { file: 'mystyles.css' });
          chrome.tabs.executeScript(null, { file: 'jquery.js' }, () => chrome.tabs.executeScript(null, { file: 'foregroundSpl.js' }))
          // chrome.tabs.executeScript(null, { file: 'foreground.js' }, () => console.log('i injected'))
          // alert("success")
      }
    });
  
    }
  });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === 'yo check the storage') {
//         chrome.tabs.sendMessage(active_tab_id, {message: 'yo i got your message'})

//         chrome.storage.local.get("password", value => {
//             console.log(value)
//         });
//     }
// });
