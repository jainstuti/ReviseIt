import React, {Component} from "react";
import TodoList from './TodoList';

class IncompleteTodos extends Component{
    render(){
        return(
            <div>
            {console.log(this.props)}
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