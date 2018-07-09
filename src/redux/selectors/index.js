// FETCH
const fetch_data = state => state.fetch.data;
const fetch_word = state => state.fetch.word;

// LOCAL
const local = state => state.local;
const local_ids = state => state.local.ids;
const local_likes = state => state.local.likes;


export default {
  fetch_data,
  fetch_word,
  local,
  local_ids,
  local_likes,
}