import React, { useState, useEffect, useContext } from 'react';

import PostService from '../API/PostService';
import ru from '../locales/ru.json';
import en from '../locales/en.json';

import Pagination from '../components/Pagination';
import PostsList from '../components/PostsList';
import Button  from '../components/UI/button/Button';
import Input from '../components/UI/input/Input';
import Select from '../components/UI/select/Select';
import ModalWindow from '../components/UI/modalWindow/ModalWindow';
import ScrollToTop from '../components/UI/scroll/ScrollToTop';
import Loader from '../components/UI/loader/Loader';

import { useFetching } from '../hooks/useFetching';
import { useFilterPosts } from '../hooks/useFilterPosts';
import { getPageCount } from '../utils/pages';

import { localesContext } from '../context/localesContext';

const Blog = () => {
  const {keySwitch} = useContext(localesContext);

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const [modal, setModal]   = useState(false);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getPosts(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  const selectLimit = (choseLimit) => {
    setLimit(choseLimit);
    setPage(1);
  };

  const sortedAndSearchPosts = useFilterPosts(posts, filter.sort, filter.query);

  return (
    <ScrollToTop>
      <div className="blog">
        <div className="blog__title">
          <div className="blog__title-text">{keySwitch ? en.posts_list : ru.posts_list}</div>
        </div>

        <div className="blog__search">
          <Input
            placeholder="Search..."
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
          />
        </div>

        <div className="blog__select">
          <Select
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            options={[
              {value: '', name: 'Sort by:'},
              {value: 'title', name: 'Title'},
              {value: 'body', name: 'Description'},
            ]}
          />
        </div>

        <div className="blog__create">
          <div className="blog__create-left">
            <Select
              value={limit}
              onChange={selectLimit}
              options={[
                {value: '', name: 'Show by:'},
                {value: 5, name: '5'},
                {value: 10, name: '10'},
                {value: 20, name: '20'},
                {value: -1, name: 'All'},
              ]}
            />
          </div>

          <div className="blog__create-right">
            <Button onClick={() => {setModal(true);}}>
              {keySwitch ? en.create_post : ru.create_post}
            </Button>
          </div>
        </div>

        <PostsList
          posts={ sortedAndSearchPosts }
          isLoading={ isPostsLoading }
          removePost = { removePost }
        />

        <Pagination
          totalPages={ totalPages }
          page={ page }
          changePage={ changePage }
        />

        <ModalWindow
          visible={ modal }
          setVisible={ setModal }
          createPost={ createPost }
          posts={posts}
        />
      </div>

      {isPostsLoading &&
        <Loader />
      }
    </ScrollToTop>
  );
};

export default Blog;
