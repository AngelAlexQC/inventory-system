import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear();
    
    return (
        <footer style={{
            padding: '1rem',
            marginTop: '1rem',
            backgroundColor: '#2d6187',
            color: 'white'
        }}>
            <p style={{
                textAlign: 'center'
            }}>Mu&ntilde;oz Jhonny, Quiroz Angel, Zambrano Regynald &copy; {year}</p>
        </footer>
    );
}
 
export default Footer;