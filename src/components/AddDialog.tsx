import React, { ReactElement } from 'react';

export interface TaskData {
    'task': string,
    'day': string,
    'reminder': boolean
}

export interface TaskDataFull extends TaskData {
    'id': string
}

interface AddDialogProps {
    handleSubmit: (task: TaskData) => void
}

function AddDialog({ handleSubmit }: AddDialogProps): ReactElement {
    const defaultTask: TaskData = { task: '', day: '', reminder: false };
    const [filledData, changeFilledData] = React.useState(defaultTask);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.type === 'checkbox') {
            changeFilledData((prev: TaskData): TaskData => ({ ...prev, [event.target.name]: event.target.checked }));
        } else {
            changeFilledData((prev: TaskData): TaskData => ({ ...prev, [event.target.name]: event.target.value }));
        }
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault(); // this is to prevent redirect to other webpage (default with <input type=submit>)

        if (!filledData.task) {
            alert('Please add a task');
            return;
        }

        handleSubmit(filledData);

        changeFilledData(defaultTask);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="form_task">
                    Task
                    <input
                        id="form_task"
                        type="text"
                        placeholder="Add Task"
                        value={filledData.task}
                        name="task"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="form_day">
                    Day & Time
                    <input
                        id="form_day"
                        type="text"
                        placeholder="Add Day & Time"
                        value={filledData.day}
                        name="day"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="form_reminder">
                    Set Reminder
                    <input
                        id="form_reminder"
                        type="checkbox"
                        checked={filledData.reminder}
                        name="reminder"
                        onChange={handleChange}
                    />
                </label>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
}

export default AddDialog;
