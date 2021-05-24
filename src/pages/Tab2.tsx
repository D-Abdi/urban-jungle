import * as React from 'react';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import QuizUI from '../components/presentational/QuizUI/QuizUI';
import './Tab2.css';

function Quiz(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  React.useEffect(() => {
    fetch("/public/assets/questions/Questions.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);

          console.log(result);
          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  console.log(isLoaded);
  return (
    <div> 
      {
        items && items.length>0 && items.map((item)=>
          <QuizUI 
            questionNr={1}
            totalQuestions={2}
            question={item.question}
            answers={item.answers}
          />
        )
      }
    </div>
  )
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
