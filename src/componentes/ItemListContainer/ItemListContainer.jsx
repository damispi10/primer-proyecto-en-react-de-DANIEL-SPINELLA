// src/componentes/ItemListContainer/ItemListContainer.jsx
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import styles from './ItemListContainer.module.css';

export function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pudo cargar los productos');
                }
                return res.json();
            })
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return (
            <div className={styles.container}>
                <h1 className={styles.titulo}>Nuestros Productos</h1>
                <p className={styles.subtitulo}>Descubrí nuestra colección exclusiva</p>
                <div className={styles.mensaje}>
                    Cargando productos exclusivos...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <h1 className={styles.titulo}>Nuestros Productos</h1>
                <div className={styles.error}>
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Nuestros Productos</h1>
            <p className={styles.subtitulo}>Descubrí nuestra colección exclusiva</p>
            <ItemList productos={productos} />
        </div>
    );
}