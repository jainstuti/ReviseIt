import React, {Component} from "react";

class SearchTodos extends Component{
    render(){
        const handleChange=(e)=>{
            this.props.updateSearchField(e.target.value);
        }
        return(
            <div>
                <input type="search" className="fontAwesome" placeholder="&#xF002; search todos" onChange={handleChange}></input>
            </div>
        )
    }
}

export default SearchTodos;
