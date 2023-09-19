import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const handleVaciar = () => {
        vaciarCarrito()
    }
    return (
        <div className="container">
            <h1 className="main-title">carrito</h1>
            
                {carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.titulo}</h3>
                        <p>precio unit: ${prod.precio}</p>
                        <p>precio total: ${prod.precio * prod.cantidad}</p>
                        <p>cant: {prod.cantidad}</p>
                    </div>
                ))
            }
            
            {
                  
                    carrito.length > 0 ?
                <>  
                    <h2>precio total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>vaciar </button>
                    <Link to="/checkout">finalizar compra</Link>
                </> :
                <h2>el carrito esta vacio</h2>
                
            }
           
        </div>
    )
}

export default Carrito