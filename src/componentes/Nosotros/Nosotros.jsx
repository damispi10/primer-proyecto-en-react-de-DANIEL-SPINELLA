// src/componentes/Nosotros/Nosotros.jsx
import { useState, useEffect } from 'react';
import styles from './Nosotros.module.css';

export function Nosotros() {
    const [nosotros, setNosotros] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/nosotros.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información del equipo');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setNosotros(datos);
                setCargando(false);
            })
            .catch((error) => {
                setError(error.message);
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return (
            <div className={styles.nosotros}>
                <h3>Nuestro Equipo</h3>
                <div className={styles.mensaje}>
                    Conociendo a nuestro equipo...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.nosotros}>
                <h3>Nuestro Equipo</h3>
                <div className={styles.error}>
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.nosotros}>
            <h3>Nuestro Equipo</h3>
            <div className={styles.equipo}>
                {nosotros.map((persona) => (
                    <div key={persona.id} className={styles.miembro}>
                        <img 
                            src={persona.foto} 
                            alt={persona.nombre} 
                            className={styles.foto}
                        />
                        <h4>{persona.nombre}</h4>
                        <p className={styles.puesto}>{persona.puesto}</p>
                        <p className={styles.email}>{persona.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}