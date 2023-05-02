import axios from 'axios';

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key={{key}}
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  //https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key={{key}}
  async #mostPopular() {
    return this.httpClient
      .get('videos', { 
        params : {
          part: 'snippet',
          chart:'mostPopular',
          maxResults: 25,
      }
    })
      .then((res) => res.data.items);
  }
}
