import Service from './base/service';

/**
 * Service class to interoperate with the GIFS Api of GIPHY
 *
 * @extends Service
 */
export class GIF extends Service {
  constructor () {
    super();
    this.search = this.search.bind(this);
    this.getByID = this.getByID.bind(this);
  }

  /**
   * @inheritdoc Service#getData
   */
  getData (subUri = '', options = {}) {
    return super.getData(`gifs${subUri ? '/' + subUri : ''}`, options);
  }

  /**
   * Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.
   * Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.
   * 
   * @param {object} filters Parameters supported by GIPHY Api
   * @param {string} filters.q Search query term or phrase.
   * @param {number} filters.limit The maximum number of records to return (default:"25").
   * @param {number} filters.offset An optional results offset. Defaults to 0.
   * @param {string} filters.rating Filters results by specified rating.
   * @param {string} filters.lang
   *  Specify default language for regional content;
   *  use a 2-letter ISO 639-1 language code. 
   *  See list of supported language:
   *    {@link https://developers.giphy.com/docs/#language-support|view}
   * @returns {Promise<Object>} Promise with the Api Request
   */
  search (queryString = {
    q: null,
    limit: 25,
    offset: 0,
    rating: null,
    lang: 'en'
  }) {
    return this.getData('search', { queryString });
  }

  /**
   * Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.
   * The data returned mirrors the GIFs showcased on the GIPHY homepage.
   * Returns 25 results by default.
   * 
   * @param {object} filters Parameters supported by GIPHY Api
   * @param {number} filters.limit The maximum number of records to return (default:"25").
   * @param {number} filters.offset An optional results offset. Defaults to 0.
   * @param {string} filters.rating Filters results by specified rating.
   * @returns {Promise<Object>} Promise with the Api Request
   */
  trending (queryString = {
    limit: 25,
    offset: 0,
    rating: null
  }) {
    return this.getData('trending', { queryString });
  }

  /**
   * Method responsible of getting gif data by its id
   *
   * @param {number} id GIF ID
   * @return {Promise<Object>} Promise with the Api Request
   */
  getByID (id) {
    return this.getData(`${id}/`);
  }
}

// objeto para exportarlo por default
const gif = new GIF();

export default gif;
