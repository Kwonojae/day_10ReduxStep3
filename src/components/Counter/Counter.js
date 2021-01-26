import React from 'react';
import { useDispatch,useSelector } from 'react-redux'; //훅스 형
import { increment, decrement, reset} from '../../store/modules/counter'

const Counter = () => {
    const cnt = useSelector( state => state.counter.count)
    const color = useSelector( state => state.color.color)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={{fontSize:30, color:color}}>카운터 : {cnt}</h1>
            <button onClick={()=> dispatch(increment() )}>증가</button>
            <button onClick={()=> dispatch(decrement() )}>감소</button>
            <button onClick={()=> dispatch(reset() )}>리셋</button>
        </div>
    );
};

export default Counter;