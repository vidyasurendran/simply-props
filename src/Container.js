import React from 'react'
import { connect } from 'react-redux'

const mapState = (state) => ({count: state})

const mapDispatch = (dispatch, ownProps) => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
})

const Container = ({ count, onIncrement, onDecrement }) => <div> Count: {count}
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button></div>

export default connect(mapState, mapDispatch)(Container)