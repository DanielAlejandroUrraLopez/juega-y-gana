import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Ruleta from './Home.js';
import Configuracion from './About.js';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="ruleta" component={Ruleta} title="Ruleta" initial={true} />
      <Scene
        key="configuracion"
        component={Configuracion}
        title="Configuracion"
      />
    </Scene>
  </Router>
);
export default Routes;
