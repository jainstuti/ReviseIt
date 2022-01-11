export function deleteTodo(id){
    return {
        type: "DELETE_TODO",
        payload: id
    }
}

export function addTodo(todo){
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

export function updateSearchField(data){
    return {
        type: "UPDATE_SEARCHFIELD",
        payload: data
    }
}

export function editTodo(todo){
    return {
        type: "EDIT_TODO",
        payload: todo
    }
}

export function initialiseTodos(todos){
    return {
        type: "INITIALISE_TODOS",
        payload: todos
    }
}

export function markAsDone(id){
    return {
        type: "MARK_AS_DONE",
        payload: id
    }
}

// export function login(logindata){
//     return {
//         type: "LOGIN",
//         payload: logindata
//     }
// }

// export function markAsDone(registerData){
//     return {
//         type: "REGISTER",
//         payload: registerData
//     }
// }