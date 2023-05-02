import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

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
          {/* Chaneel정보 컴포넌트 */}
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
    </section>
  );
}
