import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Increase, Decrease } from './store/reducers/counterSlice';
import { toggleAuth } from './store/reducers/authSlice';



function Counter() {
    const dispatch = useDispatch();
    const { counter, auth } = useSelector((state) => state);

    useEffect(() => {
        dispatch(Increase(5))
    }, [dispatch]);

    return (
        <div>
            <button onClick={() => { dispatch(toggleAuth()) }}> {auth.loggedin ? 'Logout' : 'Login'}</button>
            {
                auth.loggedin &&
                <>
                    <h2>Counter: <span>{counter.counter}</span> </h2>
                    <button onClick={() => { dispatch(Increase(5)) }}>Increase</button>
                    <button onClick={() => { dispatch(Decrease(2)) }}>Decrease</button>
                </>
            }

        </div>
    );
}

export default Counter;