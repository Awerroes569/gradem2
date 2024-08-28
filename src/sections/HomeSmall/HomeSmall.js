import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselTop from '../../components/CarouselTop/CarouselTop';
import CarouselBottom from '../../components/CarouselBottom/CarouselBottom';

const HomeSmall = () => {
    return (
      <Container fluid className="d-flex flex-column align-items-baseline justify-content-around" style={{ height: '75vh' }}>
        <Row className="justify-content-center align-self-center w-100" style={{ height: '1fr'}}>
          <Col xs={12} md={8} className="d-flex justify-content-center" style={{ minWidth: '70vw'}}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                padding: '20px',
              }}
            >
              {/* Content of the first container */}
              <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                <CarouselTop />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-self-center w-100" style={{ height: '1fr'}}>
          <Col xs={12} md={8} className="d-flex justify-content-center" style={{ minWidth: '70vw' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f8f9fa',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                padding: '20px',
              }}
            >
              {/* Content of the second container */}
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
