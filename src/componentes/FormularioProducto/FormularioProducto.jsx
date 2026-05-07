
import React from 'react';

export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen }) {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '480px',
        margin: '3rem auto',
        padding: '2rem 2rem 2.2rem',
        border: 'none',
        borderRadius: '28px',
        gap: '20px',
        background: '#ffffff',
        boxShadow: '0 12px 28px -8px rgba(0, 0, 0, 0.06)',
    };

    const labelStyle = {
        fontSize: '0.85rem',
        fontWeight: '450',
        color: '#2c3e35',
        marginBottom: '6px',
        display: 'block',
        letterSpacing: '0.3px',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 14px',
        border: '1px solid #e2dcd5',
        borderRadius: '18px',
        fontSize: '0.9rem',
        background: '#fefefc',
        transition: 'all 0.2s',
        boxSizing: 'border-box',
        outline: 'none',
    };

    const buttonStyle = {
        background: '#1e2f2a',
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '40px',
        fontSize: '0.9rem',
        fontWeight: '450',
        cursor: 'pointer',
        marginTop: '10px',
        letterSpacing: '0.4px',
        transition: 'background 0.2s',
    };

    return (
        <form style={formStyle} onSubmit={manejarEnvio}>
            <h3 style={{ textAlign: 'center', margin: '0 0 0.5rem', color: '#1e2f2a', fontWeight: '450', letterSpacing: '-0.3px' }}>
                Agregar Nuevo Producto
            </h3>
            <div>
                <label style={labelStyle}>Nombre del Producto</label>
                <input
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#c8a06e'}
                    onBlur={(e) => e.target.style.borderColor = '#e2dcd5'}
                />
            </div>
            <div>
                <label style={labelStyle}>Precio ($)</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#c8a06e'}
                    onBlur={(e) => e.target.style.borderColor = '#e2dcd5'}
                />
            </div>
            <div>
                <label style={labelStyle}>Imagen del producto</label>
                <input
                    type="file"
                    accept="image/*"
                    name="imagen"
                    onChange={manejarCambioImagen}
                    style={{ ...inputStyle, padding: '8px 10px' }}
                />
            </div>
            <button 
                type="submit" 
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.background = '#2a423b'}
                onMouseLeave={(e) => e.target.style.background = '#1e2f2a'}
            >
                Guardar Producto
            </button>
        </form>
    );
}