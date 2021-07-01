import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  Home from './Components/Home';
import  Dashboard from './Components/Dashboard';
import  Signin from './Components/Signin';
import  Nav from './Components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
     <BrowserRouter>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/signin' component={Signin}/>
       <Route exact path='/dashboard' component={Dashboard}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
