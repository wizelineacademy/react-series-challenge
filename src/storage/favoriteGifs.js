
export const getFavoriteGifs = ({offset = 1, count = 25, q = ''}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {data:[], pagination: {offset, count, total_count: 0, pages: 0}};
      let allData = null;

      try {
        allData = localStorage.getItem('favoriteGifs') !== null 
          ? JSON.parse(localStorage.getItem('favoriteGifs')) : [];
      } catch (error) {
        allData = [];
      }
      
      if (allData.length === 0) {
        localStorage.setItem('favoriteGifs', JSON.stringify([]))
      } else if (q !== '') {
        allData = allData.filter(d => d.title.toLowerCase().indexOf(q.toLowerCase()) !== -1);
      }
      
      const start =  (offset - 1) * count;

      response.data = allData.length === 0 ? [] : allData.slice(start, start + count)
      response.pagination.total_count = allData.length;
      response.pagination.pages = allData.length === 0 ? 0 : Math.ceil(allData.length / count);
      
      resolve(response);
    });
  });
};



export const addFavoriteGif = (gif) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let allData = null;

      try {
        allData = localStorage.getItem('favoriteGifs') !== null 
          ? JSON.parse(localStorage.getItem('favoriteGifs')) : [];
      } catch (error) {
        allData = [];
      }

      if (allData.length === 0) {
        localStorage.setItem('favoriteGifs', JSON.stringify([]))
      }
      
      try {
        allData = allData.filter(d => d.id !== gif.id);
        allData.unshift(gif);
        localStorage.setItem('favoriteGifs', JSON.stringify(allData))
      } catch (error) {
        reject(error)
      }
      
      resolve(gif);
    });
  });
};
