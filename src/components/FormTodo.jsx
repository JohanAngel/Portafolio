import React, {useState} from 'react'
import '../styles/to-do-list.css'

const FormTodo = props => {
    
    const { handleAddItem } = props;
    const [description, setDescription] = useState("");
    const handleSubmit = e => {
        e.preventDefault();

        handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description
        });

        setDescription("");
    };
    return (

        <form onSubmit={handleSubmit}>
            <div className='container-to-do-list'>
                <div>
                    <input placeholder='Ingresar tarea' type="text" className="input-class" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className='button-add'>
                    <button className="button" disabled={description ? "" : "disabled"}> Agregar</button>
                </div>
            </div>
        </form>
  );
}

export default FormTodo