import Container from 'react-bootstrap/Container';

const FooterShort = () => {
  return (
    <Container fixed="bottom" style={{width:"500px", backgroundColor:"black", color:"#EF7F1B"}} className="d-flex flex-column justify-content-start">
        
        <div className="d-flex flex-row justify-content-center align-items-center">
            <span className="p-2" style={{fontSize:"32px"}}> 
                ZADZWOŃ DO NAS
            </span>
        </div>
        
        <div className="d-flex flex-row justify-content-center align-items-center">
            <span className="p-2" style={{fontSize:"32px"}}> 
                +48 537 714 814
            </span>
        </div>
        
        
    </Container>
  );
}

export default FooterShort;