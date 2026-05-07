
import { useState } from 'react';
import styles from './Item.module.css';

export function Item({ id, nombre, precio, stock, imagen }) {
    const [cantidad, setCantidad] = useState(0);
    const [esFavorito, setEsFavorito] = useState(false);

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    const agregarAlCarrito = () => {
        if (cantidad > 0) {
            alert(`🛒 Agregaste ${cantidad} × ${nombre} al carrito\nTotal: $${precio * cantidad}`);
        } else {
            alert("📦 Seleccioná al menos 1 unidad para comprar");
        }
    };

    const marcarComoFavorito = (e) => {
        e.stopPropagation();
        setEsFavorito(!esFavorito);
    };

    const isLowStock = stock < 5;

    
    const imagenDefault = "https://via.placeholder.com/280x220/f8f6f3/c8c0b5?text=Sin+imagen";

    return (
        <div className={styles.itemCard}>
            <div 
                onClick={marcarComoFavorito}
                className={styles.favorito}
            >
                {esFavorito ? '⭐' : '☆'}
            </div>
            
            <div className={styles.imagenContainer}>
                <img 
                    src={imagen || imagenDefault} 
                    alt={nombre} 
                    className={styles.imagen}
                    loading="lazy"
                />
            </div>
            
            <div className={styles.contenido}>
                <div>
                    <h3 className={styles.nombre}>{nombre}</h3>
                    <div className={styles.precio}>{precio}</div>
                    
                    <div className={styles.stockInfo}>
                        <span className={`${styles.stock} ${isLowStock ? styles.stockBajo : ''}`}>
                            {isLowStock ? `⚠️ Últimas ${stock} unidades` : `📦 Stock: ${stock}`}
                        </span>
                    </div>
                </div>
                
                <div>
                    <div className={styles.selectorCantidad}>
                        <button onClick={decrementar}>−</button>
                        <span className={styles.cantidad}>{cantidad}</span>
                        <button onClick={incrementar}>+</button>
                    </div>
                    
                    <button 
                        onClick={agregarAlCarrito}
                        className={styles.botonCarrito}
                    >
                        🛒 Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}