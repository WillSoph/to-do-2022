import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react';
import styles from './Search.module.css'

interface InputProps  {
    tasks: {
        id: string;
        title: string;
        isComplete: boolean
    }[];
    onAdd: (taskToAdd: string) => void;    
}

export function Search({ onAdd, tasks }: InputProps) {
    const [focused, setFocused] = useState(false);
    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        onAdd(newTask)
    }

    return (
        <form className={styles.container} onSubmit={handleCreateNewTask}>
            <div className={styles.containerInput}
                style={{
                    border: focused ? '2px solid#5e60ce' : 'none'               
                }}
            >            
                <input 
                    style={{
                        color: focused ? '#f2f2f2' : '#808080'
                    }}
                    className={styles.input}
                    value={newTask}
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => setNewTask(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}                    
                />                  
            </div>
            <button 
                className={styles.button}
                type="submit"
            >Criar
            <PlusCircle 
                size={16}              
            />
            </button>    
        </form>  
    )
}