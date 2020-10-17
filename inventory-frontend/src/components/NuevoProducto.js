import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Campo, Enviar } from './styledComponents';

const NuevoProducto = () => {
    const [nombre, setNombre] = useState('');
    const [stock, setStock] = useState(10);
    const [precio, setPrecio] = useState(1);
    const [costo, setCosto] = useState(1);
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categorias, setCategorias] = useState([])

    const history = useHistory();

    const enviarFormulario = async (event) => {
        event.preventDefault();
        if(nombre === '' && categoria === null) {
            return;
        }
        const producto = {
            nombre,
            category_id: categoria,
            descripcion,
            precio,
            costo,
            stock
        }
        await axios.post('https://inventario.itsup-ec.com//api/product', producto);
        history.push('/')
    };

    const guardarCategoria = event => {
        setCategoria(event.target.value - 0) // se resta 0 para pasear el value a numero
    }

    useEffect(() => {
        const consultar = async () => {
            const response = await axios.get('https://inventario.itsup-ec.com//api/category');
            console.log(response.data);
            setCategorias(response.data);
        }
        consultar();
    }, []);

    return (
        <section>
            <h2 style={{
                textAlign: 'center'
            }}>Nuevo Producto</h2>

            <form onSubmit={enviarFormulario}>
                <fieldset>
                    <legend>Información del Producto</legend>
                    <Campo>
                        <label htmlFor="nombre">Nombre del Producto:</label>
                        <input id="nombre" type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </Campo>
                    <Campo>
                        <label htmlFor="costo">Costo:</label>
                        <input id="costo" type="number" value={costo} onChange={e => setCosto(e.target.value - 0)} />
                    </Campo>
                    <Campo>
                        <label htmlFor="precio">Precio:</label>
                        <input id="precio" type="number" value={precio} onChange={e => setPrecio(e.target.value - 0)} />
                    </Campo>
                    <Campo>
                        <label htmlFor="stock">Stock:</label>
                        <input id="stock" type="number" min="10" value={stock} onChange={e => setStock(e.target.value - 0)} />
                    </Campo>
                    
                    <Campo>
                        <label htmlFor="categoria">Categoría:</label>
                        <select value={categoria} onChange={e => guardarCategoria(e)}>
                            <option value={null}>-- Seleccione --</option>
                            {
                                (categorias.length > 0) && (
                                    categorias.map(categoria => (
                                        <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                                    ))
                                )
                            }
                        </select>
                    </Campo>
                    <Campo>
                        <label htmlFor="">Descripción:</label>
                        <textarea id="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    </Campo>
                </fieldset>
                <Enviar type="submit">Guardar Producto</Enviar>
            </form>
        </section>
    );
}
 
export default NuevoProducto;