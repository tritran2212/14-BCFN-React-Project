import { useState } from "react";
export function Menu({children, list}){
    const [isOpen , setIsOpene] = useState(false);
    return (

        <>
        <div className="relative">
                <button onClick ={()=>{setIsOpene(!isOpen)}}>{children}</button>
                {
                    isOpen&&(
                        <div className="absolute top-full  bg-white right-0 shadow-lg p-4 min-w-48 text-black">
                        {/* <ul className="flex flex-col text-black">
                            <li className="py-2 px-4 ">Item 1</li>
                            <li className="py-2 px-4 ">Item 2</li>
                            <li className="py-2 px-4 ">Item 3</li>

                        </ul> */}
                        {list.map((option)=>{
                            return <div key={option.id}>
                                {option.child}
                                </div>
                        })}
                        </div>
                    )
                }              
        </div>

        </>
    )
}