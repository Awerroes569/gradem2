import styles from './FavoriteButton.module.scss';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById } from '../../redux/subreducers/cardsRedux';
import { updateFavorite } from '../../redux/subreducers/cardsRedux';
import Container from '../Container/Container';

const FavoriteButton = (props) => {

    return (
        
        <div>  
            <img  className={styles.responsive} src={props.path} alt="great logo" />    
        </div>
    );
};

export default FavoriteButton;