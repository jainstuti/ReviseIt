import React, {Component} from "react";
import TodoList from './TodoList';

const CompletedTodos=(props)=>{
        return(
            <div>
            {console.log(props)}
                <TodoList todos={props.todos.filter((todo)=>{
            if(todo.done){
                return todo;
            }
        })}
         searchField={props.searchField} 
                editTodo={props.editTodo} deleteTodo={props.deleteTodo} 
                markAsDone={props.markAsDone}
                />
            </div>
        )
}

export default CompletedTodos;