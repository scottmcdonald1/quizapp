import React, { useState } from "react";
import { GetData } from "../get-data";

export default function Quiz() {
    const quizData = GetData();
    const [activeQuestionIndex, setactiveQuestionIndex] = useState(0);
    const activeQuestion = quizData[activeQuestionIndex];
    const isComplete = false;

    const isLastQuestion = activeQuestionIndex >= (quizData.length -1);
    const nextButton = isLastQuestion ? "Finish Quiz" : "Next Question";

    const questionText = activeQuestion.question;
    const answerArray = activeQuestion.incorrect_answers;

    const correctAnswer = activeQuestion.correct_answer;
    answerArray.push(correctAnswer);


    const handleClick = () => {
        if (!isLastQuestion) {
            setactiveQuestionIndex(activeQuestionIndex += 1);
            console.log(activeQuestionIndex);
        } 
    }

    if (!isComplete) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">

                <Question question={questionText} answers={answerArray} />
                
                <button onClick={handleClick}
                className="ring-0 ring-ombreNaturelle31 hover:ring-1 hover:bg-vert59 hover:text-outremerGris text-ombreNaturelle31/80 m-1 py-2 px-3 border border-ombreNaturelle31 rounded transition-all" 
                >
                {nextButton}
                </button>
            </div> 
        )
    } else {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <h1 className="text-vert59 text-8xl font-bebasNeue">Great Job!</h1>
                <button
                className="ring-0 ring-ombreNaturelle31 hover:ring-1 hover:bg-vert59 hover:text-outremerGris text-ombreNaturelle31/80 m-1 py-2 px-3 border border-ombreNaturelle31 rounded transition-all" 
                >
                View Results
                </button>
            </div>
        )
    }
}

function Answers(props) {
    const answers = props.answers;
    let key = 0;
    
    const answersList = answers.map((answer) => {
        key++;
        answer = answer.replaceAll("&#039;", "")
        console.log(answer)
        return (
            <li key={key} className="w-full">
                <button type="button" className="w-full rounded px-6 py-2.5 text-ombreNaturelle31/60 font-montserrat leading-tight hover:border-2 hover:border-vert59 hover:text-ombreNaturelle31/75 border-2 border-ombreNaturelle31/50 focus:bg-vert59 focus:border-2 focus-border-ombreNaturelle31/50 focus:text-white transition duration-150 ease-in-out">{answer}</button>
            </li>
        )
    })

    return (
        <ul className="grid grid-cols-2 gap-4 my-11">{answersList}</ul>
    )
}

function Question(props) {

    return (
        <div className="w-full">
            <h1 className="text-vert59 text-2xl font-abel">{props.question}</h1>

            <Answers answers={props.answers} />

        </div>
    )
}

