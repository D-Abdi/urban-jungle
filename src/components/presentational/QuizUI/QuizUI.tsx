import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';

import axios from 'axios';
import { Redirect } from 'react-router';

import './QuizUI.css'

type Props = {
    setScore: any;
    detectedObject: any;
}

const QuizUI: React.FC<Props> = ({setScore, detectedObject}) => {
    
    const [items, setItems] = useState(null);
    const [questionNr, setQuestionNr] = useState(1);
    const [totalQuestions, setTotalQuestions] = useState(9);
    const [question, setQuestion] = useState(null);
    const [answers, setAnswers] = useState(null);
    
    function chooseAnswer(answer) {
        setScore((prevScore) => prevScore + answer[1])
        setQuestionNr(questionNr+1)
        if(questionNr+1 <= totalQuestions){
            setQA(questionNr)
        }
    }

    function setQA (number){
        setQuestion(items[number].question)
        setAnswers(items[number].answers)
    }
    
    React.useEffect(()=>{
        if(items !== null){
            setTotalQuestions(items.length)
            setQA(0)
        }
    },[items])

    // Classes object recognition can see: https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
    let vervoerArray = [
        'bicycle',
        'car',
        'motorcycle',
        'airplane',
        'bus',
        'train',
        'truck',
        'boat',
        'traffic light',
        'stop sign',
        'parking meter'
    ]  
    let voedselArray = [
        'wine glass',
        'cup',
        'fork',
        'knife',
        'spoon',
        'bowl',
        'banana',
        'apple',
        'sandwich',
        'orange',
        'broccoli',
        'carrot',
        'hot dog',
        'pizza',
        'donut',
        'cake',
        'dining table',
        'microwave',
        'oven',
        'toaster',
        'refridgerator'
    ]
    let afvalArray = [
        'bottle',
        'person',
        'sink',
        'backpack',
        'handbag',
        'toilet'
    ]

    React.useEffect(() => {
        axios.get("assets/questions/Questions.json")
            .then(
                res => {
                    // Add objects that objectdetection can recognize
                    if (voedselArray.includes(detectedObject)) {
                        setItems(res.data.voedsel); 
                    } else if (vervoerArray.includes(detectedObject)) {
                        setItems(res.data.vervoer)
                    } else if (afvalArray.includes(detectedObject)) {
                        setItems(res.data.afval)
                    } else {
                        setItems(res.data.overig)
                    }
                    
                }
            )
    }, [])
    if(answers && answers !== null){
        if(questionNr > totalQuestions){
            return <Redirect to="/tab3"/>
        }else{
            return(
                <IonCard className="question">
                    <IonCardSubtitle>
                        Question: {questionNr} / {totalQuestions}
                    </IonCardSubtitle>
                    <IonCardTitle>{question}</IonCardTitle>
                    <IonCardContent>
                        {answers.map((answer, index) => (
                            <IonCard key={index} className="answer" onClick={(e) => chooseAnswer(answer)}>
                                <IonCardContent> {answer[0]} </IonCardContent>
                            </IonCard>
                        ))}
                    </IonCardContent>
                </IonCard>
            )
        }  
    }else {
        return <p>Aan het laden... </p>
    }
}

export default QuizUI;