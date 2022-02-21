import React, { ReactElement } from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddDialog, { TaskData, TaskDataFull } from './components/AddDialog';
import Footer from './components/Footer';
import About from './components/About';

function App(): ReactElement {
    const [tasks, setTasks] = React.useState([] as Array<TaskDataFull>);
    const [showDialog, changeShowDialog] = React.useState(false);

    const getTasks = async (): Promise<Array<TaskDataFull>> => {
        const res = await fetch('http://localhost:5000/tasks');
        return res.json();
    };

    React.useEffect((): void => {
        const fetchTasks = async (): Promise<void> => {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        };
        fetchTasks();
    }, []);

    const handleSubmit = async (task: TaskData): Promise<void> => {
        const completeTask: TaskDataFull = { ...task, id: nanoid() };

        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(completeTask),
        });

        const data: TaskDataFull = await res.json();

        setTasks((prevTasks: Array<TaskDataFull>): Array<TaskDataFull> => [...prevTasks, data]);
    };

    const deleteTask = async (id: string): Promise<void> => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });

        setTasks((prevTasks: Array<TaskDataFull>): Array<TaskDataFull> => prevTasks.filter((task: TaskDataFull): boolean => task.id !== id));
    };

    const toggleReminder = async (id: string): Promise<void> => {
        const currentTask = tasks.filter((task: TaskDataFull): boolean => task.id === id)[0];
        const toggledTask = { ...currentTask, reminder: !currentTask.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(toggledTask),
        });
        const data: TaskDataFull = await res.json();

        setTasks((prevTasks: Array<TaskDataFull>): Array<TaskDataFull> => prevTasks.map((task: TaskDataFull): TaskDataFull => (task.id !== id ? task : data)));
    };

    return (
        <div className="container">
            <BrowserRouter>
                <Header showDialog={showDialog} toggleShowDialog={(): void => changeShowDialog((prev: boolean): boolean => !prev)} />
                <Routes>
                    <Route
                        path="/"
                        element={(
                            <>
                                {showDialog && <AddDialog handleSubmit={handleSubmit} />}
                                {tasks.length > 0 && <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />}
                                {tasks.length === 0 && <h3>No tasks available</h3>}
                            </>
                        )}
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
