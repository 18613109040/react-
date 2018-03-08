import React from 'react'
import lazyLoadComponent from 'lazy-load-component' //webpack异步加载React组件的高阶函数。
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ReactChildrenMap} from './commons/ReactChildrenMap'
import './index.less'
import Home from './containers/Home/index'
// import Home from 'bundle-loader?lazy!./containers/Home/index';
const Header = lazyLoadComponent(() => import('./containers/Header/index'))
//const Home = lazyLoadComponent(() => import('./containers/Home/index'))
const App = () => {
    return (
        <div>
            <Route
                component={Home}
                exact
                path="/"
            />
            <Switch>
                <Route
                    component={Header}
                    path="/search"
                />
            </Switch>
        </div>
    )

}
export default App