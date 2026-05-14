import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import { useCart } from '../../context/CartContext';
export function Item({ id, nombre, precio, stock, imagen }) {
    const [cantidad, setCantidad] = useState(0);
    const [esFavorito, setEsFavorito] = useState(false);
    const { addToCart, getItemQuantity } = useCart();
    const enCarrito = getItemQuantity(id);
    const disponible = stock - enCarrito;
    const incrementar = () => {
        if (cantidad < disponible) {
            setCantidad(cantidad + 1);
        }
    };
    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };
    const marcarComoFavorito = (e) => {
        e.stopPropagation();
        setEsFavorito(!esFavorito);
    };
    const isLowStock = disponible < 5;
    const imagenDefault = "https://via.placeholder.com/280x220/f8f6f3/c8c0b5?text=Sin+imagen";
    const handleAddToCart = () => {
        if (cantidad === 0) {
            alert("📦 Seleccioná al menos 1 unidad para comprar");
            return;
        }
        addToCart({ id, nombre, precio, stock, imagen }, cantidad);
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
        setCantidad(0);
    };
    return (
        <div className={styles.itemCard}>
            <div className={styles.imagenContainer}>
                <div className={styles.favorito} onClick={marcarComoFavorito}>
                    {esFavorito ? '⭐' : '☆'}
                </div>
                <img src={imagen || imagenDefault} alt={nombre} className={styles.imagen} />
            </div>
            <div className={styles.contenido}>
                <h3 className={styles.nombre}>{nombre}</h3>
                <p className={styles.precio}>${precio}</p>
                <span className={`${styles.stock} ${isLowStock ? styles.stockBajo : ''}`}>
                    {isLowStock ? `Solo quedan ${disponible}` : `Stock: ${disponible}`}
                </span>
                <div className={styles.selectorCantidad}>
                    <button onClick={decrementar}>−</button>
                    <span className={styles.cantidad}>{cantidad}</span>
                    <button onClick={incrementar}>+</button>
                </div>
                <button className={styles.botonCarrito} onClick={handleAddToCart}>
                    Agregar {cantidad} al carrito
                </button>
                <Link to={`/producto/${id}`}>Ver detalle</Link>
            </div>
        </div>
    );
}
export default Item;