import React from 'react';
import {formatAgo} from '../util/date';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
        {/* 한국어 표기 */}
        {/* <p>{formatAgo(publishedAt, 'ko')}</p> */} 
      </div>
    </li>
  );
}
