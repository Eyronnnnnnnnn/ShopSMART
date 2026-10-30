import CategoryChips from "./CategoryChips"

export default function  ProductGrid({data}){
    if(!data) {
        console.log("Cant Fetch Data")
        
    }
    return(
        <div className=" min-h-159">
            <CategoryChips/>
            <div className="bg-blue-600 min-h-134 w-full max-w-382 mx-auto flex flex-col lg:flex-row">
                {/* Left side */}
                <div className="bg-blue-300 w-full lg:flex-1 p-5 ">
                    <div >
                        <h1 className="font-bold text-2xl text-black/90">All Products</h1>
                        <p className="text-gray-600 mb-5">Showing 6 of Total</p>
                    </div>
                        <div className="grid grid-cols-3 gap-3">
                    {data.map((data)=>(
                         
                     <div key={data.id} className="bg-fuchsia-600 w-60 h-64 rounded-2xl p-3">
                        {/* image */}
                        <div className="bg-amber-400 w-full min-h-36 rounded-2xl">
                            
                        </div>
                         <h1 className="font-bold ">Lash Mascara</h1>
                         <p className="text-xs">Beauty</p>
                         <div className=" bg-amber-400 flex justify-between items-end  min-h-11">
                            <div className="">
                               
                                      <h1>$ 120</h1>
                                
                                    
                            </div>
                           <div>
                                    <button className="bg-blue-500 rounded-md h-8 w-25">Add to cart</button>
                           </div>
                           
                         </div>
                     </div>
                   
                    ))}
                      {/* Product Grid */}
                </div>
                </div>
                {/* right side */}
                <div className="bg-amber-600 w-full lg:w-112 shrink-0">ds</div>
            </div>
        </div>
    )
}
