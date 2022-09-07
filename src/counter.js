import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter(props) {
    const dispatch = useDispatch();
    const count = useSelector((state) => state);


    return (
        <div>
            <button onClick={() => { dispatch({ type: 'toggleCounter' }) }}>Hide / Show Counter</button>
            {
                count.showCounter &&
                <>
                    <h2>Counter: <span>{count.counter}</span> </h2>
                    <button onClick={() => { dispatch({ type: 'Increase', payload: 5 }) }}>Increase</button>
                    <button onClick={() => { dispatch({ type: 'Decrease', payload: 2 }) }}>Decrease</button>
                </>
            }

        </div>
    );
}

export default Counter;