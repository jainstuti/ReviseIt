import React, {Component} from "react";
import TodoList from './TodoList';
import Header from "./Header";
import NavBar from "./NavBar";

class IncompleteTodos extends Component{
    render(){
        return(
            <div>
            <Header addTodo={this.props.addTodo}
            updateSearchField={this.props.updateSearchField}
            searchTodos={this.props.searchTodos} />
            <NavBar/>
                <TodoList todos={this.props.todos.filter((todo)=>{
                                if(todo.done===false){
                                    return todo;
                                }
                            })} 
                searchField={this.props.searchField} editTodo={this.props.editTodo} 
                deleteTodo={this.props.deleteTodo} markAsDone={this.props.markAsDone} />
            </div>
        )
    } 
    
}

export default IncompleteTodos;