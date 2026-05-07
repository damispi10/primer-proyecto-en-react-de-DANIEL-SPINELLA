
import { Layout } from './componentes/layout/Layout';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { FormularioContainer } from './componentes/FormularioContainer/FormularioContainer';

function App() {
    return (
        <Layout>
            <ItemListContainer />
            <FormularioContainer />
        </Layout>
    );
}

export default App;