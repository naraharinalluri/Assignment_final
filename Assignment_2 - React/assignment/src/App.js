import React from 'react';

import './App.css';
import Routez from './Routes';
import WelcomeScreen from './components/welcomescreen/welcomeScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <Navbar />
      <hr />
      <Image />
      <FormBody /> */}

      <Router>

        <Switch>
          {/* <Route exact path="/" component={Home} /> /> */}
          <Route exact path="/" component={Routez} />
          <Route exact path="/LoginSuccessful" component={WelcomeScreen} />
        </Switch>
      </Router>

      {/* <WelcomeScreen /> */}

    </div>

  );
}

export default App;
