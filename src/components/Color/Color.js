import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {red,green,pink,skyblue,yellow} from '../../store/modules/color'

const Color = () => {
    const color = useSelector(({color}) => color.color);
    const dispatch = useDispatch();
    return (
        <div>
            <h1 style={{fontSize:30, color:color}}>색{color}</h1>
            <p>
                <button onClick={()=> dispatch (red() )}>RED</button>
                <button onClick={()=> dispatch (green() )}>GREEN</button>
                <button onClick={()=> dispatch (pink() )}>PINK</button>
                <button onClick={()=> dispatch (skyblue() )}>SKYBLUE</button>
                <button onClick={()=> dispatch (yellow() )}>YELLOW</button>
            </p>       
        </div>
    );
};

export default Color;
