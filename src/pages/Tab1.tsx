import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { Link, Redirect, useHistory } from 'react-router-dom'

import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { cameraOutline } from 'ionicons/icons';
import { drawRect }  from '../components/functional/drawRect/drawRect';
 
import ExploreContainer from '../components/presentational/ExploreContainer/ExploreContainer'; 
import './Tab1.css';
import { type } from 'node:os';

type Props = {
  webcamRef: any;
  canvasRef: any;
  detectedObject: any;
  setDetectedObject: any;
}

const videoConstraints = {
  facingMode: "user",
  width: 350,
  height: 500
};

const regularVideo = {
  facingMode: "user"
}

const Tab1: React.FC<Props> = ({ webcamRef, canvasRef, detectedObject, setDetectedObject }) => {
  // History
  let history = useHistory();

  // Main function
  const runCoco = async () => {
    const net : any = await cocossd.load();
    
    //  Loop and detect hands 
      setInterval(() => {
        detect(net);
      }, 10);

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

      console.log(obj[0].class)
      

    }
  };

  // use run coco every cycle
  useEffect(()=> {
    runCoco();
  },[detect]);

  // Better function for taking a picture
  const stop = () => {
    let stream = webcamRef.current.video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    webcamRef.current.video.srcObject = null;
    console.log(detectedObject)  
    
    history.push('/Tab2')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Object Detection</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
            <IonRow>
              <IonCol>
                <Webcam
                    ref={webcamRef}
                    muted={true} 
                    id="OD-Webcam"
                    screenshotFormat="image/jpeg"
                    videoConstraints={window.innerWidth <= 400 ? videoConstraints : regularVideo}
                />
              </IonCol>
            </IonRow>
            
            <IonRow>
            <IonCol>
              <canvas
                  ref={canvasRef}
                  id="OD-Canvas"
                />
              </IonCol>
            </IonRow>
          
            <IonRow>
              <IonCol>
              <IonButton onClick={stop} className="snap-a-pic">Take A Picture!<IonIcon icon={cameraOutline} id="cameraOutline" /></IonButton>
              </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
