import React, {Component} from "react";
import TodoList from './TodoList';

class AllTodos extends Component{
    render(){
        return(
            <div>
                <TodoList todos={this.props.todos} searchField={this.props.searchField} 
                editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo}
                markAsDone={this.props.markAsDone} />
            </div>
        )
    }
}

export default AllTodos;