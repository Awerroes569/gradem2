import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Container style={{width:"300px"}} className="d-flex flex-column justify-content-start">
        
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-map-marker fa-fw"></i>
            <span className="p-2"> 
                ul. Jesienna, 940-318 Katowice
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-phone fa-fw"></i>
            <span className="p-2"> 
                +48 537 714 814
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-phone fa-fw"></i>
            <span className="p-2"> 
                +48 507 035 010
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-envelope-o fa-fw"></i>
            <span className="p-2"> 
                biuro.gradem@gmail.com
            </span>
        </div>
        
    </Container>
  );
}

export default Footer;