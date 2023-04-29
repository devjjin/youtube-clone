import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams(); // 검색키워드
  return <div>Videos {keyword ? `🔍{keyword}` : '🔥'} </div>;
}
