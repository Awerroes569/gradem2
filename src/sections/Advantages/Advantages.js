//Row from bootstrap
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import settings from '../../settings/settings';

const drawings = settings.images.carouselBottom;

const Advantages = () => {
    return (
        <Container className='d-flex flex-column' style={{color:'white', margin:'30px auto'}}>
            <Row>
                <Col className='col-12' style={{marginBottom:'20px'}}>
                    <p style={{fontSize:'28px',textAlign:'center'}}>
                        Co nas wyróżnia?
                    </p>
                </Col>
            </Row>

            <Row>
                <Col className='col-3'>
                    <Card style={{  height: 'auto', margin: '0 auto' , background:'var(--brand-color)'}}>
                        <Card.Img variant="top" src={drawings[0]} style={{ width:'60px', height: 'auto', margin: '2px auto 0 auto' }} />
                        <Card.Body>
                            <Card.Text style={{textAlign:'center', color:"white", fontSize:'14px'}}>
                                Taniej nawet 40% od tradycyjnych metod
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-3'>
                    <Card style={{  height: 'auto', margin: '0 auto' , background:'var(--brand-color)'}}>
                        <Card.Img variant="top" src={drawings[1]} style={{ width:'60px', height: 'auto', margin: '2px auto 0 auto' }} />
                        <Card.Body>
                            <Card.Text style={{textAlign:'center', color:"white", fontSize:'14px'}}>
                                Bez lakierowania i szpachlowania
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-3'>
                    <Card style={{  height: 'auto', margin: '0 auto' , background:'var(--brand-color)'}}>
                        <Card.Img variant="top" src={drawings[2]} style={{ width:'60px', height: 'auto', margin: '2px auto 0 auto' }} />
                        <Card.Body>
                            <Card.Text style={{textAlign:'center', color:"white", fontSize:'14px'}}>
                                Z zachowianiem oryginalnej powłoki lakierniczej
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-3'>
                    <Card style={{  height: 'auto', margin: '0 auto' , background:'var(--brand-color)'}}>
                        <Card.Img variant="top" src={drawings[3]} style={{ width:'60px', height: 'auto', margin: '2px auto 0 auto' }} />
                        <Card.Body>
                            <Card.Text style={{textAlign:'center', color:"white", fontSize:'14px'}}>
                                Szybko i profesjonalnie - już w 30 minut
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
        
    );
};

export default Advantages;