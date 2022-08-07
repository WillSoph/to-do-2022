import { useEffect, useState } from 'react'
import styles from './Title.module.css'

interface TitleProps{
    created: number
    tasksFinished: number
}

export function Title({ created, tasksFinished }: TitleProps) {
    
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <p>Tarefas Criadas</p>
                <span className={styles.showNumber}>{created}</span>
            </div>
            <div className={styles.last}>
                <p>Concluídas</p>
                <span className={styles.showNumber}>{tasksFinished} de {created}</span>
            </div>
        </div>
    )
}