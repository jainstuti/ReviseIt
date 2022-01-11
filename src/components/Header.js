import React, {Component} from "react";
import AddTodo from './AddTodo';
import NavBar from "./NavBar";
import SearchTodos from "./SearchTodos";

class Header extends Component{
    render(){
        {if (!localStorage.getItem("profile")){
            return <div></div>
        }}
        return(
            <div id="header">
                <h1>My Todos</h1>
                <AddTodo addTodo={this.props.addTodo} />
                <SearchTodos updateSearchField={this.props.updateSearchField} searchTodos={this.props.searchTodos} />
                <NavBar />
            </div>
        )
    }
}

export default Header;
