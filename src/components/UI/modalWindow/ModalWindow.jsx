import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Button  from '../button/Button';
import Input from '../input/Input';

import cl from './ModalWindow.module.css';

const ModalWindow = ({visible, setVisible, createPost, posts}) => {
  const [field, setField] = useState({title: '', description: ''});
  const rootClasses =[cl.substrate];

  if(visible) {
    rootClasses.push(cl.active);
  }

  const addNewPost = (e) => {
    e.preventDefault();

    var postId = 1;

    if(posts.length) postId = posts[posts.length - 1].id + 1;

    if(field.title && field.description) {
      createPost({title: field.title, body: field.description, id: postId});
    }

    setField({title: '', description: ''});
  };

  return (
    <CSSTransition
      in={visible}
      timeout={300}
      classNames="window"
    >
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.window} onClick={(e) => e.stopPropagation()}>
          <h3>Create post</h3>

          <Input
            placeholder="Title"
            value={field.title}
            onChange={e => setField({...field, title: e.target.value})}
          />

          <Input
            placeholder="Description"
            value={field.description}
            onChange={e => setField({...field, description: e.target.value})}
          />

          <Button
            onClick={addNewPost}
          >
            Add post
          </Button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalWindow;
