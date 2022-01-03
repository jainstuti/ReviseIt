import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import reducer from "./reducers/reducer";
import { saveState } from "./syncWithDB";

// const syncWithDBstate= loadState();

const store=createStore(reducer, {
        todos: [],
        searchField: ""
    },
    applyMiddleware(createLogger()));

store.subscribe(() => {
saveState(store.getState());
});

export default store;