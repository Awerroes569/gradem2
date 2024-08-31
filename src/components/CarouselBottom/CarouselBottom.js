import Carousel from 'react-bootstrap/Carousel';
import settings from '../../settings/settings';
import '../../styles/settings.scss';
import Card from 'react-bootstrap/Card';

const drawings = settings.images.carouselBottom;

const CarouselBottom = (props) => {

    return (
        
        <Carousel indicators={false}>
            <Carousel.Item>
                <Card style={{ width: '80vw', height: 'auto', margin: '0 auto' , background:'var(--brand-color)'}}>
                    <Card.Img variant="top" src={drawings[0]} style={{ width: '20vw', height: 'auto', margin: '30px auto 0 auto' }} />
                    <Card.Body>
                        <Card.Text style={{textAlign:'center', color:"#EF7F1B", fontSize:'24px'}}>
                            <br></br>
                            Taniej nawet 40% od tradycyjnych metod
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
   
    );
};

export default CarouselBottom;