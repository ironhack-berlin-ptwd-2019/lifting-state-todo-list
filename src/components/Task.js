import React from 'react';

function Task(props) {

  return (
    <button onClick={() => { props.onCompleted(true) }}>{props.name}</button>
  );
}

export default Task;
