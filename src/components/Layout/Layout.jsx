import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import ru from '../../locales/ru.json';
import en from '../../locales/en.json';

import Switch from '../UI/switch/Switch';

import { localesContext } from '../../context/localesContext';

const setActive = ({ isActive }) => isActive
  ? 'header__btn header__btn_active w-inline-block'
  : 'header__btn w-inline-block';

const Layout = () => {
  const [keySwitch, setKeySwitch] = useState(true);

  return (
    <localesContext.Provider
      value={{keySwitch}}
    >
      <div className="header">
        <div className="header__content">
          <div className="header__swich">
            <Switch
              keySwitch={ keySwitch }
              setKeySwitch={ setKeySwitch }
            />
          </div>

          <div className="header__menu">
            <NavLink to="/" className={ setActive }>
              <div className="header__btn-text">
                {keySwitch ? en.home : ru.home}
              </div>

              <div className="header__btn-line"></div>
            </NavLink>

            <NavLink to="/blog" className={ setActive }>
              <div className="header__btn-text">
                {keySwitch ? en.blog : ru.blog}
              </div>

              <div className="header__btn-line"></div>
            </NavLink>

            <NavLink to="/goods" className={ setActive }>
              <div className="header__btn-text">
                {keySwitch ? en.goods : ru.goods}
              </div>

              <div className="header__btn-line"></div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>

      <div className="footer">
        <div>Simokhin react training project 2022.</div>
      </div>
    </localesContext.Provider>
  );
};

export default Layout;
