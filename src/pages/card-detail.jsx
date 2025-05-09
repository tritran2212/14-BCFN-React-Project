import { useEffect, useState } from "react";
import { useParams } from "react-router"
import {getProductDetailAPI} from "../service/product.service";
 import{ProductList} from "../components/list-product/listProduct";
 import { useDispatch } from "react-redux";
import { addToCart } from "../store/product.slice";
export default function CardDetail(){
    const useParam = useParams();

    const [product, setProduct] = useState(null);

    const dispath = useDispatch()

    const  [Quanlity, setQuanlity]= useState(1);
    console.log(useParam)

    const handleAddTocart = () =>{
        if(!product) return ; 
        dispath(
            addToCart({

                id:product.id,
                Quanlity,
            })
        )

    }   

    useEffect(()=>{
        if(useParam.id){
            getProductDetailAPI(useParam.id).then((res)=>{
                console.log(res.data.content)
                setProduct(res.data.content)
            })
        }
    },[useParam.id])



    if(!product) return null;

    return (
        <div className="p-4 bg-gray-100">
            <div className="text-center mb-4">
                <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-lg shadow-md mx-auto" />
                <h1 className="text-lg font-bold text-gray-800 mt-2">{product.name}</h1>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-4">
                <button 
                    onClick={() => setQuanlity(Quanlity + 1)} 
                    className="px-2 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                >
                    +
                </button>
                <input 
                    type="number" 
                    value={Quanlity} 
                    className="w-12 text-center border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    onChange={(e) => {
                        const value = e.target.value;
                        if(value<1){
                            setQuanlity(1);
                        }else{
                            setQuanlity(value);
                        }
                    }}
                />
                <button 
                    onClick={() => setQuanlity(Quanlity > 1 ? Quanlity - 1 : 1)} 
                    className="px-2 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600"
                >
                    -
                </button>
            </div>
            <button 
              onClick ={handleAddTocart}
                className="w-full py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600"
            >
                Add to cart
            </button>
            <h2  className="text-lg font-semibold text-gray-800 mt-6 mb-2">Related Products</h2>
            <ProductList data={product.relatedProducts} />
        </div>
    )
}