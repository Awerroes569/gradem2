import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import settings from '../../settings/settings';

const images = settings.images.carouselRepairs;

const CarouselRepairs = (props) => {

    return (
        
        <Carousel indicators={false} style={{backgroundColor:"#636e72"}}>
            
            <Carousel.Item >   
                <Image src={images[0]} fluid />    
            </Carousel.Item>

            <Carousel.Item >   
                <Image src={images[1]} fluid />    
            </Carousel.Item>

            <Carousel.Item >   
                <Image src={images[2]} fluid />    
            </Carousel.Item>

        </Carousel>
   
    );
};

export default CarouselRepairs;