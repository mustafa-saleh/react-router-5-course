import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function Users() {
  const users = [
    {id: 1, name: 'ahmed'},
    {id: 2, name: 'ali'},
  ]

  return (
    <div>
      <h2>Users</h2>
      <hr />
      {users.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  )
}

function UserProfile(props) {
  console.log(props)
  return (
    <div>
      <h1>UserProfile: {props.match.params.userId}</h1>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link> <Link to="/users">Users</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:userId" component={UserProfile} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
