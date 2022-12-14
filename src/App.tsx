import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './Components/Header';
import './App.module.css'
import './global.css'
import styles from './App.module.css'
import { Search } from './Components/Search';
import { Title } from './Components/Title';
import { Task } from './Components/Task';

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Terminar o desafio",
      isComplete: true
    },
    {
      id: uuidv4(),
      title: "Estudar Typescript",
      isComplete: false
    },
    {
      id: uuidv4(),
      title: "Estudar Typescript",
      isComplete: false
    },
  ])

  const tasksCompleted = tasks.filter(item => item.isComplete).length  

  function deleteTask(taskToDelete: string) {
    var newArray = tasks.filter((item) => item.id !== taskToDelete);
    setTasks(newArray)
  }

  function completeTask(taskId: string) {
    const editedTasks = tasks.map(task => { 
      if(task.id === taskId) {
        return {
          ...task, 
          isComplete: !task.isComplete
        } 
      } else {
        return task
      }
    })
    setTasks(editedTasks)
  }

  function addTasks(taskToAdd: string) {
    const taskConst = {
      id: uuidv4(),
      title: taskToAdd,
      isComplete: false
  }
    setTasks([...tasks, taskConst])
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Search
          tasks={tasks}
          onAdd={addTasks}
        />
        <Title
          created={tasks.length}
          tasksFinished={tasksCompleted}
        />
        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              id={task.id}              
              isComplete={task.isComplete}
              title={task.title}
              onDelete={deleteTask}
              onComplete={completeTask}
            />
          )
        })}  
      </div>
    </>
  )
}

