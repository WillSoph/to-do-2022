import styles from './Task.module.css'
import { Trash, CheckCircle, Circle } from 'phosphor-react';
import { useState } from 'react';

interface TaskProps {
    isComplete: boolean;
    title: string;
    id: string;
    onDelete: (id: string) => void;
}

export function Task({ isComplete, title, id, onDelete }: TaskProps) {
    const [isChecked, setIsChecked] = useState(isComplete)

    function handleDeleteTask() {
        onDelete(id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.check}>
                {isChecked ? 
                    <CheckCircle 
                        size={24} 
                        weight="fill" 
                        color="#8284fa"
                        onClick={() => setIsChecked(isChecked === true ? false : true)} 
                    />
                    :
                    <Circle 
                        size={24} 
                        color="#4ea8de" 
                        onClick={() => setIsChecked(!isChecked ? true : false)}
                    />
                }
            </div>
            <div className={styles.text}>
            {title}
            </div>
            <div className={styles.action}>
                <Trash 
                    size={24} 
                    color="#808080"  
                    onClick={handleDeleteTask}         
                />
            </div>
        </div>
    )
}