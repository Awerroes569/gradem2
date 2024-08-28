import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import settings from '../../settings/settings';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const drawings = settings.images.carouselBottom;

const CarouselBottom = (props) => {

    return (
        
        <Carousel className='my-5'>
            <Carousel.Item>
                <Card style={{ width: '80vw', height: 'auto', margin: '0 auto' }}>
                    <Card.Img variant="top" src={drawings[0]} style={{ width: '20vw', height: 'auto', margin: '0 auto' }} />
                    <Card.Body>
                    <Card.Text>
                    Taniej nawet 40% od tradycyjnych metod
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
   
    );
};

export default CarouselBottom;