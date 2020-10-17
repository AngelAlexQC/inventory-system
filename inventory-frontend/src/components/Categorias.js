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



const Categorias = () => {
    const [categorias, setCategorias] = useState([]);

    const history = useHistory();

    useEffect(() => {
        const consultar = async () => {
            const response = await axios.get('https://inventario.itsup-ec.com//api/category');
            const data = response.data.map(categoria => ({
                nombre: categoria.nombre,
                id: categoria.id
            }))
            setCategorias(data);
        }
        consultar();
    }, []);

    return (
        <div>
            <h2 style={{
                textAlign: 'center'
            }}>Listado de Categorias</h2>

            <AddProducto to={`/nueva-categoria`}>Nueva Categoría</AddProducto>

            <div style={{
                overflowX: 'auto'
            }}>
                <Tabla>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (categorias.length === 0) ? (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center' }}>No hay Categorias</td>
                                </tr>
                            ) : (
                                categorias.map(categoria => (
                                    <tr key={categoria.id}>
                                        <td>{categoria.id}</td>
                                        <td>{categoria.nombre}</td>
                                        <td style={{
                                            textAlign: "center"
                                        }}>
                                            <BotonActualizar to={`/actualizar-categoria/${categoria.id}`}><i className="fas fa-pen"></i></BotonActualizar>
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
 
export default Categorias;