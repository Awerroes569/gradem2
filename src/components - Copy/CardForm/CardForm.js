import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addCard } from '../../redux/subreducers/cardsRedux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const columnId = props.col_id;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ columnId, title}));
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;