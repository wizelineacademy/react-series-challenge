export const fetchData = async () => {
    try {
      //const response = await fetch("https://randomuser.me/api");
      const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=SA3WrTOcAq5bNF9hsWC4Z8j0O1UkOMuB&limit=25&rating=G");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  