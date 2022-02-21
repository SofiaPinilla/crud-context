import React from 'react'
import AddTask from './AddTask/AddTask'
import Task from './Task/Task'
import './Tasks.scss'
const Tasks = () => {
  return (
    <div className='tasks-container'>
    <h1>Tasks</h1>
    <AddTask/>
    <Task/>
    </div>
  )
}

export default Tasks