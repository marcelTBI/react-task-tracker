import { FaTimes } from "react-icons/fa"

const Task = ({ task, deleteTask, toggleReminder }) => {

    const classnames = task.reminder ? "task reminder" : "task"

    return (
        <div className={classnames} onDoubleClick={() => toggleReminder(task.id)}>
            <h3>{task.task} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)} /></h3>
            <p>{task.day}</p>
        </div >
    )
}

export default Task