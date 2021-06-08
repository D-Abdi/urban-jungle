import React, { useEffect } from 'react';
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { useHistory } from 'react-router-dom'

import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { scanOutline } from 'ionicons/icons';
import { drawRect }  from '../components/functional/drawRect/drawRect';

import './Tab1.css';

type Props = {
  webcamRef: any;
  canvasRef: any;
  detectedObject: any;
  setDetectedObject: any;
}

let camWidth = window.innerWidth;

const videoConstraints = {
  width: camWidth,
  facingMode: "environment"
};

const regularVideo = {
  width: camWidth,
  facingMode: "user"
}

const Tab1: React.FC<Props> = ({ webcamRef, canvasRef, detectedObject, setDetectedObject }) => {
  // History
  let history = useHistory();

  // Main function
  const runCoco = async () => {
    const net : any = await cocossd.load();
    
    // Loop and detect hands 
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net : any) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video : HTMLElement = webcamRef.current.video;
      const videoWidth : number = webcamRef.current.video.videoWidth;
      const videoHeight : number = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx)

      if (obj[0] !== undefined && obj[0].class !== false) {
        setDetectedObject(obj[0].class)
      } else return 
    }
  };

  // use run coco every cycle
  useEffect(()=> {
    runCoco();

    return function cleanup() {
      console.log("Cleanup!")
    }
  },[]);

  // Better function for taking a picture
  const stop = () => {
    let stream = webcamRef.current.video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    webcamRef.current.video.srcObject = null;
    console.log(detectedObject)  
    
    history.push('/tab2')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Object Detection</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Webcam
          ref={webcamRef}
          muted={true} 
          id="OD-Webcam"
          screenshotFormat="image/jpeg"
          videoConstraints={window.innerWidth < 1000 ? videoConstraints : regularVideo}
          mirrored={window.innerWidth < 1000 ? false : true}
        />
        <canvas
          ref={canvasRef}
          id="OD-Canvas"
        />
        <IonButton onClick={stop} className="snap-a-pic">Scan het object! <IonIcon icon={scanOutline} id="scanOutline" /></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
