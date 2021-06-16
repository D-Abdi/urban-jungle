import React from "react";
import { IonIcon } from '@ionic/react';
import { arrowForwardCircleSharp, arrowBackCircleSharp } from 'ionicons/icons';

import './Step3.css';
import objImg from '../../assets/images/detectionpic.jpeg';

type Props = {
    prev: any
    next: any
}

const Step3: React.FC<Props> = (props) => {
  return (
    <div className="s3Div">
      <h1 className="s3Title">Stap 1</h1>
      <h3 className="s3Desc">Scan een object naar keuze</h3>
      <img src="./assets/images/objectrecognition.png" alt="Object herkenning screenshot" className="objImg" />

      <div className="btn-group">
        <IonIcon icon={arrowBackCircleSharp} className="s3Arrow" onClick={props.prev}></IonIcon>
        <IonIcon icon={arrowForwardCircleSharp} className="s3Arrow" onClick={props.next}></IonIcon>
      </div>
    </div>
  );
}

export default Step3;