import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { MdTask } from 'react-icons/md';


const Task = ({ task, deleteTask, setReminder }) => {
  return (
    <div 
        className={`task ${task.reminder && "task-reminder"}`}
        onDoubleClick={() => setReminder(task.id)}
    >
        <div className='task-header'>
            <div className='task-header-type-icon'>
                {task.type === "work" && <MdOutlineWork className='task-header-symbol' />}
                {task.type === "home" && <AiFillHome className='task-header-symbol' />}
                {task.type === "" && <MdTask className='task-header-symbol' />}
            </div>
            <div className="task-header-content">
                {task.content} 
            </div>
            <div className="task-header-space"> </div>
            <FaTrashAlt 
                className='delete-icon'
                onClick={() => deleteTask(task.id)}
            /> 
        </div>
        <p>{task.time}</p>
    </div>
  )
}

export default Task