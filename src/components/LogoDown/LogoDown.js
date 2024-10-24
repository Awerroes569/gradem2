//Row from bootstrap
import {Container, Row, Col} from 'react-bootstrap';

const LogoDown = () => {
    return (
        <Container className='d-flex flex-column' style={{color:'white', margin:'30px auto'}}>
            <Row>
                <Col className='col-12'>
                    <p style={{fontSize:'28px',textAlign:'center'}}>
                        Usuwanie wgnieceń w Gradem - witamy!
                    </p>
                </Col>
            </Row>



        </Container>
        
    );
};

export default LogoDown;