//Row from bootstrap
import {Container, Row, Col} from 'react-bootstrap';
//FavoriteButton from components
import FavoriteButton from '../FavoriteButton/FavoriteButton';
//settings from settings
import settings from '../../settings/settings';

const LogoDownWhite = () => {

    const imagePath = settings.images.logoWhite;

    return (
        <Container className='d-flex flex-column align-items-center' style={{color:'white', margin:'30px auto'}}>
            <Row>
                <Col className='col-12'>
                    <FavoriteButton path={imagePath} />
                </Col>
            </Row>



        </Container>
        
    );
};

export default LogoDownWhite;