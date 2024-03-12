import React, {useState} from 'react'
import FormTodo from './FormTodo'
import TaskList from './TaskList'
import '../styles/container.css'

const Container = () => {
    const [list, setList] = useState([]);
    
    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };

    return (
        <div className='container' style={{ height: '100vh' }}>
            <div className='config-list'>
                <FormTodo handleAddItem={handleAddItem} />
                <TaskList list={list} setList={setList}/>
            </div>
        </div>
    )
}

export default Container