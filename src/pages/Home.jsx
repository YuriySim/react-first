import React, { useContext } from 'react';

import ru from '../locales/ru.json';
import en from '../locales/en.json';

import ScrollToTop from '../components/UI/scroll/ScrollToTop';

import { localesContext } from '../context/localesContext';

const Home = () => {
  const {keySwitch} = useContext(localesContext);

  return (
    <ScrollToTop>
      <div className="home">
        <div className="home__text">{keySwitch ? en.home_page : ru.home_page}</div>
      </div>
    </ScrollToTop>
  );
};

export default Home;
