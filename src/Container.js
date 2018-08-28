import React from 'react'

const Container = ({ count, onIncrement, onDecrement }) => <div> Count: {count}
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button></div>

export default Container