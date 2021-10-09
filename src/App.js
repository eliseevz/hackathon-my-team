import './App.css'
import NavBar from './components/navBar/NavBar'
import { Route, Switch } from 'react-router'
import Home from './pages/home'
import Favorite from './pages/favorite'
import Connect from './pages/connect'
import Members from './pages/members'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/members/:memberId?' component={Members} />
        <Route path='/favorite' component={Favorite} />
        <Route path='/connect' component={Connect} />
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  )

}

export default App
