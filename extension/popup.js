let searchTerm = document.getElementById("searchTerm");

chrome.storage.sync.get("term", function(data) {
  searchTerm.setAttribute("value", data.term);
});

searchTerm.onclick = function(element) {
  getSynonyms(document.getElementById("query").value, str => {
    alert(str);
  });
  alert(findTheLinks());
};
