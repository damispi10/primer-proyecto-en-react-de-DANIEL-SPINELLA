import React from 'react';
import styles from './FormularioProducto.module.css';
export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen }) {
    return (
        <form className={styles.form} onSubmit={manejarEnvio}>
            <h3 className={styles.titulo}>
                Agregar Nuevo Producto
            </h3>
            <div>
                <label className={styles.label}>Nombre del Producto</label>
                <input
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                    className={styles.input}
                />
            </div>
            <div>
                <label className={styles.label}>Precio ($)</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                    className={styles.input}
                />
            </div>
            <div>
                <label className={styles.label}>Imagen del producto</label>
                <input
                    type="file"
                    accept="image/*"
                    name="imagen"
                    onChange={manejarCambioImagen}
                    className={`${styles.input} ${styles.inputFile}`}
                />
            </div>
            <button type="submit" className={styles.boton}>
                Guardar Producto
            </button>
        </form>
    );
}