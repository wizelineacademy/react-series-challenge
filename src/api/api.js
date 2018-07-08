
const apiURL = "http://api.giphy.com";
const apiTrends = "/v1/gifs/trending";
const apiSearch = "/v1/gifs/search";
const apiKey = "MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p"

const getData = async() => {
    //console.log("Me ejecuto");
    //return "h1";
    try{
        const response = await fetch(`${apiURL}${apiTrends}?api_key=${apiKey}`)
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
   
}

/*
 const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
*/
export default getData;