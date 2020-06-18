import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListUsers from '../views/list_users'
import DetailUser from '../views/detail_user'

class AppRoute extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/">
                    <ListUsers/>
                </Route>
                <Route path="/detail/:id">
                    <DetailUser/>
                </Route>
            </Switch>
        )
    }
}

export default AppRoute