import Header from './components/Header';
import Tasks from './components/Tasks';
import AddDialog from './components/AddDialog';
import Footer from './components/Footer';
import About from './components/About';

import React from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

    const [tasks, setTasks] = React.useState([])
    const [showDialog, changeShowDialog] = React.useState(false)

    React.useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getTasks()
            setTasks(tasks)
        }
        fetchTasks()
    }, [])

    const getTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        return await res.json()
    }

    const handleSubmit = async (task) => {
        const completeTask = { ...task, "id": nanoid() }

        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(completeTask)
        })

        const data = await res.json()

        setTasks((prevTasks) => [...prevTasks, data])
    }

    const deleteTask = async (id) => {
        await fetch("http://localhost:5000/tasks/" + id, {
            method: "DELETE",
        })

        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }

    const toggleReminder = async (id) => {
        const currentTask = tasks.filter((task) => task.id === id)[0]
        const toggledTask = { ...currentTask, reminder: !currentTask.reminder }

        const res = await fetch("http://localhost:5000/tasks/" + id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(toggledTask)
        })
        const data = await res.json()

        setTasks((prevTasks) => prevTasks.map((task) => task.id !== id ? task : data))
    }

    return (
        <div className="container">
            <BrowserRouter>
                <Header showDialog={showDialog} toggleShowDialog={() => changeShowDialog((prev) => !prev)} />
                <Routes>                    
                    <Route path="/" element={<>
                        {showDialog && <AddDialog handleSubmit={handleSubmit} />}
                        {tasks.length > 0 && <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />}
                        {tasks.length === 0 && <h3>No tasks available</h3>}</>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div >
    );
}

export default App;
