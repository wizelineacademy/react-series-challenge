import axios from "axios";

const genericHandler = (options) => {
    const config = {
        method: options.method || 'GET',
        url: options.url,
        data: options.data || null,
      };

      return axios(config).then((res) => {
        return res.data
      });
};


export default genericHandler;

