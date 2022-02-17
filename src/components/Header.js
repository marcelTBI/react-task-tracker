import Button from "./Button"

const Header = ({ showDialog, toggleShowDialog }) => {

    const color = showDialog ? "red" : "green"
    const text = showDialog ? "Hide" : "Add"

    return (
        <header className="header">
            <h1>TaskTracker</h1>
            <Button color={color} text={text} handleClick={toggleShowDialog} />
        </header>
    )
}

export default Header