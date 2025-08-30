import { useState, type ChangeEvent } from 'react';
import './Input.css'
import type { TTodo } from '../../types/TodoTypes';

interface IMyInput {
    arr: TTodo[];
    addTodoToArr: (todo: TTodo) => void;
}

function MyInput({ arr, addTodoToArr }: IMyInput) {
    const [titleValue, setTitleValue] = useState<string>('');
    const [descValue, setDescValue] = useState<string>('');

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value);
    }

    const handleChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
        setDescValue(e.target.value);
    }

    const handleAddTodoToArr = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (titleValue.trim()) {
            const newId = arr.length > 0 ? arr[arr.length - 1].id + 1 : 1;
            const newTodo: TTodo = {
                id: newId,
                title: titleValue,
                desc: descValue,
            };

            addTodoToArr(newTodo);
            setTitleValue('');
            setDescValue('');
        }
    }
    
    return (
        <div className='my-input'>
            <div className='inputs'>
                <input
                type="text"
                placeholder='Title'
                value={titleValue}
                onChange={handleChangeTitle}
                />

                <input
                type="text"
                placeholder='Desc'
                value={descValue}
                onChange={handleChangeDesc}
                />
                
            </div>
            <button onClick={handleAddTodoToArr}>Add New Todo</button>
        </div>
    )
}

export default MyInput;
