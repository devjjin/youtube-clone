import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section>
      <article>
        <iframe
          title='title'
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder='0'
        />
        <div>
          <h1>{title}</h1>
          {/* chaneelId를 전달해서 cahnnel정보를 api를 통해 받아와야한다. */}
          <ChannelInfo id={channelId} name={channelTitle} />
          {/* 여백,공백,space적절히 조절해서 렌더링 */}
          <pre>{description}</pre>
        </div>
      </article>
      {/* 연관된 비디오 보여주는 별도 컴포넌트 */}
      <section>
      <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
