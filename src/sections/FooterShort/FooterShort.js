import Container from 'react-bootstrap/Container';
import './FooterShort.module.scss';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FooterShort = () => {

  //const [show, setShow] = useState(true);

  const navigate= useNavigate();

  const handleClick = () => {
    //setShow(!show);
    navigate('/footer');
};


  return (
    <Container style={{position:"fixed", bottom:"0", width:"100%", minHeight:"40px", backgroundColor:"black", color:"white"}} className="d-flex flex-column justify-content-start">
        
        <i  onClick={handleClick} style={{ color: "white", fontSize: "4vh", position:"absolute", top:"35%", left:"85%"}} className="fa-solid fa-angle-up"></i>
        
        
        
        
        
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