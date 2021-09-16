import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import "./App.css";
import AddTutorial from "./components/AddTutorial";
import Header from "./components/Header";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add-tutorial" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
