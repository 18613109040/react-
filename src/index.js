import React from 'react'
import ReactDOM from 'react-dom'
import  {AppContainer} from 'react-hot-loader' //AppContainer是一个HMR必须包裹（wrapper）组件
import App from './App'
import {BrowserRouter} from 'react-router-dom'
const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </AppContainer>
        ,
        document.getElementById('root')
    )
render(App)
if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('./App', (err) => {
        if (err) {
            console.log(err);
        }
        const NextRootContainer = require('./App').default
        render(NextRootContainer)

    })
}