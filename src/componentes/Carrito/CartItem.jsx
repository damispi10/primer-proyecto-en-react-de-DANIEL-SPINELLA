import { useCart } from '../../context/CartContext';
import styles from './CartItem.module.css';

export function CartItem({ item }) {
    const { updateQuantity, removeFromCart } = useCart();
    const imagenDefault = "https://via.placeholder.com/280x220/f8f6f3/c8c0b5?text=Sin+imagen";

    return (
        <div className={styles.card}>
            <img src={item.imagen || imagenDefault} alt={item.nombre} className={styles.imagen} />
            <div className={styles.contenido}>
                <h3 className={styles.nombre}>{item.nombre}</h3>
                <p className={styles.precio}>${item.precio}</p>
                <div className={styles.selectorCantidad}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span className={styles.cantidad}>{item.quantity}</span>
                    <button
                        onClick={() => {
                            if (item.quantity >= item.stock) {
                                alert(`Solo hay ${item.stock} unidades disponibles de ${item.nombre}.`);
                                return;
                            }
                            updateQuantity(item.id, item.quantity + 1);
                        }}
                    >+</button>
                </div>
                <p className={styles.subtotal}>Subtotal: ${item.precio * item.quantity}</p>
                <button className={styles.eliminar} onClick={() => removeFromCart(item.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}
