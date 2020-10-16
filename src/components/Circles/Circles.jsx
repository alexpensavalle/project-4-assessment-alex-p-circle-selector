import React from 'react';
import './Circles.css';

const Circles = props => {
    
    return(
        <div className="Circles">
            <div className={props.selected === 'circleOne' ? 'selected' : null}>1</div>
            <div className={props.selected === 'circleTwo' ? 'selected' : null}>2</div>
            <div className={props.selected === 'circleThree' ? 'selected' : null}>3</div>
            <div className={props.selected === 'circleFour' ? 'selected' : null}>4</div>
        </div>
    );
}

export default Circles;