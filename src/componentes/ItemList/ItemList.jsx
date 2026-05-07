// src/componentes/ItemList/ItemList.jsx
import { Item } from "../Item/Item";
import styles from './ItemList.module.css';

export function ItemList({ productos }) {
    if (!productos || productos.length === 0) {
        return <p className={styles.sinProductos}>No hay productos disponibles</p>;
    }

    return (
        <div className={styles.listaProductos}>
            {productos.map(prod => (
                <Item 
                    key={prod.id} 
                    id={prod.id}
                    nombre={prod.nombre}
                    precio={prod.precio}
                    stock={prod.stock}
                    imagen={prod.imagen}
                />
            ))}
        </div>
    );
}