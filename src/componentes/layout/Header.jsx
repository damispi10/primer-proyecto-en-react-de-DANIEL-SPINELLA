// src/componentes/layout/Header.jsx
import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {/* Logo */}
                <div className={styles.logo}>
                    <span className={styles.logoIcon}>🛍️</span>
                    <h1 className={styles.titulo}>MiAppReact</h1>
                </div>

                {/* Botón hamburguesa para mobile */}
                <button 
                    className={styles.hamburguesa} 
                    onClick={toggleMenu}
                    aria-label="Menú"
                >
                    <span className={`${styles.hamburguesaLinea} ${menuAbierto ? styles.activa : ''}`}></span>
                    <span className={`${styles.hamburguesaLinea} ${menuAbierto ? styles.activa : ''}`}></span>
                    <span className={`${styles.hamburguesaLinea} ${menuAbierto ? styles.activa : ''}`}></span>
                </button>

                {/* Navegación - SOLO VISUAL, NO HACE NADA */}
                <nav className={`${styles.nav} ${menuAbierto ? styles.navAbierto : ''}`}>
                    <ul className={styles.navLista}>
                        <li className={styles.navItem}>
                            <span className={styles.navLink}>
                                🏠 Inicio
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.navLink}>
                                📦 Productos
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.navLink}>
                                📞 Contacto
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.navLink}>
                                🛒 Carrito
                                <span className={styles.carritoCount}>0</span>
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.navLink}>
                                ➕ Alta Producto
                                <span className={styles.carritoCount}>0</span>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Subtítulo decorativo */}
            <div className={styles.subtituloContainer}>
                <p className={styles.subtitulo}>Productos seleccionados con dedicación y calidad premium</p>
            </div>
        </header>
    );
}

export default Header;