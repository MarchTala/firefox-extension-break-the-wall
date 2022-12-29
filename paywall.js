function getURL() {
   browser.tabs.query({
      active: true,
      lastFocusedWindow: true
   }, function (tabs) {
      var tab = tabs[0];
      url = tab.url;
      console.log('tab: ' + tab);
      console.log('tab: ' + url);
      
      removePaywall(url);
   });
}

function removePaywall(url) {
   console.log('inside remove paywall');
   var proxy = 'https://12ft.io/proxy?&q=';
   var url = proxy + url;
   browser.tabs.create({ url: url });
}

browser.browserAction.onClicked.addListener(getURL);