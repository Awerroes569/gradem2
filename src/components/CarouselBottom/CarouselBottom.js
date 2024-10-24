import Carousel from 'react-bootstrap/Carousel';
import settings from '../../settings/settings';
import '../../styles/settings.scss';
import Card from 'react-bootstrap/Card';

const drawings = settings.images.carouselBottom;

const CarouselBottom = (props) => {

    return (
        
        <Carousel indicators={false}>
            <Carousel.Item>
                <Card style={{ width: '80vw', height: 'auto', margin: '0 auto' , background:'black'}}>
                    <Card.Img variant="top" src={drawings[0]} style={{ width: '20vw', height: 'auto', margin: '2px auto 0 auto' }} />
                    <Card.Body>
                        <Card.Text style={{textAlign:'center', color:'white', fontSize:'14px'}}>
                            Taniej nawet 40% od tradycyjnych metod
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
   
    );
};

export default CarouselBottom;