import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import { Campo, Enviar } from './styledComponents';

const ActualizarCategoria = () => {
    const [nombre, setNombre] = useState('');

    const { id } = useParams();

    const history = useHistory();

    const enviarFormulario = async (event) => {
        event.preventDefault();
        if(nombre === '') {
            return;
        }
        const categoria = {
            nombre
        }
        await axios.put(`https://inventario.itsup-ec.com//api/category/${id}`, categoria);
        history.push('/categorias');
    };

    useEffect(() => {
        const recuperarDatosProducto = async () => {
            const getCategoria = await axios.get(`https://inventario.itsup-ec.com//api/category/${id}`)
            console.log(getCategoria.data.nombre);
            setNombre(getCategoria.data.nombre);
        }
        recuperarDatosProducto();
    }, []);

    return (
        <section>
            <h2 style={{
                textAlign: 'center'
            }}>Nueva Categoría</h2>

            <form onSubmit={enviarFormulario}>
                <fieldset>
                    <legend>Información de la Categoría</legend>
                    <Campo>
                        <label htmlFor="nombre">Nombre de la Categoría:</label>
                        <input id="nombre" type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </Campo>
                    
                </fieldset>
                <Enviar type="submit">Guardar Categoría</Enviar>
            </form>
        </section>
    );
}
 
export default ActualizarCategoria;