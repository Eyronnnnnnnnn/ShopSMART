import { useState } from 'react'
import Header from './components/Header.jsx'
import CategoryChips from './components/CategoryChips.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import useFetch from './hooks/useFetch.jsx'
import PurchasModal from './components/PurchaseModal.jsx'

import './App.css'

function App() {

  const [cart ,setCart ] = useState();
  const [modal,setModal] = useState(true);

  const AddtocarsBtm = (id)=>{
    console.log(`Click ${id}`)
  }

  const {data,loading,error} = useFetch("https://dummyjson.com/products")
 console.log(data)
     if (loading ) { 
      console.log("CANT FETCH DATA")
      return <h1>cant fetch data</h1>
     }
  return (
     
    <div className="bg-blue-100/30 w-full min-h-screen">
      
     <Header/>
     <PurchasModal
     modal = {modal}
     setModal = {setModal}
     />
     <ProductGrid
     data = {data.products}
     AddtocarsBtm={AddtocarsBtm}
     />
    </div>
  )
}

export default App
