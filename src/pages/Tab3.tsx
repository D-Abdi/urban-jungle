import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import React, { Suspense, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ResultsBox from '../components/presentational/ResultsBox/ResultsBox';

// Import TSX files of the models
import CityBad from '../components/presentational/tsxModels/CityBad';
import CityNeutral from '../components/presentational/tsxModels/CityNeutral';
import CityGood from '../components/presentational/tsxModels/CityGood';
import { CubeTextureLoader } from 'three';

type Props = {
  score: number;
  detectedObject: any;
}

const Tab3: React.FC<Props> = ({score, detectedObject}) => {
  // Classes object recognition can see: https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
  let vervoerArray = [
    'bicycle',
    'car',
    'motorcycle',
    'airplane',
    'bus',
    'train',
    'truck',
    'boat',
    'traffic light',
    'stop sign',
    'parking meter'
  ]
  let voedselArray = [
    'bottle',
    'wine glass',
    'cup',
    'fork',
    'knife',
    'spoon',
    'bowl',
    'banana',
    'apple',
    'sandwich',
    'orange',
    'broccoli',
    'carrot',
    'hot dog',
    'pizza',
    'donut',
    'cake',
    'dining table',
    'microwave',
    'oven',
    'toaster',
    'sink',
    'refridgerator'
  ]
  let category = 'overig'
  if (voedselArray.includes(detectedObject)) {
    category = 'voedsel'
  } else if (vervoerArray.includes(detectedObject)){
    category = 'vervoer'
  }

  // Load models based on the quiz score 
  // Change number to change the amount of points needed for the other model
  let model = <CityNeutral position={[0,0,0]} />;
  if (score < 15) { 
    model = <CityBad position={[0,0,0]} />;
  } else if (score > 30) { 
    model = <CityGood position={[0,0,0]} />;
  }

  // Loads the skybox texture and applies it to the scene.
  function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader
    .setPath( 'assets/skybox/' )
    .load([
      "skybox-right.png",   // right
      "skybox-left.png",    // left
      "skybox-top.png",     // top
      "skybox-bottom.png",  // bottom
      "skybox-front.png",   // front
      "skybox-back.png",    // back
    ]);
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>3D viewer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Canvas shadows>
          <PerspectiveCamera makeDefault 
            rotation={[0,0,0]}
            position={[100,50,100]} />
          <OrbitControls />
          <Suspense fallback={null}>
            {model}
          </Suspense>
          <ambientLight intensity={0.2} />
          <pointLight 
            position={[600, 750, 600]} 
            intensity={1} />
          <SkyBox />
        </Canvas>
        <ResultsBox category={category} points={score} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
