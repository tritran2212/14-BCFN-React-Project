import {createSlice} from "@reduxjs/toolkit";
import { manageLocalStorage } from "../common/utils";
const  cartslocalStorege = manageLocalStorage.get("carts")||[];

const  productSlice = createSlice({

    name :"product",

    initialState:{
        carts:[
            ...cartslocalStorege,
        ],
    },

    reducers:{

        addToCart(state,action){

            const  productIndex = state.carts.findIndex((item)=>{
                return item.id === action.payload.id;
            })

            let newCarts = [...state.carts];

            if(productIndex!==-1){

                // Nếu sảm phẩm đã có trong giỏ hàng 
                // cập nhật số lượng mới nhất
                newCarts[productIndex]= action.payload;
            }else{
                // nếu sản phẩm chưa có thêm vào

                newCarts.push(action.payload);

            }
            //  const newCarts = [...state.carts, action.payload];
            //     const productIndex = state.carts.findIndex((item)=>{
            //         return item.id=== action.payload.id;
                
            // });
            // let newCarts = {...state.carts};

            // if(productIndex!==-1){
            //     newCarts[productIndex ]=action.payload;
            // }else{
            //     newCarts.push(action.payload);
            // }
            // Lưu redux 

            state.carts = newCarts;
            // Lưu LocalStorage

            manageLocalStorage.set("carts", newCarts);

        }
    }
})

export const productReducer = productSlice.reducer;
// export const addCart = productSlice.actions.addToCart;

export const {addToCart} = productSlice.actions;