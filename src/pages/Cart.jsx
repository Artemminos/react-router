import React from 'react';

function init(initialCount) {
    return {
        count: initialCount,
        someData: '',
        testArr: [1, 2, 3, 4, 5]
    };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - 1};
        case 'reset':
            return init(action.payload);
        case 'changeData':
            return {...state, someData: action.payload};
        case 'delete' :
            return {...state, testArr: state.testArr.filter(val => val > 3)}
        default:
            throw new Error();
    }
}

const Cart = () => {
    const [state, dispatch] = React.useReducer(reducer, 0, init);
    console.log(state)

    return (
        <div>
            Count: {state.count}
            <button
                onClick={() => dispatch({type: 'reset', payload: 0})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>+</button>
            <button onClick={() => dispatch({type: 'delete'})}>delete</button>
            <input type="text" onChange={(e) => {
                const value = e.target.value
                dispatch({type: 'changeData', payload: value})
            }}/>
            {state.someData}
        </div>
    );
};

export default Cart;