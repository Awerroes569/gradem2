import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselTop from '../../components/CarouselTop/CarouselTop';
import CarouselBottom from '../../components/CarouselBottom/CarouselBottom';
import Interline from '../../components/Interline/Interline';
import CarouselRepairs from '../../components/CarouselRepairs/CarouselRepairs';

const Repairs = () => {
    return (
      
        
        <Container fluid className="d-flex flex-column align-items-baseline justify-content-around" style={{ height: '72vh' }}>
          <Interline />
          <Row className="justify-content-center align-self-center w-100" style={{ height: '1fr'}}>
            <Col xs={12} md={8} className="d-flex justify-content-center" style={{ minWidth: '90vw'}}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  borderRadius: '20px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                  padding: '10px 0',
                }}
              >
                {/* Content of the first container */}
                <div>
                  <h3 style={{color:'white', textAlign:'center'}}>
                    REALIZACJE
                    <br/>
                  </h3>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ height: '85%' }}>
                  <CarouselRepairs />
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{paddingBottom:'20px'}}>
                    <h4 style={{color:'white', textAlign:'center', width:'50%'}}>
                        PRZED
                    </h4>
                    <h4 style={{color:'white', textAlign:'center', width:'50%'}}>
                        PO
                    </h4>

                </div>
              </div>
            </Col>
          </Row>
          <Interline />

        </Container>
      
    );
  };

export default Repairs;
