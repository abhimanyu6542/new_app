import React from 'react';
import CounterLayout from './components/CounterLayout';

function Counter() {
    return (
        <>
            <div className='p-5 md:p-20 border-t-2 border-slate-300'>
                <CounterLayout />
            </div>
        </>
    )
}

export default Counter;