import getSynonyms from "./synonyms";
var input;

let searchTerm = document.getElementById("searchTerm");

chrome.storage.sync.get("term", function(data) {
  searchTerm.setAttribute("value", data.term);
});

searchTerm.onclick = function(element) {
  let term = element.target.value;
  input = document.getElementById("query").value;
  let lst = getSynonyms(input);
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, alert(lst));
  });
};
