import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Routes from './Routes'

// Declare the entrypoint routes.
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component = { Home }/>
      <Route path='/courses' component = { Routes }/>
    </Switch>
  </main>
)

export default Main
