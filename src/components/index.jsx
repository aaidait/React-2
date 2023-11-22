import React from 'react';
import styles from './style.module.css';

const Data = (props) => {
  return (
    <div className={styles.data}>
      <h2>{props.posts.title}</h2>
      <p>{props.posts.body}</p>
    </div>
  );
};

export default Data;
