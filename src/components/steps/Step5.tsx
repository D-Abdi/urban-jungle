import React from "react";
import { IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom'
import { arrowForwardCircleSharp, arrowBackCircleSharp, helpSharp, checkmarkSharp, checkmarkCircleSharp } from 'ionicons/icons';

import modelImg from '../../assets/images/modelpic.jpeg';

import './Step5.css'

type Props = {
    prev: any
    next: any
}

const Step4: React.FC<Props> = (props) => {
  let history = useHistory();

  return (
    <div className="s3Div">
      <h1 className="s3Title">Stap 3!</h1>
      <h3 className="s3Desc">Zie het resultaat</h3>
        <IonIcon icon={helpSharp} className="questionMark" />

      <div className="btn-group">
        <IonIcon icon={arrowBackCircleSharp} className="s3Arrow" onClick={props.prev}></IonIcon>
        <IonIcon icon={checkmarkCircleSharp} className="s3Arrow" onClick={() => history.push('/Tab1')}></IonIcon>
      </div>
    </div>
  );
}

export default Step4;