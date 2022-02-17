import PropTypes from "prop-types"

const Button = ({ color, text, handleClick }) => {

    return (
        <button className="btn" style={{ backgroundColor: color }} onClick={handleClick}>{text}</button>
    )
}

Button.defaulProps = {
    color: 'steelBlue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default Button