import React from 'react'

const Header = ({ toggleShowAddTask, showAddTask}) => {



  return (
    <div>
      <header>
        <h1>Task Tracker</h1>
        <button 
            className={`btn-toggleShowAddTask ${showAddTask ? "btn-show-red" : "btn-show-green"}`}
            onClick={toggleShowAddTask}
        >{showAddTask ? "Close" : "Add"}
        </button>
      </header>
      <ul className='info-list'>
        <li>Double-click a task to toggle reminder status.</li>
        <li>This app accesses local storage.</li>
      </ul>
    </div>
    
  )
}

export default Header