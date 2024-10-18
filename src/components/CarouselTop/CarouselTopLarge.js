import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import settings from '../../settings/settings';

const images = settings.images.carouselTop;

const CarouselTopLarge = (props) => {

    return (
        
        <Carousel indicators={false} style={{backgroundColor:"#636e72", marginBottom:'20px'}}>
            
            <Carousel.Item style={{ color:"#EF7F1B"}}>
                
                <Image src={images[0]} fluid />
                <Carousel.Caption style={{color:"white"}}>
                    <p style={{fontSize:"24px", fontWeight:"bold"}}>Perfekcyjne rezultaty</p>
                    <p style={{fontSize:"18px"}}>Usuwanie wgnieceń karoserii oraz szkód po gradobiciu</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={images[1]} fluid />
                <Carousel.Caption style={{color:"white"}}>
                <p style={{fontSize:"24px", fontWeight:"bold"}}>Najnowocześniejszy sprzęt</p>
                <p style={{fontSize:"18px"}}>Korzystamy z najnowocześniejszych technologii usuwania wgnieceń</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={images[2]} fluid />
                <Carousel.Caption style={{color:"white"}}>
                <p style={{fontSize:"24px", fontWeight:"bold"}}>100% gwarancja satysfakcji</p>
                    <p style={{fontSize:"18px"}}>
                        Pracujemy do pełnego zadowolenia naszych klientów
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={images[3]} fluid />
                <Carousel.Caption style={{color:"white"}}>
                <p style={{fontSize:"24px", fontWeight:"bold"}}>20 lat doświadczenia</p>
                    <p style={{fontSize:"18px"}}>
                        Nasze wieloletnie doświadczenie gwarantuje najwyższą jakość usług   
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={images[4]} fluid />
                <Carousel.Caption style={{color:"white"}}>
                <p style={{fontSize:"24px", fontWeight:"bold"}}>Sprzęt renomowanych firm</p>
                    <p style={{fontSize:"18px"}}>
                        Używany sprzętu najwyższej jakości dla najwyższych rezultatów   
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
   
    );
};

export default CarouselTopLarge;