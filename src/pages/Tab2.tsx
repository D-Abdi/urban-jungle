import * as React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import QuizUI from '../components/presentational/QuizUI/QuizUI';
import './Tab2.css';

type Props = {
  setScore: any;
  detectedObject: any;
}

const Tab2: React.FC<Props> = ({setScore, detectedObject}) => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <QuizUI setScore = {setScore} detectedObject={detectedObject}/>
      </IonContent>
    </IonPage>
  );
}


export default Tab2;
