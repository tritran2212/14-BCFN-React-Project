 import{configureStore} from "@reduxjs/toolkit";
 import  {userReducer} from "./user.slice.jsx";
 import {productReducer} from "./product.slice.js";

 
export const  store = configureStore({

    reducer:{

        // text(state = {c:1}){
        //     return state
        // },
        userReducer,
        productReducer,
    },

})