
import { Carousel } from "../../components/carousel/carousel"
export function Hero(){
    return (

        <>
            <div className="h-[500px] relative">
                <Carousel 
                list ={[
                {img: "https://i.pravatar.cc/?u=1" , title:"",description:""}
                ,{img:"https://i.pravatar.cc/?u=2" , title:"",description:""},
                {img:"https://i.pravatar.cc/?u=4" , title:"",description:""},
                {img:"https://i.pravatar.cc/?u=5" , title:"",description:""},
                {img:"https://i.pravatar.cc/?u=6" , title:"",description:""},
                {img:"https://i.pravatar.cc/?u=7" , title:"",description:""},
                {img:"https://i.pravatar.cc/?u=8" , title:"",description:""},
               
                ]}
                title="Product Name"
                description="Product Description ...."
                />

                <img src="./carousel.png" className="w-full absolute bottom-0 right-0 left-0 -z-10"/>
            </div>
        </>
    )
}