export default function Header() {
  return (
    <div className="bg-white w-screen h-23 flex">
      <div className="bg-amber-200 w-200 h-23 p-7 flex">
        <div>
            <h1 className="text-blue-600 font-bold text-2xl ">Shop</h1>
        </div>
         <div>
           <h1 className="text-black font-bold text-2xl">Smart</h1>
         </div>
       
        
      </div>

       <div className="bg-red-200 w-170 h-23  flex items-center">
        <div>
            <input 
            className="w-130 h-9 border-2  border-gray-200 rounded-lg"
            placeholder="Search Products "
            type="text" />
        </div>
      </div>
      
    </div>
  );
}
