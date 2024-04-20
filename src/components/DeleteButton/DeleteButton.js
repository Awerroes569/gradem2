import styles from './DeleteButton.module.scss';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById } from '../../redux/subreducers/cardsRedux';
import { deleteCard } from '../../redux/subreducers/cardsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const DeleteButton = (props) => {
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(deleteCard({type: 'DELETE_CARD', id: props.id}));
    };
 
    return (
        <button  onClick={handleSubmit}>
            <FontAwesomeIcon icon={faTrashCan} />
        </button>
    );
};

export default DeleteButton;