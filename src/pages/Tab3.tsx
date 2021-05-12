import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
// Import TSX files of the models
import TutorialDonut from '../components/tsxModels/TutorialDonut';

const Tab3: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AR resultaat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Canvas>
          <PerspectiveCamera makeDefault 
            rotation={[0,0,0]}
            position={[50,150,400]}/>
          <OrbitControls />
          <Suspense fallback={null}>
            <TutorialDonut position={[0,0,0]} />
          </Suspense>
          <ambientLight />
          <pointLight position={[600, 75, 600]} />
        </Canvas>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
