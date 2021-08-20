import {
  BrowserRouter as Router,
  Switch,
  Route
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
          <Route path="/loan/basic/report">
            <BasicLoan />
          </Route>
          <Route path="/loan/basic/graph">
            <BasicLoan />
          </Route>
          <Route path="/loan/basic/save">
            <BasicLoan />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
