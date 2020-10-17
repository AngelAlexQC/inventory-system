import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Campo, Enviar } from './styledComponents';

const NuevaCategoria = () => {
    const [nombre, setNombre] = useState('');

    const history = useHistory();

    const enviarFormulario = async (event) => {
        event.preventDefault();
        if(nombre === '') {
            return;
        }
        const categoria = {
            nombre
        }
        await axios.post('https://inventario.itsup-ec.com//api/category', categoria);
        history.push('/');
    };

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
 
export default NuevaCategoria;