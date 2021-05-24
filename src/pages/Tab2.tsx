import * as React from 'react';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import QuizUI from '../components/presentational/QuizUI/QuizUI';
import './Tab2.css';

import axios from 'axios';

function Quiz(){
  const [items, setItems] = useState(null);
  React.useEffect(() => {
    axios.get("/assets/questions/Questions.json")
      .then(
        res => {
          setItems(res.data);      
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  if(items && items !== null){
    return (
      <QuizUI 
        questionNr={1}
        totalQuestions={2}
        question={items[0].question}
        answers={items[0].answers}
      />
    )   
  }else {
    return(
      <p> Aan het laden!</p>
    )
  }
}
const Tab2: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Quiz/>
      </IonContent>
    </IonPage>
  );
}


export default Tab2;
