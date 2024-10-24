import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselTop from '../../components/CarouselTop/CarouselTop';
import CarouselBottom from '../../components/CarouselBottom/CarouselBottom';
import Interline from '../../components/Interline/Interline';
import Card from 'react-bootstrap/Card';
import settings from '../../settings/settings';
import InterlineSmall from '../../components/InterlineSmall/InterlineSmall';

const Offer = () => {

    const drawings = settings.images.carouselBottom;
    return (
      
        
        <Container fluid className="d-flex flex-column align-items-baseline justify-content-around" style={{ height: '72vh' }}>
          
          <Row className="justify-content-center align-self-center w-100" style={{ height: '1fr'}}>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-center" style={{ minWidth: '90vw'}}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  borderRadius: '20px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                  padding: '20px 0',
                }}
              >
                
                <div className="d-flex align-items-center justify-content-center" style={{ height: 'auto' }}>
                    <Card style={{ width: '100%', height: 'auto', margin: '0 auto' , background:'var(--brand-color)'}}>
                        <Card.Img variant="top" src={drawings[0]} style={{ width: '10vw', height: 'auto', margin: '2px auto 0 auto' }} />
                        <Card.Body>
                            <Card.Text style={{textAlign:'center', color:"#EF7F1B", fontSize:'12px'}}>
                                Usuwanie wgnieceń karoserii 
                                <p style={{fontSize:'10px', color:'white'}}>
                                    <br/>
                                    gradobicia<br/>
                                    spadających przedmiotów<br/>
                                    aktów wandalizmu<br/>
                                    szkód parkingowych
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                

                <div className="d-flex align-items-center justify-content-center" style={{ height: 'auto' }}>
                    <Card style={{ width: '100%', height: 'auto', margin: '0 auto' , background:'var(--brand-color)'}}>
                        <Card.Img variant="top" src={drawings[0]} style={{ width: '10vw', height: 'auto', margin: '2px auto 0 auto' }} />
                        <Card.Body>
                            <Card.Text style={{textAlign:'center', color:"#EF7F1B", fontSize:'12px'}}>
                                Renowacja lakieru
                                <p style={{fontSize:'10px', color:'white'}}>
                                    <br/>
                                    usuwanie drobnych zarysowań<br/>
                                    polerowanie karoserii<br/>
                                    zabezpieczenie, konserwacja lakieru<br/>
                                    pomiar grubości powłoki lakierniczej
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="d-flex align-items-center justify-content-center" style={{ height: 'auto' }}>
                    <Card style={{ width: '100%', height: 'auto', margin: '0 auto' , background:'var(--brand-color)'}}>
                        <Card.Img variant="top" src={drawings[0]} style={{ width: '10vw', height: 'auto', margin: '2px auto 0 auto' }} />
                        <Card.Body>
                            <Card.Text style={{textAlign:'center', color:"#EF7F1B", fontSize:'12px'}}>
                                Samochód zastępczy
                                <p style={{fontSize:'10px', color:'white'}}>
                                    <br/>
                                    oferujemy samochód zastępczy na czas trwania naprawy
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                

                

              </div>
            </Col>
          </Row>
          <Interline />
          
        </Container>
      
    );
  };

export default Offer;
