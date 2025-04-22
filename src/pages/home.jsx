import { useEffect, useState } from "react";
import {CartIcon} from "../components/icons/cart";
import {LinkIcon, ShoppingCartIcon} from "lucide-react"

export  function Home(){
    // const [c,setC] = useState(0);

    // useEffect(()=>{
    //     const  id = setInterval(()=>{
    //         console.log("asdsadsa")
    //         setC((c)=>c+1)
    //     },200)
    
    //     return ()=>{
    //         clearInterval(id)
    //     }
    // },[])
   
   
    return (
        <>
        {/* <Link to="/login">link </Link>
        <h1 className="text-red-600 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vel.</h1>
        <CartIcon/> */}
        <ShoppingCartIcon/>
       {/* <h1>count{c}</h1> */}
       
        </>
        
    )
}