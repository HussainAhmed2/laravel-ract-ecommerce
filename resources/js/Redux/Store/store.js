import { createStore, applyMiddleware, compose } from "redux";
import persistStore from "redux-persist/lib/persistStore";

import thunk from "redux-thunk";
import rootReducers from "./rootReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk]

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persister = persistStore(store);

export  {store,persister} ;
