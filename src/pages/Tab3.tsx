import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import * as THREE from 'three';
import { useEffect } from 'react';

const Tab3: React.FC = () => {

  useEffect(() => {
    const rendererContainer = document.getElementById("rendererContainer");

    // Create scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, rendererContainer.offsetWidth / rendererContainer.offsetHeight, 0.1, 1000 );
    camera.position.z = 5;

    // Create renderer (view in which the scene is rendered)
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( rendererContainer.offsetWidth, rendererContainer.offsetHeight );
    rendererContainer.appendChild(renderer.domElement)

    // Create cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00  } );
    const cube = new THREE.Mesh( geometry, material )
    // Add cube to scene
    scene.add( cube );
    
    // Render
    renderer.render( scene, camera );

    // Animate the cube
    function animate() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate();
  });
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AR resultaat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen id="rendererContainer">
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
