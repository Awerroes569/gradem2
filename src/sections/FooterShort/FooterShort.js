import Container from 'react-bootstrap/Container';
import './FooterShort.module.scss';
import { Col } from 'react-bootstrap';

const FooterShort = () => {
  return (
    <Container style={{position:"fixed", bottom:"0", width:"100%", backgroundColor:"black", color:"white"}} className="d-flex flex-column justify-content-start">
        
        <div className="d-flex flex-row justify-content-center align-items-center">
            <span className="p-2" style={{fontSize:"18px", textAlign:"center", textJustify:"center"}}> 
                ZADZWOŃ DO NAS
            </span>
        </div>
        
        <div className="d-flex flex-row justify-content-center align-items-center">
            <span className="p-2" style={{fontSize:"18px"}}> 
                +48 537 714 814
            </span>
        </div>
        
        
    </Container>
  );
}

export default FooterShort;