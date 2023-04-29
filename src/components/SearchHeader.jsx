import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(text);
    e.preventDefault();
    navigate(`/videos/${text}`); // 검색키워드 경로로 이동
  };
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);
  return (
    <header>
      <div>
        <Link to='/'>
          <BsYoutube />
          <h1>Youtube</h1>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
