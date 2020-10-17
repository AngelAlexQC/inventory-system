import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

const AddProducto = styled(Link)`
    display: block;
    background-color: #a8dda8;
    color: black;
    font-weight: bold;
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;

    @media (min-width: 768px) {
        width: 200px;
        margin-left: auto;
    }
`;

const Tabla = styled.table`
    width: 100%;
    margin-top: 2rem;

    th, td {
        border: 1px solid #e1e1e1;
        padding: 1rem;
    }
`;

const BotonEliminar = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    border: none;
    background-color: #931a25;
`;

const BotonActualizar = styled(Link)`
    display: inline-flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: black;
    border: none;
    background-color: #d2e603;
`;



const Productos = () => {
    const [productos, setProductos] = useState([]);

    const history = useHistory();

    useEffect(() => {
        const consultar = async () => {
            const response = await axios.get('https://inventario.itsup-ec.com//api/product');
            const data = response.data.map(producto => ({
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                stock: producto.stock,
                precio: producto.precio,
                costo: producto.precio,
                id: producto.id
            }))
            setProductos(data);
        }
        consultar();
    }, []);

    const eliminarProducto = async (id) => {
        console.log('hola', id);
        await axios.delete(`https://inventario.itsup-ec.com//api/product/${id}`);
        history.go(0);
    }

    return (
        <div>
            <h2 style={{
                textAlign: 'center'
            }}>Listado de Productos</h2>

            <AddProducto to={`/nuevo-producto`}>Nuevo Producto</AddProducto>

            <div style={{
                overflowX: 'auto'
            }}>
                <Tabla>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Stock</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (productos.length === 0) ? (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center' }}>No hay productos</td>
                                </tr>
                            ) : (
                                productos.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.stock}</td>
                                        <td>{producto.descripcion}</td>
                                        <td>{producto.precio}</td>
                                        <td style={{
                                            textAlign: "center"
                                        }}>
                                            <BotonEliminar onClick={() => eliminarProducto(producto.id)}><i className="fas fa-trash"></i></BotonEliminar>
                                            <span style={{
                                                margin: '0 10px'
                                            }}></span>
                                            <BotonActualizar to={`/actualizar-producto/${producto.id}`}><i className="fas fa-pen"></i></BotonActualizar>
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </Tabla>
            </div>
        </div>
    );
}
 
export default Productos;