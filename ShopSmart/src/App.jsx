import Header from './components/Header.jsx'
import CategoryChips from './components/CategoryChips.jsx'
import ProductGrid from './components/ProductGrid.jsx'

import './App.css'

function App() {
  return (
    <div className="bg-blue-100/30 w-full min-h-screen">
     <Header/>
     <ProductGrid/>
    </div>
  )
}

export default App
