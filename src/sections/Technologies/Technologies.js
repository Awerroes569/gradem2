import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselTechnologies from '../../components/CarouselTechnologies/CarouselTechnologies';
import InterlineSmall from '../../components/InterlineSmall/InterlineSmall';

const Technologies = () => {
    return (
        <Container fluid className="d-flex flex-column align-items-baseline justify-content-around" style={{ height: '72vh' }}>
          
          <Row className="justify-content-center align-self-center w-100" style={{ height: '1fr'}}>
            <Col xs={12} md={8} className="d-flex justify-content-center" style={{ minWidth: '90vw'}}>
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
                  <h3 style={{color:'white', textAlign:'center'}}>
                    TECHNOLOGIA
                  </h3>
                </div>
                <InterlineSmall />
                <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                  <CarouselTechnologies />
                </div>
              </div>
            </Col>
          </Row>

        </Container>
    );
  };

export default Technologies;
