import Header from './components/Header.jsx'
import CategoryChips from './components/CategoryChips.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import useFetch from './hooks/useFetch.jsx'

import './App.css'

function App() {

  const {data,loading,error} = useFetch("https://dummyjson.com/products")

  if (!data) {
    console.log("loading")
  }else{
      console.log(data.products)
  }
 

  return (
    <div className="bg-blue-100/30 w-full min-h-screen">
     <Header/>
     <ProductGrid
     data = {data}
     />
    </div>
  )
}

export default App
