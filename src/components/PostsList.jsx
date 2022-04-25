import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Post from './Post';

const PostsList = ({posts, isLoading, removePost}) => {
  return (
    <div className="blog__list">
      {!posts.length
        ? (
          <div className="blog__message">
            <div className="blog__message-text">Posts not found.</div>
          </div>
        ) : (
          <div className="blog__list-content">
            <TransitionGroup>
              {posts.map((post) =>
                <CSSTransition
                  key={ post.id }
                  timeout={500}
                  classNames="post"
                >
                  <Post
                    post={ post }
                    removePost={ removePost }
                  />
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        )
      }
    </div>
  );
};

export default PostsList;
