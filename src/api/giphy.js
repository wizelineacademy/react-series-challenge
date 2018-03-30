export const loadTrending = async () => {
    console.log('[API] Loading trending gifs...');
    try {
        const response = await fetch("http://api.giphy.com/v1/gifs/trending?api_key=T2bHbUrCJlUkHs2BZfX5vYIce5WlT1FX");
        const data = await response.json();
        //console.log(data.data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const loadSearch = async (queryStr) => {
  console.log('[API] Searching gifs..., query srt: '+queryStr);
  try{
    const url = 'http://api.giphy.com/v1/gifs/search?q='+queryStr+'&api_key=T2bHbUrCJlUkHs2BZfX5vYIce5WlT1FX';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
