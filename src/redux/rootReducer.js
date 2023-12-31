import { combineReducers } from "redux";
// import storage from "redux-persist/lib/storage";
import counterReducer from "./slice/counterSlice";
import loginReducer from "./slice/loginSlice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import userDetailReducer from "./slice/userDetailSlice";
import skillsReducer from "./slice/skillsSlice";
import projectReducer from "./slice/projectSlice";
import clientsReducer from "./slice/clientsSlice";
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  counterReducer,
  loginReducer,
  userDetailReducer,
  skillsReducer,
  projectReducer,
  clientsReducer,
});

export { rootPersistConfig, rootReducer };
