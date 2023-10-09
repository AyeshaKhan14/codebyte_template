import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
    token:""
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setToken: (state,action) => {
			state.token = action.payload;
		},
	    clearToken:(state)=>{
            state.token= ""
        },
		clearAuth:(state)=>{
			state.user = {}
		}
	},
});



export const { setUser, setToken,clearToken, clearAuth} = userSlice.actions;
export default userSlice.reducer;