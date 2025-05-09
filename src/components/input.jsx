
import clsx from "clsx";
import { useId } from "react";


export function Input({
    type = "text",
    placeholder = "Enter text",
    required,
    ...restInput
}) {
    const id = useId();
     

    return (
        <>
    
            {/* Input Field */}
            <div className="relative inline-block">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...restInput}
                    className={clsx(
                        "py-2 px-3 text-black border border-neutral-500 rounded-none outline-none",
                        "focus:border-b-4 focus:border-b-fuchsia-800 focus:shadow-[0px_1px_0px_0px_8a0194]",
                        {
                            "pr-6": required,
                        }
                    )}
                />
                {required && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500">
                        (*)
                    </span>
                )}
                
            </div>


        


        </>
    );
}