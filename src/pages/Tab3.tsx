import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ResultsBox from '../components/presentational/ResultsBox/ResultsBox';

// Import TSX files of the models
import TutorialDonut from '../components/presentational/tsxModels/TutorialDonut';
import TestCity from '../components/presentational/tsxModels/TestCity';

const Tab3: React.FC = () => {

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
          <IonTitle>3D viewer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Canvas>
          <PerspectiveCamera makeDefault 
            rotation={[0,0,0]}
            position={[100,50,100]}/>
          <OrbitControls />
          <Suspense fallback={null}>
            {model}
          </Suspense>
          <ambientLight />
          <pointLight position={[600, 75, 600]} />
        </Canvas>
        <ResultsBox category={category} points={points} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
