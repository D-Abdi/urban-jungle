import { IonButton, IonCol, IonContent, IonItem, IonLabel, IonList, IonModal, IonRow, IonThumbnail } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';
import './ResultsBox.css';

type Props = {
    category : string;
    points : number;
}

const ResultsBox: React.FC<Props> = ({ category, points }) => {
    let tips = [];
    if (category == "vervoer") {
        tips = [
            "Oh weet ik veel.. Ga fietsen?",
            "Treinen amirite.",
            "Fietsen is beter ALS met de bus!",
            "Nog een tips?",
            "When will you learn, that your actions have consequences!?"
        ]
    } else if (category == "voedsel") {
        tips = [
            "Dit is de eerste tip over voedsel!",
            "Hmmm eten.",
            "Ja ik heb niet meer zoveel ideeën. Niet dat ik die eerder wel had tho..",
            "Roadkills kan je ook eten.",
            "Hoe proeft pinguin?"
        ]
    } else if (category == "afval") {
        tips = [
            "Afval moet je niet eten.",
            "Scheid je afval.",
            "Ionic is kut om te stylen.",
            "Of ik snap gewoon niet hoe je het moet gebruiken, dat is ook een viable optie..",
            "Afval, maak het niet! Dan hoef je het ook niet op te ruimen :o"
        ]
    }

    // Show tips in p elements
    const tipsElement = tips.map((tip, index) =>
        <IonItem key={index}>
            <IonLabel className="tipContainer ion-text-wrap">
                <h2>Tip #{index + 1}</h2>
                <h3>{category.charAt(0).toUpperCase()  + category.slice(1)}</h3>
                <p>{tip}</p>
            </IonLabel>
        </IonItem>
    );

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="modalContainer">
            <IonModal isOpen={showModal} backdropDismiss={false} cssClass='tipsModal'>
                <IonContent>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonItem className="points">
                                <IonThumbnail slot="start">
                                    <img src="./assets/icon/plantIcon.jpg" />
                                </IonThumbnail>
                                <IonLabel className="ion-text-wrap">Jij hebt {points} duurzaamheidspunten!</IonLabel>
                            </IonItem>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonList inset={true} lines="full">
                                {tipsElement}
                            </IonList>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonButton onClick={() => setShowModal(false)} className="ion-align-self-center closeModalButton" size="large">Sluiten</IonButton>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    
                </IonContent>
            </IonModal>
            
            <IonButton onClick={() => setShowModal(true)} className="openModalButton" size="large">Open tips</IonButton>
        </div>
    )
}

export default ResultsBox