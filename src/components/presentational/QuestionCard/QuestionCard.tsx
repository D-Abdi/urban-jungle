import * as React from 'react';
import { AnswerObject } from '../../../pages/Tab2'

import {IonCardSubtitle, IonCol, IonGrid, IonRow} from '@ionic/react';

import './QuestionCard.css'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => (
    <div className="QuestionCard">
        <div className="Questions">
            <IonCardSubtitle>
                Question: {questionNr} / {totalQuestions}
            </IonCardSubtitle>
            <p dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        <div className="Answers">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        {answers.map(answer => (
                            <div key={answer}>
                                <button className="QuestionBtn" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                                </button>
                            </div>
                        ))}
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    </div>
)

export default QuestionCard
