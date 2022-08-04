import styles from './Title.module.css'

export function Title() {   
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <p>Tarefas Criadas</p>
                <span className={styles.showNumber}>0</span>
            </div>
            <div className={styles.last}>
                <p>Concluídas</p>
                <span className={styles.showNumber}>0 de 5</span>
            </div>
        </div>
    )
}