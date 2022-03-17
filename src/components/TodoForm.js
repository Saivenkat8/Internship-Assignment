import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            userId: Math.floor(Math.random() * 10000),
            id: Math.floor(Math.random() * 10000),
            title: input,
            completed: false
        })
        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter the task here'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button'>Submit</button>
        </form>
    )
}

export default TodoForm