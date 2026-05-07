// src/componentes/layout/Footer.jsx
import styles from './Footer.module.css';
import { Nosotros } from '../Nosotros/Nosotros';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Nosotros />
            <p>&copy; 2025 - Mi Aplicación React</p>
        </footer>
    );
}

export default Footer;