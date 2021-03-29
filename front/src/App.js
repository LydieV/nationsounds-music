import './App.css';

import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profil from './Profil';
import MentionsLegales from './MentionsLegales';
import Cookies from './Cookies';
import Partenaires from './Partenaires';
import Billetterie from './Billetterie';
import InfosFAQ from './InfosFAQ';
import CarteInt from './CarteInt';
import Contact from './Contact';
import Photos from './Photos';
import Programme from './Programme';
import Artistes from './Artistes';
import AdminInfo from './AdminInfo';
import AdminNotification from './AdminNotification';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/profil" component={Profil} />
            <Route exact={true} path="/billetterie" component={Billetterie} />
            <Route exact={true} path="/programme" component={Programme} />
            <Route exact={true} path="/infosFAQ" component={InfosFAQ} />
            <Route exact={true} path="/carte" component={CarteInt} />
            <Route exact={true} path="/partenaires" component={Partenaires} />
            <Route exact={true} path="/contact" component={Contact} />
            <Route exact={true} path="/photos" component={Photos} />
            <Route exact={true} path="/mentionslegales" component={MentionsLegales} />
            <Route exact={true} path="/cookies" component={Cookies} />
            <Route exact={true} path="/artistes" component={Artistes} />
            <Route exact={true} path="/admininfo" component={AdminInfo} />
            <Route exact={true} path="/adminnotification" component={AdminNotification} />
            <Route path="*" component={() => <p>Tu sais pas trouvé une page correcte t'es nul mec</p>} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
