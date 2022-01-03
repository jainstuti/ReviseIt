import React, {Component} from "react";
import AddTodo from './AddTodo';
import SearchTodos from "./SearchTodos";

class Header extends Component{
    render(){
        return(
            <div id="header">
                
                <h1>My Todos</h1>
                <AddTodo addTodo={this.props.addTodo} />
                <SearchTodos updateSearchField={this.props.updateSearchField} searchTodos={this.props.searchTodos} />
            </div>
        )
    }
}

export default Header;
