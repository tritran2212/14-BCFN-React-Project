import { Link } from "react-router";
import { ProductCard } from "../components/product-card/product-card";
import { ProductFeature } from "./homes/product-feature";
import {  Hero } from "./homes/hero";

export  function Home(){

   
    return (
        <>

        <Hero/>
        <ProductFeature
            
        />
        {/* <h1>WELCOME TO HOME PAGE</h1>
        <Link to={'./login'}>Login</Link>
        <Link to={'./sign-up'}>Register</Link> */}
        </>
        
    )
}