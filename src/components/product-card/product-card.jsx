export function ProductCard({ img, title, description, price }) {

    return (
        <><div  className="bg-[#F8F8F8]" >
            <div className="card-header ">
                <img className="w-full h-full pt-[45px] px-[57px]"
                    src={img.src} alt={img.alt} />
            </div>
            <div className="card-body pt-[30px] pl-[23px]">
                <h3 className="font-light text-2xl">{title}</h3>
                <p className="text-[#CBC9C9] font-light text-xl mt-2 line-clamp-3">{description}</p>
            </div>
            <div className="card-footer grid grid-cols-2 h-[60px] mt-[13px]" >
                <button className="bg-[#E1B067] font-extralight text-2xl cursor-pointer ">
                    Buy
                </button>
                <button className="bg-[#DEDDDC] font-semibold text-2xl cursor-pointer">
                    {price}$
                </button>
            </div>
        </div>

        </>
    )
}