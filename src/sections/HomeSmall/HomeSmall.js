import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselTop from '../../components/CarouselTop/CarouselTop';
import CarouselBottom from '../../components/CarouselBottom/CarouselBottom';
import InterlineSmall from '../../components/InterlineSmall/InterlineSmall';

const HomeSmall = () => {
    return (
        <Container fluid className="d-flex flex-column align-items-baseline justify-content-around" style={{ height: '72vh', maxWidth:"1400px" }}>
          
          <Row className="justify-content-center align-self-center w-100" style={{ height: '1fr'}}>
            <Col xs={12} md={8} className="d-flex justify-content-center" style={{ maxWidth: '1200px'}}>
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
                {/* Content of the first container */}
                <div>
                  <h5 style={{color:'white', textAlign:'center'}}>
                    JAKOŚĆ I DOŚWIADCZENIE
                  </h5>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                  <CarouselTop />
                </div>
              </div>
            </Col>
          </Row>
          <InterlineSmall />
          
          <Row className="justify-content-center align-self-center w-100" style={{ height: '1fr'}}>
            <Col xs={12} md={8} className="d-flex justify-content-center" style={{ minWidth: '100%' }}>
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
                {/* Content of the second container */}
                <div>
                  <h5 style={{color:'white', textAlign:'center'}}>NASZE PRZEWAGI</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                
                  <CarouselBottom />
                </div>
              </div>
            </Col>
          </Row>
          
        </Container>
    );
  };

export default HomeSmall;
