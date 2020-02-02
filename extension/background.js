chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#000000'}, function() {
      console.log("The color is black.");
    });
    chrome.storage.sync.set({query: '#000000'}, function() {
      console.log("The query is black.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            //pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.runtime.onMessage.addListener(function(message){
  if (message.includes("found")) {
    var url = message.replace("found:","");
    chrome.tabs.create({ url: url });
  }
  if (message.includes("query")) {
    var q = message.replace("query:", "");
    chrome.storage.sync.set({query: q}, function() {
      alert("The query is " + q);
    });
  }
});