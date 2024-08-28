import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import settings from '../../settings/settings';
import { Container } from 'react-bootstrap';

const images = settings.images.carouselTop;
const drawings = settings.images.carouselBottom;

const CarouselTop = (props) => {

    return (
        
        <Carousel className='my-5'>

            <Carousel.Item style={{backgroundColor:"black", color:"#EF7F1B"}}>
                <Image src={images[0]} fluid />
                <Carousel.Caption style={{color:"#EF7F1B"}}>
                    <h3>Perfekcyjne rezultaty</h3>
                    <p>Usuwanie wgnieceń karoserii oraz szkód po gradobiciu</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={images[1]} fluid />
                <Carousel.Caption style={{color:"#EF7F1B"}}>
                    <h3>Najnowocześniejszy sprzęt</h3>
                    <p>Korzystamy z najnowocześniejszych technologii usuwania wgnieceń</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={images[2]} fluid />
                <Carousel.Caption style={{color:"#EF7F1B"}}>
                    <h3>100% gwarancja satysfakcji</h3>
                    <p>
                        Pracujemy do pełnego zadowolenia naszych klientów
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={images[2]} fluid />
                <Carousel.Caption style={{color:"#EF7F1B"}}>
                    <h3>20 lat doświadczenia</h3>
                    <p>
                        Nasze wieloletnie doświadczenie gwarantuje najwyższą jakość usług   
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={images[2]} fluid />
                <Carousel.Caption style={{color:"#EF7F1B"}}>
                    <h3>Sprzęt renomowanych firm</h3>
                    <p>
                        Używany sprzętu najwyższej jakości dla najwyższych rezultatów   
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
   
    );
};

export default CarouselTop;