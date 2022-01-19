import React, {Component} from "react";
import Todo from "./Todo";
// import {useNavigate} from 'react-router-dom';

const TodoList =(props)=>{
    // render(){
        {
            // const navigate=useNavigate();
            // {console.log("todolist props", this.props)}
            var author= true;
            if(props.todos.length){
                return(
                    <div>
                    {/* {console.log("todos")}
                    {console.log(props.todos)} */}
                        {   
                            
                            props.todos.map((todo) => {
                                {/* console.log("author")
                                    console.log(todo.authorId) */}
                                if(localStorage.getItem('profile')){
                                    author=JSON.parse(localStorage.getItem('profile')).result._id===todo.authorId
                                }
                                {/* console.log(todo) */}
                                if(todo.title.toLowerCase().includes(props.searchField.toLowerCase()) && author){
                                    {/* console.log("todo")
                                    console.log(todo) */}
                                    return <Todo key={todo.id} todo={todo} deleteTodo={props.deleteTodo} 
                                    editTodo={props.editTodo} markAsDone={props.markAsDone}/>
                                }
                            })
                        }
                    </div>
                )
            }
            else{
                if (localStorage.getItem("profile")){
                    return (<p id='noTodo'>Wohoo! No Todos</p>)
                }
                // navigate('/');
                return (<p id='noTodo'>Please login to see todos</p>)
            }
        }
        
        // return(
        //     <div>
        //         {   
        //             this.props.todos.map((todo) => {
        //                 if(todo.title.toLowerCase().includes(this.props.searchField.toLowerCase()))
        //                 return <Todo key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} />
        //             })
        //         }
        //     </div>
        // )
    // }
}

export default TodoList;