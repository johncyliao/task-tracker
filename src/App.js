import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  //tasks is an array of all tasks. each task is an object.
  //fetch data from local storage. if its
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ||
    [
      //example tasks
      // {
      //   id: nanoid(),
      //   content: "example 1: learning",
      //   time: "2022/3/24 13:53",
      //   type: "work",
      //   reminder: false
      // },
      // {
      //   id: nanoid(),
      //   content: "PCR test",
      //   time: "2022/3/25 9:00",
      //   type: "home",
      //   reminder: true
      // },
    ]
  )

  const[showAddTask, setShowAddTask] = useState(false)

  //update upon change
  React.useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  //add task 
  function addTask(newTask) {
    setTasks(oldTasks => [
      {
        ...newTask,
        id: nanoid(), 
        time: newTask.time.replace("T"," ")
      }
      , ...oldTasks
    ])
  }

  //delete task 
  function deleteTask(id) {
    setTasks(oldTasks => oldTasks.filter(oldTask => oldTask.id !== id))
  }
  
  //toggle importance
  function setReminder(id) {
    setTasks(oldTasks => oldTasks.map(oldTask => {
      return oldTask.id === id
        ? {...oldTask, reminder: !oldTask.reminder}
        : oldTask
    }))
  }
  
  return (
    <div className='app'>
      <Header 
        toggleShowAddTask={() => setShowAddTask(status => !status)}
        showAddTask={showAddTask}
      />

      {showAddTask && <AddTask addTask={addTask}/>}
      
      {tasks.length > 0 
       ? <Tasks 
          tasks={tasks} 
          deleteTask={deleteTask} 
          setReminder={setReminder}
        />
       : <div className='no-task-notification'>
          <p>"No task to show"</p>
        </div>
      }
    </div>
  );
}

export default App;
