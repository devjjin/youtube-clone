export default class Youtube {
  constructor(apiClinent) {
    this.apiClinent = apiClinent;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key={{key}}
    return this.apiClinent
      .search({
        // params에 관련된 객체들을 모두 이렇게 정의해준다.
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
    return this.apiClinent
      .videos({
        params : {
          part: 'snippet',
          chart:'mostPopular',
          maxResults: 25,
      }
    })
      .then((res) => res.data.items);
  }
}
