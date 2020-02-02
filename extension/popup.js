var input;

let searchTerm = document.getElementById("searchTerm");

chrome.storage.sync.get("term", function(data) {
  searchTerm.setAttribute("value", data.term);
});

searchTerm.onclick = function(element) {
  let q = document.getElementById("query").value;
  chrome.runtime.sendMessage("query:"+q);
  getSynonyms(q, str => {
    alert(str);
  });
};
