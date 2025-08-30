import type { TTodo } from '../../types/TodoTypes';
import './OneTodo.css'


function OneTodo({ id, title, desc }: TTodo) {

    return (
        <div className='one-todo'>
            <h1>Title: { title }</h1>
            <p>Desc: { desc }</p>
            <h2>ID: { id }</h2>
        </div>
    )

}

export default OneTodo;
