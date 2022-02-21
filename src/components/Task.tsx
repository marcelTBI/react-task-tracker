import { ReactElement } from 'react';
import { FaTimes } from 'react-icons/fa';

import { TaskDataFull } from './AddDialog';

interface TaskProps {
    task: TaskDataFull,
    deleteTask: (id: string) => void,
    toggleReminder: (id: string) => void
}

function Task({ task, deleteTask, toggleReminder }: TaskProps): ReactElement {
    const classnames: string = task.reminder ? 'task reminder' : 'task';

    return (
        <div className={classnames} onDoubleClick={(): void => toggleReminder(task.id)}>
            <h3>
                {task.task}
                {' '}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    );
}

export default Task;
