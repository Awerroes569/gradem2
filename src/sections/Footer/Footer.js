import Container from 'react-bootstrap/Container';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Container style={{width:"500px", backgroundColor:"black", color:"white"}} className="d-flex flex-column justify-content-start">
        
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-map-marker fa-fw" style={{fontSize:"30px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                ul. Jesienna, 940-318 Katowice
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-phone fa-fw" style={{fontSize:"30px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                +48 537 714 814
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-phone fa-fw" style={{fontSize:"30px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                +48 507 035 010
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-envelope-o fa-fw" style={{fontSize:"30px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                biuro.gradem@gmail.com
            </span>
        </div>
        
    </Container>
  );
}

export default Footer;