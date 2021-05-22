import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ARCanvas, DefaultXRControllers } from '@react-three/xr';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
// Import TSX files of the models
import TutorialDonut from '../components/presentational/tsxModels/TutorialDonut';
import TestCity from '../components/presentational/tsxModels/TestCity';
import ResultsBox from '../components/presentational/ResultsBox/ResultsBox';

const Tab3: React.FC = () => {
  
  if ("xr" in window.navigator) {
    /* WebXR can be used! */
    console.log("WebXR is available!");
  } else {
    /* WebXR isn't available */
    console.log("WebXR isn't available");
  }

  // This needs to be changed to the value recieved from the quiz
  let categories = ["vervoer", "voedsel", "afval"]
  let randomNumber = Math.floor(Math.random()*3)
  let category = categories[randomNumber];

  // Load models conditionaly
  let points = Math.floor(Math.random()*21);
  let model = <TutorialDonut position={[0,0,0]} scale={[20,20,20]} />;
  if (points < 10) {
    model = <TestCity position={[0,0,0]} />;
  } 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AR resultaat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ARCanvas sessionInit={{ requiredFeatures: ['hit-test'] }}>
          <DefaultXRControllers />
          <PerspectiveCamera makeDefault 
            rotation={[0,0,0]}
            position={[100,50,100]}/>
          <OrbitControls />
          <Suspense fallback={null}>
            {model}
          </Suspense>
          <ambientLight />
          <pointLight position={[600, 75, 600]} />
        </ARCanvas>
        <ResultsBox category={category} points={points} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
