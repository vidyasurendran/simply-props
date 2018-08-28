import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { createStore } from 'redux'

//Reducer
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

//Store
const store = createStore(reducer);

//Container component
const Container = ({ count, onIncrement, onDecrement }) => <div> Count: {count}
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button></div>

//App Component
class App extends React.Component {
    render() {
        return (
            <Container
                count={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
        );
    }
}

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render()
store.subscribe(render)
