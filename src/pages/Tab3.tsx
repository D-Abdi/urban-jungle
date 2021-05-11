import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import React, { useState ,useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
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
          <Suspense fallback={null}>
            <TutorialDonut position={[0, 0, 0]}/>
          </Suspense>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
