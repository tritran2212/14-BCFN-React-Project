import src from "./cart1.png";
import {memo} from 'react'
function sum(a,b){
    return a+b;
}
function double(fn){
    return (a,b)=>{
        return fn(a*10,b*2)
    };
}
const d = double(sum);

d(3,4);
sum(3,4);
export  function CartIcon_(){
    return(
        <>
        <img src={src} width={40} className="w-10 object-cover"></img>
        </>
    )
}
// memo  chi bi re-render khi props thay doi hoac state thay doi
export const CartIcon = memo(CartIcon_)