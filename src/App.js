import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import PostPage from './pages/PostPage';
import Goods from './pages/Goods';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="blog" exact element={ <Blog /> } />
          <Route path="blog/:id" exact element={ <PostPage /> } />
          <Route path="goods" element={ <Goods /> } />
          <Route path="*" element={ <Navigate to="/" replace /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;