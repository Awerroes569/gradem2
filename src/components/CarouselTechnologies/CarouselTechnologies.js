import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import settings from '../../settings/settings';

const images = settings.images.carouselTechnologies;

const CarouselTechnologies = (props) => {

    return (
        
        <Carousel indicators={false} style={{backgroundColor:"black"}}>
            
            <Carousel.Item style={{ color:"#EF7F1B", padding:"10px"}}>
                
                <Image src={images[0]} fluid />
                <div>
                  <p style={{color:'white', textAlign:'center', fontSize:"16px", paddingTop:"20px"}}>
                    DŹWIGNIE
                  </p>
                  <p style={{color:'white', textAlign:'center', fontSize:"12px", paddingTop:"10px"}}>
                  Narzędzia służące do precyzyjnego usuwania wgnieceń od wewnętrznej strony uszkodzenia, dzięki czemu nie zostaje uszkodzona oryginalna powłoka lakiernicza.
                  </p>
                </div>
            </Carousel.Item>

            <Carousel.Item style={{ color:"#EF7F1B", padding:"10px"}}>
                
                <Image src={images[1]} fluid />
                <div>
                  <p style={{color:'white', textAlign:'center', fontSize:"16px", paddingTop:"20px"}}>
                    KLEJ
                  </p>
                  <p style={{color:'white', textAlign:'center', fontSize:"12px", paddingTop:"10px"}}>
                  Usuwanie wgnieceń za pomocą specjalnych grzybków o odpowiednio dobranym kształcie i rozmiarze. Grzybki mocuje się do karoserii (w miejscu wgniecenia) za pomocą kleju, po zastygnięciu kleju wgniecenie wyciąga się za pomocą specjalnych narzędzi montowanych do grzybków.
                  </p>
                </div>
            </Carousel.Item>

        </Carousel>
   
    );
};

export default CarouselTechnologies;