import React, { Component } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import axios from "axios";
// import store from "../store";

class AllTodos extends Component {
  componentDidMount() {
    // const API = axios.create({ baseURL: "http://localhost:5000" });
    axios.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        console.log("inside interceptor");
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.getItem("profile")).token
        }`;
      }

      return req;
    });
    console.log("all mounted");
    axios.get("http://localhost:5000/notes").then((res) => {
      console.log("all mounted");
      console.log(res);
      // console.log(store);
    });
    // console.log("all mounted");
    // console.log(store);

    // axios.get("http://localhost:5000/notes").then(
    //   (res) => {
    //     console.log(res);
    //   }
    //   // res=>res.data.map((todo)=>{
    //   // console.log(res);
    //   // let temp={
    //   //     id: todo._id,
    //   //     title: todo.title,
    //   //     desc: todo.desc,
    //   //     done: todo.done
    //   // }
    //   // return temp;
    //   // })
    // );
    // .then(result=>{
    //   // console.log(typeof result);
    //   // this.props.initialiseTodos(result)
    //   // console.log("updated store acc to db")
    // })
  }

  render() {
    return (
      <div>
        <Header
          addTodo={this.props.addTodo}
          updateSearchField={this.props.updateSearchField}
          searchTodos={this.props.searchTodos}
        />
        {/* <NavBar /> */}
        <TodoList
          todos={this.props.todos}
          searchField={this.props.searchField}
          editTodo={this.props.editTodo}
          deleteTodo={this.props.deleteTodo}
          markAsDone={this.props.markAsDone}
        />
      </div>
    );
  }
}

export default AllTodos;
