const serialize = params => {
    return Object.keys(params)
      .filter(key => params[key])
      .map(key => `${key}=${params[key]}`)
      .join("&");
  };
  
  export default serialize;