import { Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/layout/Layout';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { FormularioContainer } from './componentes/FormularioContainer/FormularioContainer';
import { Ofertas } from './componentes/Ofertas/Ofertas';
import {Contacto} from './componentes/Contacto/Contacto';
import {Carrito} from './componentes/Carrito/Carrito'
function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Ofertas />} />
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/alta-producto" element={<FormularioContainer />} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/carrito" element={<Carrito/>} />
        
            </Route>
        </Routes>
    );
}
export default App;