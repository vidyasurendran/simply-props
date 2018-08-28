import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Container from './Container'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


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

const store = createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

    class App extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <Container />
                </Provider>
            );
        }
    }

ReactDOM.render(<App />, document.getElementById('root'));
