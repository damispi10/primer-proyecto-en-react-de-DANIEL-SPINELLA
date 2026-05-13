import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <span className={styles.logoIcon}>🛍️</span>
                    <h1 className={styles.titulo}>MiAppReact</h1>
                </div>
                <button 
                    className={styles.hamburguesa} 
                    onClick={toggleMenu}
                    aria-label="Menú"
                >
                    <span className={`${styles.hamburguesaLinea} ${menuAbierto ? styles.activa : ''}`}></span>
                    <span className={`${styles.hamburguesaLinea} ${menuAbierto ? styles.activa : ''}`}></span>
                    <span className={`${styles.hamburguesaLinea} ${menuAbierto ? styles.activa : ''}`}></span>
                </button>
                <nav className={`${styles.nav} ${menuAbierto ? styles.navAbierto : ''}`}>
                    <ul className={styles.navLista}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.navLink}>
                                🏠 Inicio
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/productos" className={styles.navLink}>
                                📦 Productos
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/contacto" className={styles.navLink}>
                                📞 Contacto
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/carrito" className={styles.navLink}>
                                🛒 Carrito
                                <span className={styles.carritoCount}>0</span>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/alta-producto" className={styles.navLink}>
                                ➕ Alta Producto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.subtituloContainer}>
                <p className={styles.subtitulo}>Productos seleccionados con dedicación y calidad premium</p>
            </div>
        </header>
    );
}
export default Header;