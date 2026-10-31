import { useState } from "react";
import Header from "./components/Header.jsx";
import CategoryChips from "./components/CategoryChips.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import useFetch from "./hooks/useFetch.jsx";
import PurchasModal from "./components/PurchaseModal.jsx";
import ErrorModal from "./components/errorModal.jsx";

import "./App.css";

function App() {
  // const [cart ,setCart ] = useState(null);
  const [modal, setModal] = useState(false);
  const [itemID, setItemID] = useState(null);

  const AddtocarsBtm = (id) => {
    console.log(`Click ${id}`);
  };

  const ModalInfo = (modalData) => {
    setItemID(modalData);
  };

  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  console.log(data);
  if (loading) {
    console.log("CANT FETCH DATA");
    return (
      <div>
        <ErrorModal 
        loading = { loading}
        />
      </div>
    );
  }
  return (
    <div className="bg-blue-100/30 w-full min-h-screen">
      <Header />
      <ErrorModal loading={loading} />
      <PurchasModal modal={modal} setModal={setModal} itemID={itemID} />
      <ProductGrid
        data={data.products}
        AddtocarsBtm={AddtocarsBtm}
        setModal={setModal}
        ModalInfo={ModalInfo}
      />
    </div>
  );
}

export default App;
