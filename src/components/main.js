import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './home'
import Roster from './roster'
import Schedule from './schedule'
import Login from './login'
import Register from './register'

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/roster' component={Roster} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Switch>
            </main>
        );
    }
}
export default Main