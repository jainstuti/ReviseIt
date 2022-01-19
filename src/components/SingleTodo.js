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
                <h1>{todo[0].title}</h1>
                <p style={{"font-size": "30px"}}>{todo[0].desc}</p>
                {status?<h3 style={{"color": "green", "padding-right": "30px","text-align": "right"}}>Done</h3>: 
                <h3 style={{"color": "red", "padding-right": "30px", "text-align": "right"}}>Incomplete</h3>}
            </div>
        )
}

export default SingleTodo;