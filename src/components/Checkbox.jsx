import React, { Fragment } from "react";
import '../styles/list-task.css'

const Checkbox = props => {
  const {onChange, data: { id, description, done }} = props;
  return (
    <Fragment>
      <div className="container-list">
        <input className="todo__state" name={id} type="checkbox" defaultChecked={done} onChange={onChange}/>
        <div className="todo__text">{description}</div>
      </div>
    </Fragment>
  );
}

export default Checkbox