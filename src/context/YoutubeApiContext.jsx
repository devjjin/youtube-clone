import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';
// import FakeYoutubeClient from '../api/fakeYoutubeClient';

export const YoutubeApiContext = createContext();

// mock데이터,실제api client를 스위칭하면서 테스트
// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{youtube}}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}