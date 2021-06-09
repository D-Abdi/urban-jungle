import React from "react";
import { IonIcon } from '@ionic/react';
import { arrowForwardCircleSharp } from 'ionicons/icons';
import './Step2.css';

type Props = {
    prev: any
    next: any
}


const Step2: React.FC<Props> = (props) => {
  return (
    <div className="s2Div">
      <p className="text">
        De opwarming van de aarde is een heel urgent onderwerp. 
        Iedereen weet er van, maar voor velen van ons voelt het nog niet helemaal tastbaar.
        
    
      </p>
      <p className="text">
        Daarom hebben wij een app gemaakt waarin je als Rotterdammer kan zien wat je nou precies kan doen om dit tegen te gaan.
      </p>
      <p className="text">

        Eerst laten we even zien hoe het werkt!
      </p>

      <IonIcon icon={arrowForwardCircleSharp} id="arrow" onClick={props.next}></IonIcon>
    </div>
  );
}

export default Step2;