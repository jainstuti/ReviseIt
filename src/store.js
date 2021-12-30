import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import reducer from "./reducers/reducer";

const store=createStore(reducer, {
        todos: [{id: 1, title: "title", desc: "desc", done: false},
                {id: 2, title: "sa", desc: "sdfd", done: true}],
        searchField: ""
    },
    applyMiddleware(createLogger()));

export default store;