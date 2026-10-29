export default function CategoryChips(){

    const categories = [
        "beauty","Fragrance", "Furniture","Groceries"
    ]

    return(
        <div className="flex  h-20 items-end">

            <div>
                 <button 
              
                className="bg-white border-1 border-gray-300  rounded-xl ml-4 px-4 py-2 text-sm"
                > All</button>
            </div>
            <div >
             {categories.map((categories)=> (
                <button 
                key={categories}
                className=" bg-white border-1 border-gray-300  rounded-xl ml-4 px-9 py-2 text-sm"
                > {categories}</button>
            ))}
            </div>
          
        </div>
    )
}