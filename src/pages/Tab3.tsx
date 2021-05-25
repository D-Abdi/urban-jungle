import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import React, { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ResultsBox from '../components/presentational/ResultsBox/ResultsBox';

// Import TSX files of the models
import TutorialDonut from '../components/presentational/tsxModels/TutorialDonut';
import TestCity from '../components/presentational/tsxModels/TestCity';
import { CubeTextureLoader } from 'three';

const Tab3: React.FC = () => {

  // This needs to be changed to the value recieved from the quiz
  let categories = ["vervoer", "voedsel", "afval"]
  let randomNumber = Math.floor(Math.random()*3)
  let category = categories[randomNumber];

  // Load models conditionaly
  let points = Math.floor(Math.random()*21);
  let model = <TutorialDonut position={[0,0,0]} scale={[20,20,20]} />;
  if (points < 11) {
    model = <TestCity position={[0,0,0]} castShadow receiveShadow />;
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
        <ResultsBox category={category} points={points} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
