import React from 'react';
import Task from './Task';
import CompleteEverything from './CompleteEverything'

class Todo extends React.Component {

  state = {
    tasks: [{ name: 'Clean the room' }, { name: 'Do the dishes' }]
  }

  constructor() {
    this.completionHandler = this.completionHandler.bind(this)
  }

  // method
  completionHandler() {

  }

  // class property
  completionHandler = (idx) => {
    let newArr = this.state.tasks.filter((el, i) => i !== idx)
    this.setState({
      tasks: newArr
    })
  }

  everythingCompletedHandler = () => {
    this.setState({
      tasks: []
    })
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((t, idx) => <Task onCompleted={() => this.completionHandler(idx)} name={t.name}></Task>)}
        <br></br>
        <CompleteEverything onClicked={this.everythingCompletedHandler}></CompleteEverything>
      </div>
    );
  }
}

export default Todo;
