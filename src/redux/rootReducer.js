import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import counterReducer from "./slice/counterSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
    counterReducer:counterReducer
});

export { rootPersistConfig, rootReducer };