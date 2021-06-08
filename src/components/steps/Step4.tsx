import React from "react";
import { IonIcon } from '@ionic/react';
import { arrowForwardCircleSharp, arrowBackCircleSharp } from 'ionicons/icons';

import quizImg from '../../assets/images/quizpic.jpeg';


type Props = {
    prev: any
    next: any
}

const Step4: React.FC<Props> = (props) => {
  return (
    <div className="s3Div">
      <h1 className="s3Title">Stap 2!</h1>
      <h3 className="s3Desc">Vul de quiz in</h3>
      <img src={quizImg} alt="Object detection example." className="objImg" />

      <div className="btn-group">
        <IonIcon icon={arrowBackCircleSharp} className="s3Arrow" onClick={props.prev}></IonIcon>
        <IonIcon icon={arrowForwardCircleSharp} className="s3Arrow" onClick={props.next}></IonIcon>
      </div>
    </div>
  );
}

export default Step4;