import { IonCardSubtitle } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';

type Props = {
    questionNr: number;
    totalQuestions: number;
    question: string;
    answers: [];
}

const QuizUI: React.FC<Props> = ({questionNr, totalQuestions, question, answers}) => {
    function chooseAnswer(e) {
        console.log("Choose answer: " + e);
    }

    return(
        <div className="question">
            <IonCardSubtitle>
                Question: {questionNr} / {totalQuestions}
            </IonCardSubtitle>
            <p>{question}</p>
            <div>
                {answers.map((answer, index) => (
                    <div key={index} className="answer" onClick={(e) => chooseAnswer(e)}>
                        {answer}
                    </div>
                ))}
            </div>
        </div>
    )

}

export default QuizUI;