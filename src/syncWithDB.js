import axios from 'axios';
import store from './store';

// export const loadState= ()=>{}

export const saveState= () => {

    let alltodos=store.getState().todos;
    alltodos.forEach(todo => {
        axios.get('http://localhost:5000/notes/'+todo.id)
        .then(res=>{
            axios.post('http://localhost:5000/notes/update/'+todo.id, {
                "title": todo.title,
                "desc": todo.desc,
                "done": todo.done,
                "authorId": todo.authorId
            })
        })
        .catch(err => {
            axios.post('http://localhost:5000/notes',{
                "title": todo.title,
                "desc": todo.desc,
                "done": todo.done,
                "authorId": todo.authorId
            })
            // res.status(200).json("handled in catch")
        }
            
        )
    });
    console.log("updated db acc to store");
} 
