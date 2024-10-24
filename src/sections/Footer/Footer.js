import {Container, Row,Col} from 'react-bootstrap';
import styles from './Footer.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = ({cb}) => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
        cb();
    };

    useEffect(() => {
        // Call the callback function once when the component is first rendered
        cb();
      },[]); // Include cb in the dependency array to handle updates if cb changes

  return (
    <div style={{ backgroundColor:"black", color:"white"}} className="d-flex flex-column justify-content-center w-100">
        
        <div className="d-flex flex-row justify-content-center align-items-center" style={{width:'100%',marginBottom:'20px'}}>
            <Navigation/>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-map-marker fa-fw" style={{fontSize:"24px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                ul. Jesienna, 940-318 Katowice
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-phone fa-fw" style={{fontSize:"24px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                +48 537 714 814
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-phone fa-fw" style={{fontSize:"24px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                +48 507 035 010
            </span>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <i className="fa fa-envelope-o fa-fw" style={{fontSize:"24px", color:"#EF7F1B"}}></i>
            <span className="p-2" style={{fontSize:"18px"}}> 
                biuro.gradem@gmail.com
            </span>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
             <i  onClick={goHome} style={{ color: "white", fontSize: "4vh", margin:"30px"}} className="fa-solid fa-angle-down "></i>
        </div>

        
    </div>
  );
}

export default Footer;