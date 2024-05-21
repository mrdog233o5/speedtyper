import { useContext } from "react";
import { Context } from "../App";
import PropTypes from 'prop-types';

function Letter({ letter, classes }) {
    const context = useContext(Context);
    const ref = (el) => {
        if (context.userInput == "") {
            context.setLastLetterX(0);
            context.setLastLetterY(0);
        }
        if (classes.split(" ").includes("filled") && el != null) {
            context.setLastLetterX(el.getBoundingClientRect().right);
            context.setLastLetterY(el.getBoundingClientRect().top - 8);
        }
    }
    classes += " letter";
    return (
        <span ref={ref} className={classes}>{letter}</span>
    )
}

Letter.propTypes = {
    letter: PropTypes.string,
    classes: PropTypes.string
}


export default Letter;