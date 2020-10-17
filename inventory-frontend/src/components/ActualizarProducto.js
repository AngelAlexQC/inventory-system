import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import { Campo, Enviar } from './styledComponents';

const ActualizarProducto = () => {
    const [producto, setProducto] = useState(null);
    const [nombre, setNombre] = useState('');
    const [stock, setStock] = useState(10);
    const [precio, setPrecio] = useState(undefined);
    const [costo, setCosto] = useState(undefined);
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categorias, setCategorias] = useState([]);

    const { id } = useParams();

    const history = useHistory();

    const enviarFormulario = async (event) => {
        event.preventDefault();
        if(nombre === '' && categoria === null) {
            return;
        }
        const productoActualizado = {
            nombre,
            category_id: categoria,
            descripcion,
            precio,
            costo,
            stock
        }
        await axios.put(`https://inventario.itsup-ec.com//api/product/${id}`, productoActualizado);
        history.push('/')
    };

    const guardarCategoria = event => {
        setCategoria(event.target.value - 0) // se resta 0 para pasear el value a numero
    }


    useEffect(() => {
        const recuperarDatosProducto = async () => {
            const getProducto = await axios.get(`https://inventario.itsup-ec.com//api/product/${id}`)
            const response = await axios.get('https://inventario.itsup-ec.com//api/category');
            console.log(getProducto.data);
            setProducto(getProducto.data);
            setNombre(getProducto.data.nombre);
            setStock(getProducto.data.stock);
            setPrecio(getProducto.data.precio);
            setCosto(getProducto.data.costo);
            setCategoria(getProducto.data.category_id);
            setDescripcion(getProducto.data.descripcion);
            setCategorias(response.data);
        }
        recuperarDatosProducto();
    }, []);

    return (
        <section>
            <h2 style={{
                textAlign: 'center'
            }}>Actualizar Producto</h2>

            {
                (producto === null) ? null : (
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
                )
            }
        </section>
    );
}
 
export default ActualizarProducto;