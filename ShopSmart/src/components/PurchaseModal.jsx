
export default function PurchasModal({ modal, setModal, itemID }) {
  if (!modal || !itemID) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/50 bg-white p-6 shadow-2xl">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Product Details
            </p>
            <h2 className="text-xl font-bold text-slate-900">
              Product Preview
            </h2>
          </div>

          <button
            onClick={() => setModal(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
          >
            &times;
          </button>
        </div>

        {/* Product Image */}
        <div className="mb-5 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={itemID.thumbnail}
            alt={itemID.title}
            className="h-full w-full object-contain transition duration-300 hover:scale-105"
          />
        </div>

        {/* Product Information */}
        <div>
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-slate-900">
              {itemID.title}
            </h3>

            <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {itemID.availabilityStatus}
            </span>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-slate-500">
            {itemID.description}
          </p>

          <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div>
              <p className="text-xs text-slate-400">Price</p>
              <h3 className="text-2xl font-bold text-slate-900">
                ${itemID.price}
              </h3>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-400">Rating</p>
              <p className="font-semibold text-slate-700">
                ⭐ {itemID.rating}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setModal(false)}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              console.log("Added to cart:", itemID);
              setModal(false);
            }}
            className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700 active:scale-95"
          >
            Add to cart
          </button>
        </div>

      </div>
    </div>
  );
}
