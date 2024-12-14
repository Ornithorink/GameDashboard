async function getHLTBGameID(game){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.howlongtobeat.com/?q=${game}`) // Replace with the target URL
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // Or response.json() for JSON data
      })
      .then(data => {
        console.log(data); // Process the data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}
