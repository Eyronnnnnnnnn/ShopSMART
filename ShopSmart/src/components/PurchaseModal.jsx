export default function PurchasModal({modal,setModal}){

    if(!modal){return}

    return(
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30  p-4">

    <div className="w-full max-w-md rounded-2xl border border-white/40 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                Purchase Product
            </h2>

            <button 
            
            onClick={()=>setModal(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/40 text-xl text-gray-600 transition hover:bg-white/70">
                &times;
            </button>

        </div>

        {/* Content */}
        <div className="py-3">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 bg-white/40 shadow-sm">
                <span className="text-3xl">🛍️</span>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Are you sure?
            </h3>

            <p className="text-sm leading-relaxed text-gray-600">
                Do you want to proceed with this purchase?
                Please review your order before confirming.
            </p>

        </div>

        {/* Footer */}
        <div className="mt-6 flex gap-3">

            <button className="flex-1 rounded-2xl border border-white/50 bg-white/40 px-4 py-3 font-medium text-gray-800 shadow-sm transition hover:bg-white/70">
                Cancel
            </button>

            <button className="flex-1 rounded-2xl border border-blue-400/30 bg-blue-500/80 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600">
                Confirm
            </button>

        </div>

    </div>

</div>


    )
}