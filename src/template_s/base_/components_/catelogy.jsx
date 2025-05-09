import { useState } from "react";
import { useEffect } from "react";
import { getCategoryAPI } from "../../../service/product.service";
import { Link } from "react-router";
export function Category() {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoryAPI().then((res) => {
            //    debugger;
            const categoryList = res.data.content.filter((product) => {
                if (product.categoryParent) {
                    return JSON.parse(product.categoryParent).length === 0
                }
                else {
                    return false;
                }
            })

            setCategoryList(categoryList)

        })
    }, [])
    return (
        <>
            <div className="flex gap-3 px-5 py-2.5 border-b">
                <Link className="capitalize" to="/">
                    Home
                </Link>

                {categoryList.map((cate) => {
                    return (
                        <Link
                            className="capitalize"
                            key={cate.id}
                            to={`/${cate.category}`}
                        >
                            {cate.alias}
                        </Link>
                    );
                })}
            </div>
        </>
    )
}