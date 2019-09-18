import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reducers from './reducers'
import home from './reducers/home'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const store = createStore(
    combineReducers({
        home
    })
)
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/roster' component={Roster} />
            <Route path='/schedule' component={Schedule} />
        </Switch>
    </main>
)
const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)
const Home = () => (
    <div>Home
    </div>
)
const Roster = () => (
    <div>Roster
    </div>
)
const Schedule = () => (
    <div>Schedule
    </div>
)
ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
