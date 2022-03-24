import React, { useState } from 'react'
import { MdOutlineWork } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { MdTask } from 'react-icons/md';


const AddTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState({
        content: "",
        time: "",
        type: "",
        reminder: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setNewTask(oldTask => {
            return {
                ...oldTask,
                //pass in checked when they input type is "checkbox" because checkbox is a boolean instead of a string
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        //prevent the page from refreshing/re-rendering once the form is submitted
        event.preventDefault()
        //call addTask from parent App.js component and pass in newTask
        addTask(newTask)
        //clear the form
        setNewTask({
            content: "",
            time: "",
            type: "",
            reminder: false
        })

    }

  return (
    <form className='form-add-task' onSubmit={handleSubmit}>
            <label htmlFor="content">Task</label>
            <input
                className='new-content'
                required
                type="text"
                placeholder="content"
                onChange={handleChange}
                name="content"
                value={newTask.content}
            />
            <label htmlFor="time">Time</label>
            <input
                className='new-time'
                type="datetime-local"
                onChange={handleChange}
                name="time"
                value={newTask.time}
            />
            <div className="new-reminder-container">
            <input 
                className='new-reminder-checkbox'
                type="checkbox" 
                id="reminder" 
                checked={newTask.reminder}
                onChange={handleChange}
                name="reminder"
            />
            <label htmlFor="reminder" className='new-reminder-text'>Reminder</label>
            </div>
            

            <fieldset>
                <label>Task type</label>
                <br />
                <input 
                    type="radio"
                    id="work"
                    name="type"
                    value="work"
                    checked={newTask.type === "work"}
                    onChange={handleChange}
                />
                <label htmlFor="work" className='radio-label'><MdOutlineWork /> Work</label>
                <br />
                
                <input 
                    type="radio"
                    id="home"
                    name="type"
                    value="home"
                    checked={newTask.type === "home"}
                    onChange={handleChange}
                />
                <label htmlFor="home" className='radio-label'><AiFillHome />Home</label>
                <br />
                
                <input 
                    type="radio"
                    id="other"
                    name="type"
                    value=""
                    checked={newTask.type === ""}
                    onChange={handleChange}
                />
                <label htmlFor="other" className='radio-label'><MdTask /> Other</label>
                <br />
            </fieldset>
            <br />
            <button className='btn btn-success'>Save Task</button>
        </form>
  )
}

export default AddTask