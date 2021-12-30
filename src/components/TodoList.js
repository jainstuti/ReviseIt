import React, {Component} from "react";
import Todo from "./Todo";

class TodoList extends Component{
    render(){
        {
            // {console.log("todolist props", this.props)}
            if(this.props.todos.length){
                return(
                    <div>
                    {/* {console.log(this.props.todos)} */}
                        {   
                            
                            this.props.todos.map((todo) => {
                                {/* console.log(todo) */}
                                if(todo.title.toLowerCase().includes(this.props.searchField.toLowerCase()))
                                return <Todo key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} 
                                editTodo={this.props.editTodo} markAsDone={this.props.markAsDone}/>
                            })
                        }
                    </div>
                )
            }
            else{
                return (<p id='noTodo'>Wohoo! No Todos</p>)
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
    }
}

export default TodoList;