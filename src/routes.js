import React,{Component} from "react";
import { HashRouter as Router , Route, Switch, Redirect, withRouter} from "react-router-dom";
import App from  './App'
import Header from './containers/Header'
import  Footer from './containers/Footer'
import  Home from './containers/Home'

// const routes = (
//     <Router>
//         <App>
//             <Switch>
//                 <Route path="/home" component={Home} />
//                 <Redirect from="/" to="/home"/>
//             </Switch>
//         </App>
//     </Router>
// );
class Routes extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Router>
                    <Switch>
                        <Route path="/" component={App}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )

    }
}
export default Routes




