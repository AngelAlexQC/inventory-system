import React from 'react';
import styled from '@emotion/styled';

import { Link } from 'react-router-dom'

const HeaderStyled = styled.header`
    background-color: #2d6187;
    color: white;
`;

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    font-size: 2rem;
`;

const Navbar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        display: block;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        color: white;
        text-decoration: none;
    }

    @media (min-width: 768px) {
        flex-direction: row;

        a {
            margin-bottom: 0;
            margin-right: 1rem;

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderContainer>
                <Logo>AI FCI</Logo>
                <Navbar>
                    <Link to="/">Productos</Link>
                    <Link to="/categorias">Categorías</Link>
                    {/* <Link to="/ventas">Ventas</Link> */}
                </Navbar>
            </HeaderContainer>
        </HeaderStyled>
    );
}
 
export default Header;