import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './Components/Header';
import './App.module.css'
import './global.css'
import styles from './App.module.css'
import { Search } from './Components/Search';
import { Title } from './Components/Title';
import { Task } from './Components/Task';

// tasks.filter(task => task.isComplete)

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

  function deleteTask(taskToDelete: string) {
    var newArray = tasks.filter((item) => item.id !== taskToDelete);
    setTasks(newArray)
  }

  

  function addTasks(taskToAdd: string) {
    event.preventDefault()
    
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
        <Title />
        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              id={task.id}
              isComplete={task.isComplete}
              title={task.title}
              onDelete={deleteTask}
            />
          )
        })}  
      </div>
    </>
  )
}

