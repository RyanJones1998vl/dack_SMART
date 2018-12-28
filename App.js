import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import elesApp from './app/core-module/reducers'
import ElesList from './app/containers/ElesList'

const store = createStore(elesApp)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ElesList/>
            </Provider>
        );
    }
}

export default App;