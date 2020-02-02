let found = false;

let findLinks = function() {
    let n = document.getElementsByTagName("a");
    let arr = [];
    let sel;
    for (var i = 0; i < n.length; i++) {
      arr[i] = n[i].textContent;
      if (arr[i].toLowerCase().includes("password")) {
        sel = n[i].getAttribute("href");
        found = true;
      }
    }
    if (found) chrome.runtime.sendMessage("found "+sel);
}
findLinks();