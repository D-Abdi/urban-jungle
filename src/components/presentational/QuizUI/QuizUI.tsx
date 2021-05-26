import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';

import axios from 'axios';
import { Redirect } from 'react-router';

import './QuizUI.css'

type Props = {
    setScore: any;
}

const QuizUI: React.FC<Props> = ({setScore}) => {
    
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

    React.useEffect(() => {
        axios.get("assets/questions/Questions.json")
            .then(
                res => {
                    setItems(res.data); 
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