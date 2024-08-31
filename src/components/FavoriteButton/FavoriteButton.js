import styles from './FavoriteButton.module.scss';

const FavoriteButton = (props) => {

    return (
        
        <div>  
            <img  className={styles.responsive} src={props.path} alt="great logo" />    
        </div>
    );
};

export default FavoriteButton;