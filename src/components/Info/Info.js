//Row from bootstrap
import {Container, Row, Col} from 'react-bootstrap';

const Info = () => {
    return (
        <Container className='d-flex flex-column' style={{color:'white', margin:'30px auto'}}>
            <Row>
                <Col className='col-12'>
                    <p style={{fontSize:'28px',textAlign:'center'}}>
                        Usuwanie wgnieceń w Gradem - witamy!
                    </p>
                </Col>
            </Row>

            <Row>
                <Col className='col-6'>
                    <p style={{fontSize:'14px'}}>
                    Usuwanie wgnieceń bez konieczności lakierowania to specjalność naszej firmy, świadczymy profesjonalne usługi naprawy karoserii samochodowej na terenie Polski oraz Europy. Już od 19 lat perfekcyjnie przywracamy karoseriom nieskazitelny wygląd. Nasze doświadczenie, wiedza, najnowocześniejszy sprzęt 
                    </p>
                </Col>
                <Col className='col-6'>
                    <p style={{fontSize:'14px'}}>
                    i innowacyjne metody, jakie stosujemy gwarantują skuteczne i bezinwazyjne usuwanie wgnieceń. Rewolucyjna metoda usuwania wgnieceń bez lakierowania PDR (Paintless Dent Repair), którą stosujemy gwarantuje perfekcyjne rezultaty naprawy bez naruszenia oryginalnej powłoki lakierniczej i oszczędność kosztów.
                    </p>
                </Col>
            </Row>

        </Container>
        
    );
};

export default Info;