import React from 'react';
import { Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-around" style={{ height: '60vh', width: '100%' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.8805241237774!2d19.072239376432698!3d50.275489399946125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d0216e32ae57%3A0xe947a3841e17b694!2sGRADEM%20USUWANIE%20WGNIECE%C5%83!5e0!3m2!1spl!2spl!4v1725996210784!5m2!1spl!2spl"
                style={{ border: "0", width: '100%', height: '100%', maxHeight: '350px', maxWidth: '600px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            ></iframe>
        </Container>
    );
};

export default Navigation;
