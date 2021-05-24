import * as React from 'react';
import { useState } from 'react';
import { IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab2.css';

// Import the fetchQuizQuestions function
import { fetchQuizQuestions } from '../utils/API'

//Types
import { QuestionState, Difficulty } from '../utils/API';
import QuestionCard from '../components/presentational/QuestionCard/QuestionCard';

// Export the answers object to be used in QuestionCard
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

// Totals questions constant
const TOTAL_QUESTIONS = 10;


const Tab2: React.FC = () => {
  
  // Set states
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  // Function for new game
  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    // New Questions var needs to be created
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    // Reset states and set new questions
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  // check if answer is correct. Increment score.
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If game has not ended
    if (!gameOver) {
      // Set answer to selected html button
      const answer = e.currentTarget.value;

      // answer is correct if its equal to answer
      const correct = questions[number].correct_answer === answer

      // Increment score if correct
      if (correct) setScore(prev => prev + 1)

      // Set the answers object
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      // Set user answer state
      setUserAnswers((prev) => [...prev, AnswerObject])
    }
  }

  const nextQuestionHandler = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="IonQuizCard">
          <IonCardTitle>React Quiz</IonCardTitle>
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <IonButton onClick={startTrivia}>
              Start
            </IonButton>
          ) : null}

          {!gameOver ? <IonCardSubtitle className="QuizScore">Score: {score}</IonCardSubtitle> : null}

          {loading && <IonCardSubtitle>Loading Questions...</IonCardSubtitle>}

          {!loading && !gameOver && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}

          {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
            <IonButton onClick={nextQuestionHandler}>
              Next Question
            </IonButton>
          ) : null }

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
