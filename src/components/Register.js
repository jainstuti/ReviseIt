import React, {Component} from "react";

class Register extends Component{
    render(){
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(e.target[1].value);
        }
        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={handleSubmit} >
                    <label >Name</label>
                    <input type="text" placeholder="enter name"></input>
                    <label >Email</label>
                    <input type="email" placeholder="enter email"></input>
                    <label >Password</label>
                    <input type="password" placeholder="enter password"></input>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;