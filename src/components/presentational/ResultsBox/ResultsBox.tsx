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
            "Een autorit binnen de bebouwde kom veroorzaakt meer CO2 en luchtvervuiling zoals fijnstof dan een even lange rit met dezelfde auto buiten de bebouwde kom. Dit komt doordat er meer geremd, geschakeld en opgetrokken wordt. Bovendien komen meer mensen in aanraking met vervuiling. ",
            "Het is beter voor het milieu om tijdens daluren te reizen met de trein. De rede hiervoor is dat de bezettingsgraad (de hoeveelheid passagiers) tijdens de spits bepaald hoeveel bussen en wagons er worden gebruikt en verkocht. Als er meer in de daluren wordt gereisd, zal de bezettingsgraad tijdens de spits verminderen, waardoor er kortere en minder bussen en wagons nodig zijn, wat dus beter is voor het milieu. ",
            "Een benzinescooter is vervuilender dan een reguliere benzine auto. Hoe ouder je scooter is, hoe meer hij vervuilt. ",
            "Hoe vaker de fiets gebruikt wordt, hoe beter. ",
            "Vliegtuig is het correcte antwoord. Dit voertuig vervuilt het milieu het meest.",
            "Hoe minder er op vliegvakantie wordt gegaan hoe beter want het vliegtuig is het meest vervuilende vervoersmiddel. Door vliegen worden er CO2, stikstofoxiden, roet en andere broeikasgassen uitgestoten in de hogere atmosfeer. Dit geeft een extra broeikas effect . Het beste alternatief voor het vliegtuig is de trein. De trein is een schonere en veiligere manier van reizen, het is vaak wel duurder (en heeft ook zeker nog zijn onhandigheden). ",
            "Een elektrische auto of scooter is veel beter voor het milieu. Wel is het zo dat een scooter die gebruik maakt van fossiele brandstoffen schadelijker is dan een benzine auto. ",
            "De fiets of lopend zijn de beste uitkomsten. Daarna het ov en als laatst de auto. ",
            "Alleen in de auto zitten is schadelijker voor het milieu dan samen in een auto zitten. De klimaatimpact van auto's hangt af van het aantal inzittenden, het bouwjaar en hoe zuinig de auto is."
        ]
    } else if (category == "voedsel") {
        tips = [
            "als mens is het beter om flexitari??r te zijn. Een mens heeft namelijk stoffen nodig die veel in vlees voorkomen. Vlees is dus belangrijk voor de mens. De hoeveelheid vlees die nu wordt gegeten en de hoeveelheid dieren die ervoor worden geslacht is wel veel te hoog en slecht voor het millieu, dit moet dus verminderd worden.",
            "Vis is veel minder schadelijk voor het millieu om te kweken. Het kweken van vee zorgt voor veel vervuilende gassen van zowel de dieren als de machines die worden gebruikt om de dieren te houden en te verwerken. Wat ook een voordeel is is dat er geen grondgebied wat voor andere dingen gebruikt kan worden in beslag wordt genomen. Vissen worden namelijk in water gekweekt.",
            "Het is goed om minimaal 1 tot 2 keer per week vis te eten. Vis is heel gezond omdat er veel mineralen inzitten en er veel eiwitten en gezonde vetten inzitten die onmisbaar zijn voor je lichaam. Daarnaast is het voor het milieu een stuk beter om vis te kweken.",
            "Het is voor het millieu beter als iedereen minimaal 1 tot 2 keer per week vegatarisch zou eten. Dan is er namelijk minder vraag naar vlees, en wordt er in de toekomst minder vee gehouden.",
            "Van het varken wordt het meest gebruikt. Het varken wordt namelijk helemaal gebruikt voor zowel mensen als dieren. Zo wordt er van varken zowel hondenvoer en kauwstokken e.d. als vlees voor mensen gemaakt en gaat er bijna niks van het varken verloren.",
            "Van koeien krijgen vlees, melk en leer. Dit zijn producten die heel veel worden gebruikt in de samenleving. Koeien geven een groot gedeelte van hun leven melk, waardoor ze al heel waardevol zijn voordat ze geslacht worden. Aangezien we van ????n dier meerdere producten krijgen is de koe het beste dier om te kweken.",
            "Het is niet slecht om biologische producten te kopen, dan weet je namelijk dat er geen schadelijke producten in zitten, en dan weet je dat de dieren die zijn gedood voor het vlees geen slecht leven heeft gehad.",
            "Een product is biologisch als er geen synthetische producten worden gebruikt bij het verbouwen van het product. Als het biologisch wordt verbouwd betekent dat dat er geen schadelijke stoffen op worden gespoten om ongedierte weg te houden, die schadelijk zijn voor de mens.",
            "Biologische producten zijn beter voor het millieu. Er komen namelijk geen syntetische producten bij kijken. Een nadeel is wel dat het veel meer plek in beslag neemt om biologische prodcuten te verbouwen. Die grond kan dan niet meer gebruikt worden om prodcuten te verbouwen die minder belastend zijn voor het millieu. Ook is er dan minder plek voor natuur."
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
            "Een autorit binnen de bebouwde kom is schadelijker voor het millieu, omdat je telkens gas moet geven en weer remmen.",
            "Neem je eigen tasjes mee naar de winkel.",
            "Koeien zijn het beste om te fokken. Naast vlees zijn ze een bron van melk en leer. Dit geld alleen wanneer de melk en leer ook daadwerkelijk gebruikt worden.",
            "Fietsen is een erg duurzame manier van vervoer. Ook zorgt het ervoor dat je in beweging blijft!"
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