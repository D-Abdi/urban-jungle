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
        Deze app helpt jou inzicht krijgen in jouw duurzaamheid.
        Dit gebeurt middels een aantal quizvragen.
      </p>

      <p className="text">
        Het resultaat is een AR filter op basis van jouw duurzaamheid.
        Ook krijg je tips om je duurzaamheid te verbeteren
      </p>

      <IonIcon icon={arrowForwardCircleSharp} id="arrow" onClick={props.next}></IonIcon>
    </div>
  );
}

export default Step2;