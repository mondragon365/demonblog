import React from 'react'
import Header from './header'
import Main from './main'
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes'
import store from '../store';
import agent from '../agent';
import { push } from 'react-router-redux';
import history from '../history'

const mapStateToProps = state => {
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        currentUser: state.common.currentUser,
        redirectTo: state.common.redirectTo
    }
};
const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
    onRedirect: () =>
        dispatch({ type: REDIRECT })
});

class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            console.log(history);
            history.push('/');
            //store.dispatch(push(nextProps.redirectTo));
            //this.props.onRedirect();
        }
    }
    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            //agent.setToken(token);
            console.log('necesito agente');
        }
        this.props.onLoad(token ? agent.Auth.current() : null, token);
    }
    render() {
        if (this.props.appLoaded) {
            return (
                <div>
                    <Header
                        appName={this.props.appName}
                        currentUser={this.props.currentUser} />
                    <Main />
                </div>
            );
        }
        else {
            return (
                <div>
                    <Header
                        appName={this.props.appName}
                        currentUser={this.props.currentUser} />
                    <Main />
                </div>
            );
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)