import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => res.json())
            .then(data => {
                const producto = data.find(p => p.id === id);
                setItem(producto || null);
                setCargando(false);
            })
            .catch(() => setCargando(false));
    }, [id]);

    if (cargando) return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Cargando...</p>;
    if (!item) return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Producto no encontrado. <Link to="/productos">Volver</Link></p>;

    return <ItemDetail item={item} />;
}
