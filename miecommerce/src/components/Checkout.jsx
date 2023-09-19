import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('');
  const [cliente, setCliente] = useState({ nombre: '', email: '', telefono: '' });

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const comprar = async () => {
    const pedido = {
      cliente,
      productos: carrito,
      total: precioTotal(),
    }

    try {
      const pedidosRef = collection(db, 'pedidos');
      const docRef = await addDoc(pedidosRef, pedido);
      console.log('ID del pedido:', docRef.id);
      setPedidoId(docRef.id);
      vaciarCarrito();
    } catch (error) {
      console.error('Error al agregar el pedido a Firestore:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  if (pedidoId) {
    // Mostrar el resumen de la compra después de la compra exitosa
    return (
      <div className="container">
        <h1 className="main-title">Resumen de la compra</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
        <h2>Detalle de la compra:</h2>
        <ul>
          {carrito.map((prod) => (
            <li key={prod.id}>
              {prod.titulo} - Cantidad: {prod.cantidad} - Precio Unitario: ${prod.precio} - Precio Total: ${prod.precio * prod.cantidad}
            </li>
          ))}
        </ul>
        <p>Precio Total: ${precioTotal()}</p>
      </div>
    )
  }

  // Mostrar el resumen de la orden de compra antes de la compra
  const resumenCompra = (
    <div className="resumen-compra">
      <h2>Resumen de la Orden de Compra</h2>
      <ul>
        {carrito.map((prod) => (
          <li key={prod.id}>
            {prod.titulo} - Cantidad: {prod.cantidad} - Precio Unitario: ${prod.precio} - Precio Total: ${prod.precio * prod.cantidad}
          </li>
        ))}
      </ul>
      <p>Precio Total: ${precioTotal()}</p>
    </div>
  );

  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>
      {resumenCompra}
      <form className="formulario" onSubmit={comprar}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          name="nombre"
          value={cliente.nombre}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          name="email"
          value={cliente.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          placeholder="Ingresá tu teléfono"
          name="telefono"
          value={cliente.telefono}
          onChange={handleInputChange}
        />

        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  )
}

export default Checkout;