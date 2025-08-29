import { Link } from 'react-router-dom';
import type { TTodo } from '../../types/TodoTypes';
import './List.css';

interface IList {
    arr: TTodo[];
    onDeleteTodo: (id: number) => void;
}

function List({ arr, onDeleteTodo }: IList) {
    const handleDelete = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        e.stopPropagation();
        onDeleteTodo(id);
    };

    return (
        <div className='list'>
            {arr.map(todo => (
                <Link to={`/${todo.id}`} key={todo.id} className='todo'>
                    <h2>{todo.title}</h2>
                    <button 
                        className="delete-btn"
                        onClick={(e) => handleDelete(e, todo.id)}
                    >
                        Delete
                    </button>
                </Link>
            ))}
        </div>
    )
}

export default List;