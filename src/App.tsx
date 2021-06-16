import React, { useState, useRef } from 'react' 
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, cubeOutline, helpCircleOutline, videocamOutline } from 'ionicons/icons';
import Tab0 from './pages/Tab0';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  let webcamRef = useRef(null)
  let canvasRef = useRef(null);
  let [detectedObject, setDetectedObject] = useState('')
  let [score, setScore] = useState(0);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/tab0">
            <Tab0 />
          </Route>
          <Route exact path="/tab1">
            <Tab1 webcamRef={webcamRef} canvasRef={canvasRef} detectedObject={detectedObject} setDetectedObject={setDetectedObject} />
          </Route>
          <Route exact path="/tab2">
            <Tab2 setScore={setScore} detectedObject={detectedObject} />
          </Route>
          <Route exact path="/tab3">
            <Tab3 score={score} detectedObject={detectedObject} />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab0" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
