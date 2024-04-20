import styles from './FavoriteButton.module.scss';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById } from '../../redux/subreducers/cardsRedux';
import { updateFavorite } from '../../redux/subreducers/cardsRedux';

const FavoriteButton = (props) => {
    
    const card = useSelector(state => getCardById(state, { cardId: props.id }));

    const dispatch = useDispatch();

    const currentColor = useMemo(
        () => {
            return card.isFavorite ? 'red' : 'black';
        },
        [card.isFavorite]
        
    );

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateFavorite({type: 'UPDATE_FAVORITE', id: props.id}));
    };
 
    return (
        <button  onClick={handleSubmit}>
            
            <i style={{color:currentColor}} className={clsx('fa', 'fa-star-o')}></i>
        </button>
    );
};

export default FavoriteButton;