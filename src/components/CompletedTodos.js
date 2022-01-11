import React, {Component} from "react";
import TodoList from './TodoList';
import Header from "./Header";

const CompletedTodos=(props)=>{
        return(
            <div>
                <Header addTodo={props.addTodo}
                updateSearchField={props.updateSearchField}
                searchTodos={props.searchTodos} />
                

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