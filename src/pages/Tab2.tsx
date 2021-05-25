import * as React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import QuizUI from '../components/presentational/QuizUI/QuizUI';
import './Tab2.css';

type Props = {
  setScore: any;
}

const Tab2: React.FC<Props> = ({setScore}) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <QuizUI setScore = {setScore}/>
      </IonContent>
    </IonPage>
  );
}


export default Tab2;
