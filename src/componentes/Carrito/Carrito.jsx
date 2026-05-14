import { useCart } from '../../context/CartContext';
import { CartItem } from './CartItem';
import styles from './Carrito.module.css';

export function Carrito() {
    const { cart, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className={styles.container}>
                <h1 className={styles.titulo}>Carrito de Compras</h1>
                <p className={styles.vacio}>El carrito está vacío. Agrega productos para continuar la compra.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Carrito de Compras</h1>
            <p className={styles.subtitulo}>Revisá tus productos antes de comprar</p>
            <div className={styles.grid}>
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className={styles.footer}>
                <p className={styles.total}>
                    Total a pagar: <span className={styles.totalNumero}>${getCartTotal()}</span>
                </p>
                <button className={styles.vaciarBtn} onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    );
};

