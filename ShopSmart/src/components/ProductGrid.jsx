import CategoryChips from "./CategoryChips"

export default function  ProductGrid({data,AddtocarsBtm}){
    if(!data) {
        console.log("Cant Fetch Data")
        return <h1>Cant fetch dataa </h1>
    }
    return(
        <div className=" min-h-159">
            <CategoryChips/>
            <div className="min-h-134 w-full max-w-382 mx-auto flex flex-col lg:flex-row">
                {/* Left side */}
                <div className=" w-full lg:flex-1 p-5 ">
                    <div >
                        <h1 className="font-bold text-2xl text-black/90">All Products</h1>
                        <p className="text-gray-600 mb-5">Showing 6 of Total</p>
                    </div>
                        <div className="grid grid-cols-3 gap-3 h-[600px] overflow-y-auto">
                    {data.map((data) => (
    <div
        key={data.id}
        className="bg-white w-80 min-w-0 rounded-2xl p-3 shadow-sm border border-gray-200 hover:shadow-lg transition duration-300 flex flex-col"
    >
        {/* Product image */}
        <div className="bg-gray-100 w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center">
            <img
                src={data.thumbnail}
                alt={data.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
        </div>

        {/* Product details */}
        <div className="flex flex-col flex-1 mt-3">
            <h1 className="font-semibold text-sm text-gray-800 line-clamp-1">
                {data.title}
            </h1>

            <p className="text-xs text-gray-500 mt-1 capitalize">
                {data.category}
            </p>

            {/* Price and button */}
            <div className="flex justify-between items-center gap-2 mt-auto pt-4">
                <h1 className="font-bold text-lg text-gray-900">
                    ${data.price}
                </h1>

                <button
                onClick={()=>AddtocarsBtm(data.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg px-3 py-2 transition">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
))}
                      {/* Product Grid */}
                </div>
                </div>
                {/* right side */}
                <div className=" w-full lg:w-112 shrink-0 flex justify-center">

                    {/* Add to cart */}
                   <div className="bg-white w-85 h-80 rounded-lg  p-4">
                    <div>
                        <h1 className="font-bold text-lg">Your cart</h1>
                    </div>
                    {/* cart list */}
                    <div className=" h-37 ">
                       <div className="  mt-5 flex justify-between">
                        <div>
                        <p>Lash Mascara</p>
                        <p className="text-sm text-gray-500">$ 231</p>
                        </div>

                       <div className="00 w-38 gap-2 flex justify-end">
                        <div className=" w-13">
                           <button className=" bg-white-100 w-full h-full border-2 border-gray-800/20 rounded-lg">+</button>
                        </div>
                        <div className=" w-6 flex justify-center items-center">
                            <div>
                                <p>2</p>
                            </div>
                        </div>
                        <div className=" w-13">
                              <button className=" bg-white-100 w-full h-full border-2 border-gray-800/20 rounded-lg">+</button>
                        </div>
                       </div>
                       
                    </div>
                    </div>
                    <div className=" h-20 flex flex-col justify-between">
                        <div className="flex justify-between">
                           <div>
                            <h1 className="font-bold">TOTAL</h1>
                           </div>
                           <div>
                            <h1 className="font-bold">$ 231</h1>
                           </div>
                         
                        </div>
                          <div>
                            <div>
                                <button className="text-white bg-blue-600 w-full h-9 rounded-md font-bold ">CheckOut</button>
                            </div>
                          </div>
                    </div>
                   
                    <div>
                        
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
