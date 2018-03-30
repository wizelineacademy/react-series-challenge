export function getTrendingGifs(filter) {
  const { limit, offset, fmt } = filter;
  return new Promise((resolve, reject) => {
    return fetch(
      `${process.env.REACT_APP_GIPHY_API_URL}trending?api_key=${
        process.env.REACT_APP_GIPHY_API_KEY
      }&limit=${limit}&offset=${offset}&fmt=${fmt}`
    )
      .then(response => {
        if (!response.ok) {
          return response.json();
        } else {
          return response.json();
        }
      })
      .then(resolvedAnswer => {
        if (resolvedAnswer.error) reject(resolvedAnswer);
        resolve(resolvedAnswer);
      })
      .catch(res => {
        reject(res);
      });
  });
}

export function searchGif(search) {
  return new Promise((resolve, reject) => {
    return fetch(
      `${process.env.REACT_APP_GIPHY_API_URL}search?api_key=${
        process.env.REACT_APP_GIPHY_API_KEY
      }&q=${search}&limit=20&lang=eng&fmt=json`
    )
      .then(response => {
        if (!response.ok) {
          return response.json();
        } else {
          return response.json();
        }
      })
      .then(resolvedAnswer => {
        if (resolvedAnswer.error) reject(resolvedAnswer);
        resolve(resolvedAnswer);
      })
      .catch(res => {
        reject(res);
      });
  });
}
