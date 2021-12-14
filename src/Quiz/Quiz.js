import React, { useState } from "react";
import { GetData } from "../get-data";

export default function Quiz() {
    const quizData = GetData();
    const [activeQuestionIndex, setactiveQuestionIndex] = useState(0);
    const activeQuestion = quizData[activeQuestionIndex];
    const quizLength = quizData.length;

    const [correctUserAnswers, setCorrectUserAnswers] = useState(0);
    const percentage = (correctUserAnswers / quizLength) * 100;
    const [isComplete, setIsComplete] = useState(false);

    const isLastQuestion = activeQuestionIndex >= (quizLength -1);

    const questionText = activeQuestion.question;
    const answerArray = activeQuestion.incorrect_answers;

    const correctAnswer = activeQuestion.correct_answer;
    answerArray.push(correctAnswer);

    const handleQuestionSubmit = (e) => {
        if (isLastQuestion) {
            if (e.target.value === correctAnswer) {
                setCorrectUserAnswers(correctUserAnswers += 1);
            }
            setIsComplete(true);
        } else {
            if (e.target.value === correctAnswer) {
                setCorrectUserAnswers(correctUserAnswers += 1);
            }
            setactiveQuestionIndex(activeQuestionIndex += 1);
        }
    }

    if (!isComplete) {
        return (
            <div className="flex flex-col mt-32 items-center w-full h-screen">

                <Question 
                questionIndex={activeQuestionIndex} 
                quizLength={quizLength}
                question={questionText} 
                answers={answerArray} 
                handleQuestionSubmit={handleQuestionSubmit}
                />

            </div> 
        )
    } else {

        if (percentage >= 70) {
            return (
                <div className="flex flex-col mt-32 items-center w-full h-screen">

                    <div className="rounded-full flex flex-col justify-center items-center border-2 border-orangeVif w-52 h-52 my-8">
                        <h1 className="font-bebasNeue text-8xl text-ombreNaturelle31 font-bold">
                        {percentage}<span className="text-vert59">%</span>
                        </h1>
                        <span className="font-bebasNeue text-2xl text-vert59">[you passed]</span>
                    </div>

                    <h1 className="font-bebasNeue text-5xl text-vert59">Great job!</h1>
                    <h1 className="font-abel text-3xl text-ombreNaturelle31">You answered <span className="text-vert59">{correctUserAnswers}</span> out of <span className="text-vert59">{quizLength}</span> correctly</h1>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col mt-32 items-center w-full h-screen">
                    <div className="rounded-full flex flex-col justify-center items-center border-2 border-orangeVif w-52 h-52 my-8">
                        <h1 className="font-bebasNeue text-8xl text-ombreNaturelle31 font-bold">
                        {percentage}<span className="text-vert59">%</span>
                        </h1>
                        <span className="font-bebasNeue text-2xl text-orangeVif">[you failed]</span>
                    </div>
                    
                    <h1 className="font-bebasNeue text-5xl text-vert59">Too bad... </h1>
                    <h1 className="font-abel text-3xl text-ombreNaturelle31">You answered <span className="text-vert59">{correctUserAnswers}</span> out of <span className="text-vert59">{quizLength}</span> correctly</h1>
                </div>
            )
        }
        
    }
}

function Answers(props) {
    const answers = props.answers;
    let key = 0;
     
    const answersList = answers.map((answer) => {
        key++;
        return (

            <button 
            key={key}
            onClick={props.handleQuestionSubmit}
            value={answer}
            type="button" 
            className="w-full rounded-full shadow-sharp hover:shadow-sharpHover px-6 py-2.5 text-ombreNaturelle31/60 font-montserrat leading-tight hover:border-2 hover:border-vert59 hover:text-ombreNaturelle31/90 border-2 border-ombreNaturelle31/50 active:bg-vert59 active:text-white active:border-2 active:border-ombreNaturelle31/50 transition duration-150 ease-in-out"
            >
                {answer}
            </button>

        )
    })

    return (
        <div className="grid grid-cols-2 gap-4 my-11">{answersList}</div>
    )
}

function Question(props) {

    return (
        <div className="w-full">
            <h2 className="text-ombreNaturelle31/80 mb-20">
                Question {props.questionIndex + 1} out of {props.quizLength}
            </h2>
            <h2 className="text-vert59 text-2xl font-abel">{props.question}</h2>

            <Answers 
            answers={props.answers} 
            handleQuestionSubmit={props.handleQuestionSubmit}
            />

        </div>
    )
}