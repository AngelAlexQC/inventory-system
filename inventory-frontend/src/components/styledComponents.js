import styled from '@emotion/styled';

export const Campo = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;

    input, select, textarea {
        padding: 0.5rem;
        flex-grow: 1;
    }

    textarea {
        resize: none;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;

        label {
            flex-basis: 20%;
        }
    }
`;

export const Enviar = styled.button`
    padding: 1rem;
    display: block;
    margin-top: 1rem;
    width: 100%;
    background-color: #a8dda8;
    color: black;
    font-weight: bold;
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;
    border: none;

    @media (min-width: 768px) {
        width: 300px;
        margin-left: auto;
    }
`;