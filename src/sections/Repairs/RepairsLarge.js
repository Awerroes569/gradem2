//Row from bootstrap
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import settings from '../../settings/settings';
import GalleryRepairs from '../../components/GalleryRepairs/GalleryRepairs';


const RepairsLarge = () => {
    return (
        <Container className='d-flex flex-column' style={{color:'white', margin:'30px auto'}}>
            <Row>
                <Col className='col-12' style={{marginBottom:'20px'}}>
                    <p style={{fontSize:'28px',textAlign:'center'}}>
                        Wybrane realizacje
                    </p>
                </Col>

                <Col className='col-12' style={{marginBottom:'20px'}}>
                    <GalleryRepairs />
                </Col>
            </Row>

            

        </Container>
        
    );
};

export default RepairsLarge;