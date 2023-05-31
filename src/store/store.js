import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
    whitelist: ['cart']
}

const persistentReducer = persistReducer(persistConfig, rootReducer)

// logger allows us to see what the state is, what the action is and how the state looks after the action
// middleware runs before the action hits the reducer
const middlewares = [logger, thunk /* middleware2, middleware3, etc */];
// in order to work, middlewares must be passed as argument in the 'compose' method
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistentReducer, undefined, composedEnhancers);
export const persistorStore = persistStore(store)
