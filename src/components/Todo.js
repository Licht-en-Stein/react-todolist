import React from 'react';
import '../App.css';
import TodoList from './TodoList';


class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      term: ''
    }
  }


onChange = (event) => {
  this.setState({
    term: event.target.value
  })
}

onSubmit = (event) => {
  event.preventDefault();
    this.setState((prevState) => {
    return {
    items: [...prevState.items,this.state.term],
    term: ''
  }
    })
  }

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange}/>
          <button className="submit">add</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}


export default Todo;