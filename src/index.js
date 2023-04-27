import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import VideoDetail from './pages/VideoDetail';
import Videos from './pages/Videos';

// router 설정하기
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> }, // index가 최상위인 경우
      { path: 'videos', element: <Videos /> }, // 사용자가 url에 videos 명시한경우
      { path: 'videos/:keyword', element: <Videos /> }, // 특정 keyword로 검색한경우
      { path: 'videos/watch/:videoId', element: <VideoDetail /> }, // 사용자가 특정영상을 클릭한 경우 상세페이지로
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* App을 쓰는게 아니라, 리액트가 선택적으로 보여줄 수 있도록 선택권 양도 */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
