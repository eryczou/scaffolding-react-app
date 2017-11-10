import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import {AppContainer} from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';

render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App' , ()=> {
        const NewRoot = require('./App').default;
        render(
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}

registerServiceWorker();
