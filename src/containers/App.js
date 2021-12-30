import React, { Component} from 'react';
import AddTodo from '../components/AddTodo';
import {connect} from 'react-redux';
import SearchTodos from '../components/SearchTodos';
import { addTodo, deleteTodo, updateSearchField, editTodo, markAsDone } from '../actions';
import ResponsiveAppBar from '../components/NavBar';
import {BrowserRouter, Route, Routes, NavLink, Link} from 'react-router-dom';
import IncompleteTodos from '../components/IncompleteTodos';
import AllTodos from '../components/AllTodos';
import CompletedTodos from '../components/CompletedTodos';
import NavBar from '../components/NavBar';
import SingleTodo from '../components/SingleTodo';

class App extends Component{
  render(){
    const pr={
      todos:this.props.todos,
      searchField:this.props.searchField,
      editTodo:this.props.editTodo,
      deleteTodo:this.props.deleteTodo
    }
    
    return(
      
        <div className='App'>
          <div id="header">
            <h1>My Todos</h1>
            <AddTodo addTodo={this.props.addTodo} />
            <SearchTodos updateSearchField={this.props.updateSearchField} searchTodos={this.props.searchTodos} />
          </div>
          
          <BrowserRouter className="browserRouter">
            <NavBar/>
          <Routes>
            
            <Route path='/Incomplete' element={
            <IncompleteTodos 
            todos={this.props.todos} searchField={this.props.searchField} 
              editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo}
              markAsDone={this.props.markAsDone}  />}
            
            />
            <Route path='/Done' element={<CompletedTodos 
              todos={this.props.todos} searchField={this.props.searchField} 
              editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo}
              markAsDone={this.props.markAsDone}  />}
            />
            <Route path='/All' element={<AllTodos 
              todos={this.props.todos} searchField={this.props.searchField} 
              editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo}
              markAsDone={this.props.markAsDone} />}
            />
            <Route path='/:todo_id' element={
              <SingleTodo todos={this.props.todos} 
              />}
            
            />
          </Routes>
          </BrowserRouter>
        </div>
    )
  }
}



const mapStateToProps=(state)=>{
  return{
      todos: state.todos,
      searchField: state.searchField
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      deleteTodo: (id)=>{
          dispatch(deleteTodo(id));
      },
      addTodo: (todo)=>{
        dispatch(addTodo(todo));
      },
      updateSearchField: (data)=>{
        dispatch(updateSearchField(data))
      },
      editTodo: (todo)=>{
        dispatch(editTodo(todo))
      },
      markAsDone: (id)=>{
        dispatch(markAsDone(id))
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);