import React, {Component} from "react";

class AddTodo extends Component{
    render(){
        const handleClick=()=>{
            this.props.addTodo({id: Math.random(),
                 title: document.getElementById("title").value,
                 desc: document.getElementById("desc").value,
                 done: false
            });
            document.getElementById("title").value="";
            document.getElementById("desc").value=""
        }
        return(
            <div>
                <input id="title" placeholder="todo title"></input>
                <input id="desc" placeholder="todo description"></input>
                <button onClick={handleClick}>Add Todo</button>
            </div>
        )
    }
}

export default AddTodo