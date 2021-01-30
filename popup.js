function hello() {
  chrome.tabs.executeScript(null, { file: 'jquery.js' }, () => chrome.tabs.executeScript(null, { file: 'foreground.js' }))
}

document.getElementById('clickme').addEventListener('click', hello);
