import React, {Component} from "react";
import axios from 'axios';

class AddTodo extends Component{
    render(){
        const handleClick=()=>{
            // this.props.addTodo({id: Math.random(),
            //      title: document.getElementById("title").value,
            //      desc: document.getElementById("desc").value,
            //      done: false
            // });
            axios.post('http://localhost:5000/notes/add', {
                "title": document.getElementById("title").value,
                "desc": document.getElementById("desc").value,
                "done": false,
                "authorId": JSON.parse(localStorage.getItem('profile')).result._id
            })
            .then(res=> {
                // console.log("rest");
                // console.log(res);
                this.props.addTodo({id: res.data._id,
                    title: res.data.title,
                    desc: res.data.desc,
                    done: false,
                    authorId: res.data.authorId
               });
            })

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