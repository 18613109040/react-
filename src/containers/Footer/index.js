import React, {Component} from "react";
import {HashRouter as Router,Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
class Header extends Component {
    static propTypes = {};

    static defaultProps = {};
    static contextTypes = {

    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    componentWillMount() {

    }

    componentDidMount() {


    }

    render() {
        return (
            <Router>
                <div>footer

                </div>

            </Router>

        )

    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Header)
