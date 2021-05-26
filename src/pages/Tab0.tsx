import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import * as React from 'react';

import './Tab0.css';

const Tab0: React.FC = () => {

  return (
      <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Urban Jungle</IonTitle>
            </IonToolbar>
        </IonHeader>
          <IonContent fullscreen>
            <p>Hello!</p>
          </IonContent>
      </IonPage>
  );
}

export default Tab0;
