import React from "react";
import s from "../Users.module.css";

const News = props => {
  let rowsElements = [];
  let rowsCount = Math.floor(Math.random() * 10);

  for (let i = 0; i < rowsCount + 1; i++) {
    let element;
    if (rowsCount) {
      element = <hr key={i}/>;
    } else {
      element = (
        <>
          <hr className={s.image} key={i}/>
          <hr />
          <hr />
        </>
      );
    }
    rowsElements.push(element);
  }

  return (
    <article className={s.article}>
      {props.index}
      {rowsElements}
    </article>
  );
};
export default News;
