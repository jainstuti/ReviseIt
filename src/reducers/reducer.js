import axios from "axios";

const reducer=(state, action) =>{
switch(action.type){
    case "DELETE_TODO":
        let updatedTodos=state.todos.filter((todo)=>{
            return todo.id!==action.payload
        })
        state= {
            ...state,
            todos: updatedTodos
        }
        axios.delete("http://localhost:5000/notes/"+action.payload)
        .then(res=> console.log(res))
        break;
    case "ADD_TODO":
        let updateTodos=[...state.todos, action.payload]
        state= {
            ...state,
            todos: updateTodos
        }
        break;
    case "UPDATE_SEARCHFIELD":
        state= {
            ...state,
            searchField: action.payload
        }
        break;
    case "EDIT_TODO":
        let newTodos=state.todos.map((todo)=>{
            if(todo.id===action.payload.id){
                return action.payload
            }
            else{
                return todo
            }
        })
        state={
            ...state,
            todos: newTodos
        }
        break;
    case "INITIALISE_TODOS":
        state={
            ...state,
            todos: action.payload
        }
        break;
    case "MARK_AS_DONE":
        let changedTodos=state.todos.map((todo)=>{
            let tempTodo={id: todo.id,
                        title: todo.title,
                        desc: todo.desc,
                        done: todo.done,
                        authorId: todo.authorId
                     }
            if(todo.id===action.payload){
                return {...tempTodo,
                        done: true
                       }
            }
            else{
                return tempTodo
                       
            }
        })
        state={
            ...state,
            todos: changedTodos
        }
        break



}
return state;
}

export default reducer;