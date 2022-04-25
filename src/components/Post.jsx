import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button  from './UI/button/Button';

const Post = ({post, removePost}) => {
  const navigate = useNavigate();

  return (
    <div className="blog__item">
      <div className="blog__item-content">
        <div className="blog__item-text">
          <div>{ post.id }. { post.title }</div>
          <div>{ post.body }</div>
        </div>
      </div>

      <div className="blog__btns">
        <Button
          onClick={() => navigate(`/blog/${post.id}`)}
        >
          Open
        </Button>

        <Button
          onClick={() => removePost(post)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Post;
