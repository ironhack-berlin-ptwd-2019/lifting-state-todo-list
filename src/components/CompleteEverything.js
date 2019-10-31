import React from 'react';

function CompleteEverything(props) {

  return (
    <button onClick={() => { props.onClicked(true) }}>Complete everything</button>
  );
}

export default CompleteEverything;
