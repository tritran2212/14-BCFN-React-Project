import {createSlice } from '@reduxjs/toolkit';
import { manageLocalStorage } from '../common/utils';
import { KEY_ACCESS_TOKEN } from '../common/constants';

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
        logout(state){
                state.user = null ;
                manageLocalStorage.remove(KEY_ACCESS_TOKEN)
        }
}
)
export  const  userReducer = userSlice.reducer;

export  const  {setUser,logout} = userSlice.actions;