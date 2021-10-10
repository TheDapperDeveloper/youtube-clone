import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Explore from "./components/Explore";
import Subscriptions from "./components/Subscriptions";
import Library from "./components/Library";
import History from "./components/History";

import { MainContainer } from "./styled-components/AppStyle";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Videos from "./components/Videos";

function App() {
  const [viewSidebar, setViewSidebar] = useState(true);
  return (
    <Router>
      <Switch>
        <MainContainer className="App">
          <Route exact path="https://www.youtube.com/"></Route>
          <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar} />
          <Sidebar viewSidebar={viewSidebar} />
          <Route>
            <Explore />
          </Route>
          <Route>
            <Subscriptions />
          </Route>
          <Route>
            <Library />
          </Route>
          <Route>
            <History />
          </Route>
          <Videos />
        </MainContainer>
      </Switch>
    </Router>
  );
}

export default App;
