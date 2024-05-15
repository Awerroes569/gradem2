import styles from './FavoriteButton.module.scss';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById } from '../../redux/subreducers/cardsRedux';
import { updateFavorite } from '../../redux/subreducers/cardsRedux';

const FavoriteButton = (props) => {
    
    return (
        <button >
            
            <i  className={clsx('fa', 'fa-star-o')}></i>
        </button>
    );
};

export default FavoriteButton;