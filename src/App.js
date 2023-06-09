
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmpCon from './components/ListEmpCon';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import createEmployeeComponent from './components/createEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
function App() {
  return (
    <div>
      <Router>

        <HeaderComponent />
        <div className="Container">
          {/* inside this we configure switch */}
          <Switch>localhost:3000/update-employee/
            {/* exact will look for the exact route */}
            <Route path="/" exact component={ListEmpCon}></Route>
            <Route path="/employees" component={ListEmpCon}></Route>
            <Route path="/add-employee" component={createEmployeeComponent}></Route>
            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />

      </Router>
    </div>

  );
}

export default App;
