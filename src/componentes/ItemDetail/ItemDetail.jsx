import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemDetail.module.css';

export function ItemDetail({ item }) {
    const [cantidad, setCantidad] = useState(1);
    const { addToCart, getItemQuantity } = useCart();
    const enCarrito = getItemQuantity(item.id);
    const disponible = item.stock - enCarrito;

    const incrementar = () => {
        if (cantidad < disponible) setCantidad(cantidad + 1);
    };

    const decrementar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const handleAddToCart = () => {
        addToCart(item, cantidad);
        alert(`Agregaste ${cantidad} unidades de ${item.nombre} al carrito.`);
    };

    return (
        <div className={styles.detalle}>
            <img src={item.imagen} alt={item.nombre} className={styles.imagen} />
            <div className={styles.info}>
                <h2 className={styles.nombre}>{item.nombre}</h2>
                <p className={styles.precio}>${item.precio}</p>
                <p className={styles.stock}>Stock disponible: {disponible}</p>
                <div className={styles.selectorCantidad}>
                    <button onClick={decrementar}>−</button>
                    <span className={styles.cantidad}>{cantidad}</span>
                    <button onClick={incrementar}>+</button>
                </div>
                <button className={styles.botonCarrito} onClick={handleAddToCart}>
                    Agregar {cantidad} al carrito
                </button>
                <Link to="/productos" className={styles.volver}>← Volver a productos</Link>
            </div>
        </div>
    );
}
