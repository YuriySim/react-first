import React, { useState, useEffect, useRef, useContext } from 'react';

import PostService from '../API/PostService';
import ru from '../locales/ru.json';
import en from '../locales/en.json';

import GoodsCard from '../components/GoodsCard';
import ScrollToTop from '../components/UI/scroll/ScrollToTop';
import Loader from '../components/UI/loader/Loader';

import { getPageCount } from '../utils/pages';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';

import { localesContext } from '../context/localesContext';


const Goods = () => {
  const {keySwitch} = useContext(localesContext);

  const [goods, setGoods] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const lastElement = useRef();

  const [fetchGoods, isGoodsLoading, goodsError] = useFetching(async () => {
    const response = await PostService.getPosts(limit, page);
    setGoods([...goods, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchGoods();
  }, [page]);

  useObserver(lastElement, page < totalPages, isGoodsLoading, () => {
    setPage(page + 1);
  });

  return (
    <ScrollToTop>
      <div className="goods">
        <div className="goods__title">
          <div className="goods__title-text">{keySwitch ? en.goods : ru.goods}</div>
        </div>

        <div className="goods__list">
          {goods.map((good, index) =>
            <GoodsCard key={ good.id } good={ good } id={ index + 1 } />
          )}
        </div>

        <div className="goods__flag" ref={ lastElement }></div>
      </div>

      {isGoodsLoading &&
        <Loader />
      }
    </ScrollToTop>
  );
};

export default Goods;
