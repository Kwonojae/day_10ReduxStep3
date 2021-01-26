import React from 'react';
import { connect } from 'react-redux';
import {changeColor} from '../../store/modules/changecolor'
const ChangeColor = ({color, changeColor}) => {
    return (
        <div>
            <h1 style={{fontSize:30, color:color}}>컬러 : {color} </h1>
            <p>
                <button onClick={() => changeColor('green') }>green</button>
                <button onClick={() => changeColor('pink') }>pink</button>
                <button onClick={() => changeColor('yellow') }>yellow</button>
                <button onClick={() => changeColor('blue') }>blue</button>
                <button onClick={() => changeColor('darkgreen') }>darkgreen</button>
                <button onClick={() => changeColor('hotpink') }>hotpink</button>
            </p>
        </div>
    );
};

export default connect(
    ({changecolor}) => ({
        color : changecolor.color
    }),
    {changeColor}
) (ChangeColor);