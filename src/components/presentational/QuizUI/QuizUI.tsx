import { IonCardSubtitle } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';

import axios from 'axios';

const QuizUI: React.FC = () => {
    const [score, setScore] = useState(0);
    const [items, setItems] = useState(null);
    const [questionNr, setQuestionNr] = useState(1);
    const [totalQuestions, setTotalQuestions] = useState(9);
    const [question, setQuestion] = useState(null);
    const [answers, setAnswers] = useState(null);
    
    function chooseAnswer(answer) {
        console.log("Choose answer: " + answer[0]);
        setScore(score + answer[1])
        console.log(score);
    }

    function setQA (number){
        if(items !== null){
        setQuestion(items[number].question)
        setAnswers(items[number].answers)
        }
    }
    
    React.useEffect(()=>{
        setQA(0)
    })

    React.useEffect(() => {
        axios.get("/assets/questions/Questions.json")
            .then(
                res => {
                    setItems(res.data); 
                }
            )
            .then(()=>setQA(0))
    }, [])
    if(answers && answers !== null){
        return(
            <div className="question">
                <IonCardSubtitle>
                    Question: {questionNr} / {totalQuestions}
                </IonCardSubtitle>
                <p>{question}</p>
                <div>
                    {answers.map((answer, index) => (
                        <div key={index} className="answer" onClick={(e) => chooseAnswer(answer)}>
                            {answer[0]}
                        </div>
                    ))}
                </div>
            </div>
        )
    }else {
        return <p>Aan het laden... </p>
    }
}

export default QuizUI;