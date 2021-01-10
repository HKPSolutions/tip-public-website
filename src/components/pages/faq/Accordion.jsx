import './atom.css'
import React, { useState } from 'react';

function Accordion(props) {
    const [showAnswer, setShowAnswer] = React.useState(false);
    return (
        <div className = "accordion">
            <button type = "button" className = "accordion_question" onClick={() => setShowAnswer(!showAnswer)}>{props.question} {showAnswer ? <p>-</p> : <p>+</p>}</button>
            <div className = "accordion_answer">
                {showAnswer ? <p>{props.answer}</p> : null}
            </div>
        </div>
    );
}

export default Accordion;