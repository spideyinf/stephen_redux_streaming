import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import history from '../history'

// React Context demo
import UserCreate from './userCreate/UserCreate'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <div className="item">
            Select a language:
            &nbsp;
            <i className="flag us" />
            <i className="flag vn" />
          </div>
          <Header />

          {/* Demo React Context */}
          <UserCreate />

          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit/:id' exact component={StreamEdit} />
            <Route path='/streams/delete/:id' exact component={StreamDelete} />
            <Route path='/streams/:id' exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
