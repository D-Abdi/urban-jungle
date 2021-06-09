import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/react';
import urbanbg1 from '../assets/images/urbanbg1.png'
import * as React from 'react';

import { Steps, Step } from 'react-step-builder'
import Step1 from '../components/steps/Step1'
import Step2 from '../components/steps/Step2'
import Step3 from '../components/steps/Step3'
import Step4 from '../components/steps/Step4'
import Step5 from '../components/steps/Step5'

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
            <Steps>
              <Step component={Step1} />
              <Step component={Step2} />
              <Step component={Step3} />
              <Step component={Step4} />
              <Step component={Step5} />
            </Steps>
          </IonContent>
      </IonPage>
  );
}

export default Tab0;
