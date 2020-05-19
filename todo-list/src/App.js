import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component{
  constructor(){
    super();
    this.todoItems = [
      {
        title: 'Mua kẹo',
        isComplete: true
      },
      {
        title: 'Mua kem',
        isComplete: true
      }
    ]
  }

  onItemClicked() {
    
  }

  render(){

      return (
        <div className="App">
    
          {
              this.todoItems.length > 0 && this.todoItems.map(
                (item, index)=> <TodoItem key={index} item={item} onClick={this.onItemClicked} />
                )
          }
          {
            this.todoItems.length === 0 && 'Nothing'
          }
      </div>
      )

  }
}

export default App;
