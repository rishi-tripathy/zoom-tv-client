import React from 'react';
import NavBar from './components/NavBar.js'
import EventCard from './components/EventCard.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EventsPage from './components/EventsPage.js'
import './css/App.scss';
import './css/fonts.scss'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/events">
            <EventsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
