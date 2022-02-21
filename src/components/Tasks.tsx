import { ReactElement } from 'react';

import Task from './Task';
import { TaskDataFull } from './AddDialog';

interface TasksProps {
    tasks: Array<TaskDataFull>;
    deleteTask: (id: string) => void;
    toggleReminder(id: string): void;
}

function Tasks({ tasks, deleteTask, toggleReminder }: TasksProps): ReactElement {
    return (
        <>
            {tasks.map((task: TaskDataFull): ReactElement => <Task key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder} />)}
        </>
    );
}

export default Tasks;
