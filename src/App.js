import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import BasicLoan from './pages/Loan'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/loan/basic">
            <BasicLoan />
          </Route>
          <Route path="/users">

          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
