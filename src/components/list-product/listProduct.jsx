import { ProductCard } from "../../components/product-card/product-card";
import { useState, useEffect } from "react";
import { getAllProductsAPI } from "../../service/product.service";
import { Link } from "react-router";
export function ProductList({data}) {
    const [listproducts, setListProducts] = useState([]);

    useEffect(() => {
        getAllProductsAPI().then((res) => {
            console.log("asdasdsadsa", res.data);
            setListProducts(res.data.content);
        });
    }, []);

    return (
        <>
            <h2 className="text-[40px] text-center mt-[46px] mb-[80px]">Product Feature</h2>
            
            <div className="grid grid-cols-3 gap-[10px] px-[100px]  ">
                {data.map((product) => (
                    <Link to={`/card-detail/${product.id}`}>
                    
                    <div className="w-[400px]">
                        <ProductCard
                        key={product.id}
                        img={{
                            alt: product.name,
                            src: product.image,
                        }}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                    />
                    </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
