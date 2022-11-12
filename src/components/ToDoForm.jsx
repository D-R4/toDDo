import {ReactComponent as ReactImg} from '../assets/group.svg'
import { useState } from 'react';

function ToDoForm({addTask}){
    const [userInput, setUserInput] = useState('')


    const handleChange = (e) =>{
        setUserInput(e.target.value)
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) =>{
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return(
        <form className='add-task' onClick={handleSubmit}>
            <ReactImg onClick={addTask}/>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onKeyDown={handleKeyPress}
                placeholder='Новая задача'
                
             />
        </form>
            
        
    )
}
export default ToDoForm