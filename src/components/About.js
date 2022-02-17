import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <h4>Version 1.0</h4>
            <div>Built as a part of <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8" target="_blank" rel="noopener noreferrer">React crash course</a></div>
            <Link to='/'>Go back</Link>
        </>
    )
}

export default About