import {createSlice } from '@reduxjs/toolkit';

const  USER_FETCH_STATUS ={
    IDLE :
    "IDLE",
    FETCHING:"FETCHING",
    SUCCESS:"SUCCESS",
    EXPIRED:"EXPIRED",
}

const  userSlice = createSlice({
        name : "userSlice",


        initialState : {
            user: null,

            userFetchStatus: USER_FETCH_STATUS.IDLE,
            
        },
        reducers : {
            setUser(state, action) {
                state.user = action.payload;
                
            },
            clearUser(state) {
                state.user = null;
                
            },
        },
}
)
export  const  userReducer = userSlice.reducer;

export  const  {setUser} = userSlice.actions;