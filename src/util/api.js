export const fetchSearchGifs = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL+"search?api_key=" + process.env.REACT_APP_API_KEY +"&q=pato&limit=25&offset=0&rating=G&lang=en");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };  

  export const fetchTrendingGifs = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL+"trending?api_key=" + process.env.REACT_APP_API_KEY +"&limit=25&rating=G");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };  