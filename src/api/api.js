
const apiURL = "http://api.giphy.com";
const apiTrends = "/v1/gifs/trending";
const apiSearch = "/v1/gifs/search";
const apiKey = "MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p"

const getDataTrend = async() => {
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

const getDataSearch = async(value) => {
  //console.log("Me ejecuto");
  //return "h1";
  console.log("Valor del fetch", value);
  try{
      const response = await fetch(`${apiURL}${apiSearch}?api_key=${apiKey}&q=${value}`)
      const data = await response.json();
      return data;
  } catch(e) {
      console.log(e);
  }

/*
  const { searchValue } = this.state;
        fetch(`${apiURL}${apiSearch}?api_key=${apiKey}&q=${searchValue}`)
        .then(Response => {
                return Response.json().then( (json) => {
                    //console.log(Object.keys(json.data).length);
                    var newArray = [];
                    var newObject = {};
                    
                    for(var a = 0; a <= Object.keys(json.data).length - 1; a++){
                        newObject = {};
                        newObject.id = json.data[a].id;
                        newObject.url = json.data[a].images.downsized.url;
                        newArray.push(newObject);
                    }
                    this.setState({ gifs: newArray });
                }
            )
        })*/
 
}

export {
  getDataTrend, 
  getDataSearch,
};