import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import styles from './Ofertas.module.css';
export function Ofertas() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => res.json())
            .then(data => {
                const ordenados = [...data].sort((a, b) => a.precio - b.precio);
                setProductos(ordenados.slice(0, 2));
                setCargando(false);
            })
            .catch(() => setCargando(false));
    }, []);
    if (cargando) {
        return <p className={styles.mensaje}>Cargando ofertas...</p>;
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>🔥 Ofertas</h1>
            <p className={styles.subtitulo}>Los productos más económicos</p>
            <ItemList productos={productos} />
        </div>
    );
}