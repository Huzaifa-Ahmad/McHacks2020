let url = "https://api.datamuse.com/words?";
let queryParams = "rel_syn=";

const getSynonyms = (searchTerm, callback) => {
  let wordQuery = searchTerm;
  let endpoint = `${url}${queryParams}${wordQuery}`;
  console.log(endpoint);

  fetch(endpoint, { cache: "no-cache" })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request Failed!");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(jsonResponse => {
      callback(synonymResponse(jsonResponse));
    });
};

let synonymResponse = jsonResponse => {
  if (!jsonResponse || !jsonResponse.length) {
    console.log("failed");
    console.log(jsonResponse.status);
    return;
  }
  let wordList = [];
  console.log("Hello");
  console.log(jsonResponse.length);
  for (let i = 0; i < Math.min(jsonResponse.length, 5); i++) {
    wordList.push(jsonResponse[i].word);
  }
  return wordList.join(" ");
};
