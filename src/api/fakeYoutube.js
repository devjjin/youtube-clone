import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    // 클래스내의 멤버함수를 호출 ,#붙이면 private(클래스 내부에서만 호출 가능, 외부는 호출x)
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios
    .get(`/videos/popular.json`)
    .then((res) => res.data.items);
  }
}
