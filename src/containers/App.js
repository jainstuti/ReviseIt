import React, { Component} from 'react';
// import AddTodo from '../components/AddTodo';
import {connect} from 'react-redux';
// import SearchTodos from '../components/SearchTodos';
import { addTodo, deleteTodo, updateSearchField, editTodo, initialiseTodos, markAsDone } from '../actions';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import IncompleteTodos from '../components/IncompleteTodos';
import AllTodos from '../components/AllTodos';
import CompletedTodos from '../components/CompletedTodos';
import SingleTodo from '../components/SingleTodo';
import axios from 'axios';
import PrimaryNav from '../components/PrimaryNav';
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';

class App extends Component{
  componentDidMount(){
    // console.log("component mounted");
    axios.get('http://localhost:5000/notes')
      .then(res=>res.data.map((todo)=>{
        console.log(res);
        let temp={
            id: todo._id,
            title: todo.title,
            desc: todo.desc,
            done: todo.done,
            authorId: todo.authorId
        }
        return temp;
      }))
      .then(result=>{
        console.log(typeof result);
        this.props.initialiseTodos(result)
        console.log("updated store acc to db")
      })
  }
  render(){
    
    return(
        
        <div className='App'>
        <BrowserRouter className="browserRouter">

          <PrimaryNav />
          <Routes>
            <Route exact path='/login' element={
              <Login />}
            />

            <Route exact path='/register' element={
            <Register />}
            />

          {/* </Routes> */}
          {/* <div id="header">
            <PrimaryNav />
            <h1>My Todos</h1>
            <AddTodo addTodo={this.props.addTodo} />
            <SearchTodos updateSearchField={this.props.updateSearchField} searchTodos={this.props.searchTodos} />
          </div> */}
          {/* <Header addTodo={this.props.addTodo}
            updateSearchField={this.props.updateSearchField}
            searchTodos={this.props.searchTodos} /> */}
          
          {/* <Routes> */}
            
            <Route path='/Incomplete' element={
            <IncompleteTodos 
            todos={this.props.todos} searchField={this.props.searchField} 
              editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo}
              markAsDone={this.props.markAsDone}  
              addTodo={this.props.addTodo}
                updateSearchField={this.props.updateSearchField}
                searchTodos={this.props.searchTodos}
              />}
            
            />
            <Route path='/Done' element={<CompletedTodos 
              todos={this.props.todos} searchField={this.props.searchField} 
              editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo}
              markAsDone={this.props.markAsDone} 
              addTodo={this.props.addTodo}
                updateSearchField={this.props.updateSearchField}
                searchTodos={this.props.searchTodos} />}
            />
            <Route exact path='/' element={<AllTodos 
              todos={this.props.todos} searchField={this.props.searchField} 
              editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo}
              markAsDone={this.props.markAsDone}
              addTodo={this.props.addTodo}
              initialiseTodos={this.props.initialiseTodos}
                updateSearchField={this.props.updateSearchField}
                searchTodos={this.props.searchTodos} />}
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
      initialiseTodos: (todos)=>{
        dispatch(initialiseTodos(todos))
      },
      markAsDone: (id)=>{
        dispatch(markAsDone(id))
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);