import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/user.slice";
import CommentReducer from "./slices/comment.slice"
import { Provider } from "react-redux";


const RootReducer = combineReducers({
	user: UserReducer,
	comment:CommentReducer
});

const store = configureStore({
	reducer: RootReducer,
});

const StoreProvider = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

export default StoreProvider;