const url = "https://api.datamuse.com/words?";
const queryParams = "rel_syn=";

export const getSynonyms = searchTerm => {
  const wordQuery = searchTerm;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  // console.log(endpoint);

  fetch(endpoint)
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
      synonymResponse(jsonResponse);
    });
};

const synonymResponse = res => {
  if (!res || !res.length) {
    console.log(res.status);
    return;
  }
  let wordList = [];
  for (let i = 0; i < Math.min(res.length, 5); i++) {
    wordList.push(res[i].word);
  }
  return wordList;
};
