import React, {Component} from "react";

class Login extends Component{
    render(){
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(e.target[1].value);
        }
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label >Email</label>
                    <input type="email" placeholder="enter email"></input>
                    <label >Password</label>
                    <input type="password" placeholder="enter password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;