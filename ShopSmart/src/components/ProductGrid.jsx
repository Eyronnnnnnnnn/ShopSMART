import CategoryChips from "./CategoryChips"

export default function  ProductGrid(){
    return(
        <div className="bg-amber-400 h-159">
            <CategoryChips/>
            <div className="bg-blue-600 h-134 flex">
                {/* Left side */}
                <div className="bg-blue-300 w-270 p-5">
                    <div>
                        <h1 className="font-bold text-2xl text-black/90">All Products</h1>
                        <p className="text-gray-600">Showing 6 of Total</p>
                    </div>
                </div>
                {/* right side */}
                <div className="bg-amber-600 w-112">ds</div>
            </div>
        </div>
    )
}