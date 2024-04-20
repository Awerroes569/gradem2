import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addList } from '../../redux/subreducers/listsRedux';

const ListForm = props => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title: title, description: description, listId: props.listId}));
        setTitle('');
        setDescription('');
     };

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>    
            Title:
            <TextInput
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)} 
            />
            
            Description:            
            <TextInput
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)} 
            />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;