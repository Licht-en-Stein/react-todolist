import React from 'react';

 class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      term: ''
    }
  }


render() {
  return (
    <ul>
    {this.props.items.map((item, index) => 
        <li key={index}><button>{item}</button></li>
        )}
    </ul>
    )
  }
}


export default TodoList;