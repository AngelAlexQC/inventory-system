import React from 'react';
import styled from '@emotion/styled'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import NuevoProducto from './components/NuevoProducto';
import NuevaCategoria from './components/NuevaCategoria';
import Productos from './components/Productos';
import Categorias from './components/Categorias';
import ActualizarProducto from './components/ActualizarProducto';
import ActualizarCategoria from './components/ActualizarCategoria';
import Footer from './components/Footer';

const Contendor = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Contendor>
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/categorias" component={Categorias} />
            <Route exact path="/nuevo-producto" component={NuevoProducto} />
            <Route exact path="/actualizar-producto/:id" component={ActualizarProducto} />
            <Route exact path="/actualizar-categoria/:id" component={ActualizarCategoria} />
            <Route exact path="/nueva-categoria" component={NuevaCategoria} />
          </Switch>
        </Contendor>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
