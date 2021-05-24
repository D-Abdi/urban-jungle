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
    const [score, setScore] = useState(0)
    function chooseAnswer(answer) {
        console.log("Choose answer: " + answer[0]);
        setScore(score + answer[1])
        console.log(score);
    }

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

}

export default QuizUI;