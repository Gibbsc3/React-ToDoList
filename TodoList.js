import React from 'react'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    //initial state
    this.state = {
      todoItems:[],
      value: ''
    }
  }
  pressEnter(e) {
    if (e.key === 'Enter') {
      var items = this.state.todoItems
      items.push(e.target.value)
      this.setState({value: '', todoItems: items});
    }
  }
  addToList(e) {
    this.setState({value: e.target.value});
  }


  render() {
    var todoItems = this.state.todoItems.map((todoItem, i) => {
      return <div>
      <TodoItem key={i}>{todoItem}</TodoItem>
      </div>
    })
//returning an array makes a list. (no need for list tags!)

     return <div>
     <div>
      <InputBox value={this.state.value} onKeyPress={(e) => this.pressEnter(e)} onChange={(e) => this.addToList(e)}/>
      </div>
       <ul>{todoItems}</ul>
     </div>

  }
}

var TodoItem = (props) => <li>{props.children}</li>

//use this block by putting <todoStatus/>
var InputBox = React.createClass({
  render () {
    return <input type="text" {...this.props}/>
  }
})
//use this block by putting <todoStatus/>

export default TodoList
