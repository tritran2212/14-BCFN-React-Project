
import clsx from "clsx"
import { useState } from "react"

export function SelectGender(){
    const  [selected , setSelected] =useState(null);

    return (
        <>
             <div className={clsx('flex items-center ')}>
                <h3>Gender</h3>
                <p className={clsx("flex items-center justify-center pr-3 ml-3")}>
                    <div className={clsx("w-9 h-9 bg-gray-300 rounded-full flex items-center  justify-center")} onClick={()=> setSelected("male")}>
                        { selected === "male"&& ( <div className="w-5 h-5 bg-purple-700 rounded-full"></div>)}
                    </div>
                    <span className={clsx("ml-3")}>Male</span>
                </p>
                <p className={clsx("flex items-center justify-center")}>
                    <div className={clsx("w-9 h-9 bg-gray-300 rounded-full flex items-center  justify-center")} onClick={()=> setSelected("female")}>
                        { selected === "female"&& ( <div className="w-5 h-5 bg-purple-700 rounded-full"></div>)}
                    </div>
                    <span className={clsx("ml-3")}>Female</span>
                </p>
             </div>

        </>
    )

}