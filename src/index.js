import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {requireAuthorization} from "./store/action";
import {fetchQuestionList, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(fetchQuestionList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
