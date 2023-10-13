import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import counterReducer from "./slice/counterSlice";
import loginReducer from "./slice/loginSlice";
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
    counterReducer:counterReducer,
    loginReducer,
});

export { rootPersistConfig, rootReducer };