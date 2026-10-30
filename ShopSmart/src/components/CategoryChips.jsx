import { memo } from "react"
 const CategoryChips = memo(function CategoryChips(){
      const categories = [
        "Beauty","Fragrance", "Furniture","Groceries"
    ]

   
 return(

    
        <div className="flex flex-wrap min-h-14 items-end gap-3 p-4">

            <div>
                 <button 
              
                className="bg-blue-700 text-white border-1 border-gray-300 rounded-xl px-4 py-2 text-sm"
                > All</button>
            </div>
            <div className="flex flex-wrap gap-3">
             {categories.map((categories)=> (
                <button 
                key={categories}
                className="bg-white border-1 border-gray-300 rounded-xl px-4 sm:px-9 py-2 text-sm"
                > {categories}</button>
            ))}
            </div>
          
        </div>
    )
 })

  

export default CategoryChips