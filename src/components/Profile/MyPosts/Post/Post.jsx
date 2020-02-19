import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      {/* <div className={s.image}>
        <img src="data:image/jpeg;base64,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" alt="..." />
      </div> */}
      <div className={s.msg}>
        {props.message} <br/>
        <span> Likes -></span> {props.likes}
      </div>
    </div>
  );
}

export default Post;