import CategoryChips from "./CategoryChips";

export default function ProductGrid({
  data,
  AddtocarsBtm,
  setModal,
  ModalInfo,
  cart,
}) {
  if (!data) {
    console.log("Cant Fetch Data");
    return <h1>Cant fetch dataa </h1>;
  }
  return (
    <div className=" min-h-159">
      <CategoryChips />
      <div className="min-h-134 w-full max-w-382 mx-auto flex flex-col lg:flex-row">
        {/* Left side */}
        <div className=" w-full lg:flex-1 p-5 ">
          <div>
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
                  <p className="text-xs text-gray-500 mt-1 capitalize">
                    {" "}
                    ⭐{data.rating}
                  </p>

                  {/* Price and button */}
                  <div className="flex justify-between items-center gap-2 mt-auto pt-4">
                    <h1 className="font-bold text-lg text-gray-900">
                      ${data.price}
                    </h1>

                    <button
                      onClick={() => {
                        setModal(true);
                        ModalInfo(data);
                        AddtocarsBtm(data.id, data.title, data.price,data.thumbnail);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg px-3 py-2 transition"
                    >
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

        <divs className=" w-full lg:w-112 shrink-0 flex justify-center">
          {/* Add to cart */}
          <div className="bg-white w-85 h-80 rounded-lg  p-4">
            <div>
              <h1 className="font-bold text-lg">Your cart</h1>
            </div>
            {/* cart list */}
            {/* Cart List - Scrollable */}
            <div className="h-52 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 py-3 border-b border-gray-100"
                >
                  {/* Mini Product Image */}
                  <div className="w-12 h-12 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm text-gray-800 truncate">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>

                  {/* Quantity Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="w-7 h-7 border border-gray-300 rounded-lg hover:bg-gray-100">
                      -
                    </button>

                    <p className="w-5 text-center text-sm">{item.quantity}</p>

                    <button className="w-7 h-7 border border-gray-300 rounded-lg hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="mt-auto pt-3 border-t border-gray-200">
              <div className="flex justify-between mb-3">
                <h1 className="font-bold">TOTAL</h1>

                <h1 className="font-bold">
                  $
                </h1>
              </div>

              <button className="text-white bg-blue-600 hover:bg-blue-700 w-full h-9 rounded-md font-bold">
                CheckOut
              </button>
            </div>

            <div></div>
          </div>
        </divs>
      </div>
    </div>
  );
}
