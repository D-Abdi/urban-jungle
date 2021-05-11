import { shuffleArray } from './utils';

// Define types for the questions
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

// Types from the Question type above, and added answers property
export type QuestionState = Question & { answers: string[] };

// Constants that don't change
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    // Load in the end point to the Quiz API
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    // Use fetch and convert to JSON
    const data = await (await fetch(endPoint)).json();
    // Map over the results. use the spread operator to copy the question and shuffle the correct answer in the answers array
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer
        ])
    }))
}