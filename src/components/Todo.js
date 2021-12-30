import React, {Component} from "react";
import FormDialog from "./modal";
import {Link } from 'react-router-dom' ; 

class Todo extends Component{
    render(){
        const handleDelete=()=>{
            this.props.deleteTodo(this.props.todo.id);
        }
        const handleDone=({target})=>{
            this.props.markAsDone(this.props.todo.id);
            target.disabled="true";
        }

        const handleTodoClick=()=>{

        }

        return(
            <div className="todo" onClick={handleTodoClick}>
                <Link to={`/${this.props.todo.id}`} ><p className="title" id="title">{this.props.todo.title}</p></Link >
                <div className="todoDesc">
                    <p id="desc">{this.props.todo.desc}</p>
                </div>
                <button className="deleteTodoBtn" onClick={handleDelete}>Delete</button>
                <FormDialog id={this.props.todo.id} title={this.props.todo.title} 
                desc= {this.props.todo.desc} done={this.props.todo.done}
                editTodo={this.props.editTodo} />
                {this.props.todo.done? <button disabled>Done</button>: <button onClick={handleDone} className="doneBtn" >Done</button>}
                
            </div>
        )
    }
    
}

export default Todo