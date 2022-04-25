import React from 'react';

import preloader from './preloader.svg';
import classes from './Loader.module.css';

const Loader = props => {
  return (
    <div className={classes.loader_content}>
      <div className={classes.loader}>
        <img src={preloader} alt="preloader" />
      </div>
    </div>
  );
};

export default Loader;
