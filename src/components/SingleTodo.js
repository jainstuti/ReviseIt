import React, {Component} from 'react';
import {useParams} from 'react-router-dom';

const SingleTodo = (props)=>{
    let params=useParams();
    // componentDidMount(){
    //     {console.log()}
    // }
        
        // const id=this.props.match.params.todo_id;
        // const todo=this.props.todos.filter((todo)=>{
        //     return todo.id===id;
        // }) 

        let todo=props.todos.filter(todo=>
            todo.id==params.todo_id
        )
        let status=todo[0].done
        return(
            <div>
                <h2>{todo[0].title}</h2>
                <h4>{todo[0].desc}</h4>
                {status?<p>Done</p>: <p>Incomplete</p>}
            </div>
        )
}

export default SingleTodo;