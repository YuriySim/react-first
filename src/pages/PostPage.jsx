import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PostService from '../API/PostService';

import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loader/Loader';
import ScrollToTop from '../components/UI/scroll/ScrollToTop';

import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();
  const {id} = useParams();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response1 = await PostService.getPostsById(id);
    const response2 = await PostService.getCommentsPost(id);
    setPost(response1.data);
    setComments(response2.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ScrollToTop>
      <div className="comments">
        <Button
          onClick={() => navigate(-1)}
        >
          Come back
        </Button>

        {isPostsLoading &&
          <Loader />
        }

        <h1 className="comments__title">
          {post.title}
        </h1>

        {comments.map((com) =>
          <div className="comment" key={ com.id }>
            <div className="comment__body">{ com.body }</div>
            <div>{ com.email }</div>
          </div>
        )}
      </div>
    </ScrollToTop>
  );
};

export default PostPage;
