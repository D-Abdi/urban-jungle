import { IonButton, IonCol, IonContent, IonItem, IonLabel, IonList, IonModal, IonRow, IonThumbnail, IonTitle } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';
import './ResultsBox.css';
import { useHistory } from 'react-router-dom'

type Props = {
    category : any;
    points : number;
}

const ResultsBox: React.FC<Props> = ({ category, points }) => {
    let tips = [];
    if (category == "vervoer") {
        tips = [
            "Vervoer tip #1",
            "Vervoer tip #2",
            "Vervoer tip #3",
            "Vervoer tip #4",
            "Vervoer tip #5"
        ]
    } else if (category == "voedsel") {
        tips = [
            "Voedsel tip #1",
            "Voedsel tip #2",
            "Voedsel tip #3",
            "Voedsel tip #4",
            "Voedsel tip #5"
        ]
    } else if (category == "afval") {
        tips = [
            "Gooi plastic afval bij het plastic en probeer het zoveel mogelijk te vermijden. Als Willem van Oranje een plastic flesje had begraven zouden wij die nog steeds kunnen vinden.",
            "Glas kan oneindig gerecycled worden, mits het wordt ingeleverd in de glasbak!",
            "Neem je eigen tasjes mee naar de winkel.",
            "Gebruik de gft-bak voor gft-afval. Van dit afval wordt biogas en compost gemaakt.",
            "Scheidt je afval zorgvuldig zodat het goed gerecycled kan worden. Haal bijvoorbeeld je folders uit het plastic voordat je ze bij het oud papier gooit.",
            "Afval scheiden is niet alleen goed voor het milieu, maar is in veel gevallen ook goedkoper dan afvalverbranding.",
            "Koop een waterfles, zodat je niet steeds een nieuw flesje hoeft te kopen en weer weg te gooien.",
            "Hergebruik verpakkingen, zoals ijsbakjes. Hier kan je bijvoorbeeld overgebleven eten in bewaren om later weer op te eten."
        ]
    } else if (category == "overig") {
        tips = [
            "Overig tip #1",
            "Overig tip #2",
            "Overig tip #3",
            "Overig tip #4",
            "Overig tip #5"
        ]
    }

    // Show tips in p elements
    const tipsElement = tips.map((tip, index) =>
        <IonItem key={index}>
            <IonLabel className="tipContainer ion-text-wrap">
                <h2></h2>
                <h2>{category.charAt(0).toUpperCase()  + category.slice(1)} tip #{index + 1}</h2>
                <p>{tip}</p>
            </IonLabel>
        </IonItem>
    );

    const [showModal, setShowModal] = useState(false);

    let history = useHistory();
    function redirectHome() {
        // Close modal
        setShowModal(false)
        // Go to homepage
        history.push('/tab0')
        // Reload to reset object recognition and quizscore
        window.location.reload()
    }

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
                                <IonTitle className="ion-text-wrap">Jij hebt {points}/45 duurzaamheidspunten!</IonTitle>
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
                        <IonCol>
                            <IonButton onClick={redirectHome} className="ion-align-self-center closeModalButton" size="large">Home</IonButton>
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