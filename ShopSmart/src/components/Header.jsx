export default function Header({cart}) {
  return (
    <div className="bg-white w-full min-h-23 flex flex-col md:flex-row">
    <div className="w-full md:w-auto p-4 md:p-7 flex justify-center md:justify-start shrink-0">
        <div>
            <h1 className="text-blue-600 font-bold text-2xl  ">Shop</h1>
        </div>
         <div>
           <h1 className="text-black font-bold text-2xl">Smart</h1>
         </div>
       
        
      </div>
     

       <div className=" w-full md:flex-1 px-4 md:px-0 py-3 md:py-0 flex items-center justify-end">
        <div className="w-full md:w-148">
            <input 
            className="w-full max-w-232 h-10 border-2 border-gray-200 rounded-lg pl-4"
            placeholder="Search Products "
            type="text" />
        </div>
      </div>

      <div className=" bg-amber-400w-full md:w-auto px-4 md:px-7 py-3 md:py-0 flex items-center justify-center gap-5 shrink-0">
        <div className="border-2 border-gray-300 w-15 h-10 rounded-lg flex justify-center items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"/></svg>
            <p>3</p>
        </div>
        <div className=" border-2 border-gray-300 w-15 h-10 rounded-lg  flex items-center justify-center gap-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"/></svg>
            <p>{cart.length}</p>
        </div>
      </div>
      
    </div>
  );
}
