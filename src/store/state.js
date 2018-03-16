const cacheName = 'challengeState';

const load = () => {
  try {
    const cache = localStorage.getItem(cacheName);
    if (!cache)
      return {};

    return JSON.parse(cache);
  } catch (err) {
    console.log('Error on Load State!', err);
    return {};
  }
};

const save = state => {
  try {
    let cache = JSON.stringify(state);
    localStorage.setItem(cacheName, cache);
  } catch (err) {
    console.log('Error on Save State!', err);

  }
};

export default { load, save };
