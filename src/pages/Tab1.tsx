import React, { useRef, useEffect, useCallback, useState } from 'react'
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { drawRect }  from '../components/drawRect';

import ExploreContainer from '../components/ExploreContainer'; 
import './Tab1.css';

const Tab1: React.FC = () => {
  let webcamRef = useRef(null);
  let canvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

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
    }
  };

  // use run coco every cycle
  useEffect(()=>{runCoco()},[]);

  // Function for taking a picture
  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImgSrc(image)     
    },
    [webcamRef]
  )

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Object Detection</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Webcam
            ref={webcamRef}
            muted={true} 
            id="OD-Webcam"
            screenshotFormat="image/jpeg"
          />

          <canvas
            ref={canvasRef}
            id="OD-Canvas"
          />
          {/* {imgSrc && (
            <img src={imgSrc} id="OD-Snapshot" />
            )} */}
          
          <button onClick={capture}>Snap a pic</button>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
