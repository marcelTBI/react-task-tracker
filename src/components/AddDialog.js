import React from "react"

const AddDialog = ({ handleSubmit }) => {

    const defaultTask = { "task": "", "day": "", "reminder": false }
    const [filledData, changeFilledData] = React.useState(defaultTask)

    const handleChange = (event) => {
        if (event.target.type === "checkbox") {
            changeFilledData((prev) => ({ ...prev, [event.target.name]: event.target.checked }))
        } else {
            changeFilledData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()  // this is to prevent redirect to other webpage (default with <input type=submit>)

        if (!filledData.task) {
            alert('Please add a task')
            return
        }

        handleSubmit(filledData)

        changeFilledData(defaultTask)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={filledData.task}
                    name="task"
                    onChange={handleChange}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={filledData.day}
                    name="day"
                    onChange={handleChange}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={filledData.reminder}
                    name="reminder"
                    onChange={handleChange}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddDialog