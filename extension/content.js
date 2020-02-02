let found = false;
let search = "XXXXXXXXXX";

let findLinks = function() {
  chrome.storage.sync.get('query', function(data) {
    search = data.toString();
  });
  alert(search);
    let n = document.getElementsByTagName("a");
    let arr = [];
    let sel;
    for (var i = 0; i < n.length; i++) {
      arr[i] = n[i].textContent;
      if (arr[i].toLowerCase().includes(search)) {
        sel = n[i].getAttribute("href");
        found = true;
      }
    }
    if (found) chrome.runtime.sendMessage("found:"+sel);
}
findLinks();