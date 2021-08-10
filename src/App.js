import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieReview from "./Components/moviereview";
import TopStories from "./Components/topstories";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MovieReview />
          </Route>

          <Route path="/topstories">
            <TopStories />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
