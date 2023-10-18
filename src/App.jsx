import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>

      <Routes>
        <Route exact path="/products" element={<ItemListContainer />} />
        <Route exact path='/category/:categoryName' element={<ItemListContainer />} />
        <Route exact path='/products/:productId' element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
