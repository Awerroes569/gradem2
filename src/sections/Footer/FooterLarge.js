import Container from 'react-bootstrap/Container';
import styles from './Footer.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationLarge from '../../components/Navigation/NavigationLarge';
import { Row, Col } from 'react-bootstrap';

const FooterLarge = () => {

  return (
    <Container style={{width:"auto", height:"auto", backgroundColor:"black", color:"white"}} className="d-flex flex-column justify-content-center">
        
        <Container className='d-flex flex-column' style={{color:'white', margin:'30px auto'}}>
            <Row>
                <Col className='col-12' style={{marginBottom:'20px'}}>
                    <p style={{fontSize:'28px',textAlign:'center'}}>
                        Kontakt
                    </p>
                </Col>
            </Row>
        </Container>


        <div className="d-flex flex-row justify-content-center align-items-center" style={{maxHeight:"400px"}}>
            <NavigationLarge/>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center" style={{marginLeft:'350px'}}>
            <i className="fa fa-map-marker fa-fw" style={{fontSize:"24px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                ul. Jesienna 9, 940-318 Katowice
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center" style={{marginLeft:'350px'}}>
            <i className="fa fa-phone fa-fw" style={{fontSize:"24px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                +48 537 714 814
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center" style={{marginLeft:'350px'}}>
            <i className="fa fa-phone fa-fw" style={{fontSize:"24px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                +48 507 035 010
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center" style={{marginLeft:'350px'}}>
            <i className="fa fa-envelope-o fa-fw" style={{fontSize:"24px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                biuro.gradem@gmail.com
            </span>
        </div>

        <Container className='d-flex flex-column' style={{color:"#EF7F1B", margin:'30px auto'}}>
            <Row>
                <Col className='col-12' style={{marginBottom:'20px'}}>
                    <p style={{fontSize:'20px',textAlign:'center'}}>
                    Prosimy o kontakt telefoniczny, jeśli zdecydują się Państwo na naprawę w Gradem

                    </p>
                </Col>
            </Row>
        </Container>
        

        
    </Container>
  );
}

export default FooterLarge;