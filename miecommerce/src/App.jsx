import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import "./main.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext"
import Carrito from "./components/Carrito"
import Checkout from "./components/Checkout";


function App() {


   return (
     <CartProvider>
       <BrowserRouter>
         <NavBar />
         <Routes>
           <Route path="/" element={<ItemListContainer />} />
           <Route path="/item/:id" element={<ItemDetailContainer />} />
           <Route path="/productos" element={<ItemListContainer />} />
           <Route path="/productos/:categoria" element={<ItemListContainer />} />
           <Route path="/carrito" element={<Carrito />} />
           <Route path="/checkout" element={<Checkout />} />
         </Routes>
       </BrowserRouter>
     </CartProvider>
     
  )
}



export default App
