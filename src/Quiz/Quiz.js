import React, { useState } from "react";
import { formatText } from "../formatText.js";
import Link from "next/link";

export default function Quiz(props) {

    const quizData = props.questions;

    const [activeQuestionIndex, setactiveQuestionIndex] = useState(0);
    const [correctUserAnswers, setCorrectUserAnswers] = useState(0);
    const [incorrectUserAnswers, setIncorrectUserAnswers] = useState([]);
    const [isComplete, setIsComplete] = useState(false);

    const activeQuestion = quizData[activeQuestionIndex];
    const quizLength = quizData.length;

    const percentage = Math.round((correctUserAnswers / quizLength) * 100);

    const isLastQuestion = activeQuestionIndex >= (quizLength -1);

    const questionText = formatText(activeQuestion.question)
    const correctAnswer = activeQuestion.correct_answer;
    const answers = [...activeQuestion.incorrect_answers, correctAnswer];

    const handleQuestionSubmit = (e) => {
        if (isLastQuestion) {
            if (e.target.value === correctAnswer) {
                setCorrectUserAnswers(correctUserAnswers += 1);
            } else {
                setIncorrectUserAnswers([...incorrectUserAnswers, e.target.value]);
            }
            setIsComplete(true);
        } else {
            if (e.target.value === correctAnswer) {
                setCorrectUserAnswers(correctUserAnswers += 1);
            } else {
                setIncorrectUserAnswers([...incorrectUserAnswers, e.target.value]);
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
                answers={answers} 
                handleQuestionSubmit={handleQuestionSubmit}
                />

            </div> 
        )
    } else {
        return (
            <>
                <QuizResults 
                percentage={percentage} 
                correctUserAnswers={correctUserAnswers}
                quizLength={quizLength}    
                />
                <QuizResultsDetails 
                quizData={quizData}
                incorrectUserAnswers={incorrectUserAnswers}
                />
                <BackToStartButton />
                
            </>
        )
    }
}

function randomizeOrder(arr) {
    const numberOfRotations = Math.random() * 10;

    for (let i = 0; i < numberOfRotations; i++) {
        let firstEntry = arr.shift();
        arr.push(firstEntry);
    }
    return arr;
}

function Answers(props) {
    const answers = props.answers;
    let key = 0;

    randomizeOrder(answers);
     
    const answersList = answers.map((answer) => {
        key++;
        answer = formatText(answer);
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-4 my-11">{answersList}</div>
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

function QuizResults(props) {

    const passFail = props.percentage >= 70 ? 
        { 
            status: <span className="font-bebasNeue text-2xl text-vert59">[you passed]</span>,
            message:  <h1 className="font-bebasNeue text-5xl text-vert59">Great job!</h1>
        } : 
        {
            status: <span className="font-bebasNeue text-2xl text-orangeVif">[you failed]</span>,
            message: <h1 className="font-bebasNeue text-5xl text-orangeVif">Too bad...</h1>
        };

    return (
        <div className="flex flex-col mt-32 items-center w-full">

            <div className="rounded-full flex flex-col justify-center items-center border-2 border-orangeVif w-52 h-52 my-8">
                <h1 className="font-bebasNeue text-8xl text-ombreNaturelle31 font-bold">
                {props.percentage}<span className="text-vert59">%</span>
                </h1>
                {passFail.status}
            </div>
            <h1 className="font-bebasNeue text-5xl text-vert59">{passFail.message}</h1>
            <h1 className="font-abel text-3xl text-ombreNaturelle31">You answered <span className="text-vert59">{props.correctUserAnswers}</span> out of <span className="text-vert59">{props.quizLength}</span> correctly</h1>
        </div>
    ) 
    
}

function QuizResultsDetails(props) {
    const questions = props.quizData;
    const incorrectUserAnswers = props.incorrectUserAnswers;

    const questionList = questions.map(question => {

        const incorrectAnswersList = question.incorrect_answers.map(answer => {

            answer = formatText(answer)

            if(incorrectUserAnswers.includes(answer)) {
                return (
                    <div 
                    className="w-full flex justify-center items-center rounded-full shadow-sharp px-6 py-2.5 text-ombreNaturelle31/90 font-montserrat leading-tight border-2 border-orangeVif"
                    >
                    <span className="text-orangeVif text-xl mx-4">X</span>{answer}
                    </div>
                )
            } else {
                return (
                    <div 
                    className="w-full flex justify-center items-center rounded-full shadow-sharp px-6 py-2.5 text-ombreNaturelle31/60 font-montserrat leading-tight border-2 border-ombreNaturelle31/50"
                    >
                    {answer}
                    </div>
                )
            }
        })

        return (
            <div className="border-y border-ombreNaturelle31/60 my-6 p-4">
                <h2 className="text-vert59 text-2xl font-abel">{formatText(question.question)}</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 my-11">
                    <>{incorrectAnswersList}</>
                    <div 
                    className="w-full flex justify-center items-center rounded-full shadow-sharpHover px-6 py-2.5 text-ombreNaturelle31/90 font-montserrat leading-tight border-2 border-vert59"
                    >
                    {formatText(question.correct_answer)}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col items-center w-full mt-16">
            <h1 className="font-abel text-3xl text-ombreNaturelle31 my-6">Here are the results of your quiz:</h1>
            <div>{questionList}</div>
        </div>
    )
}

function BackToStartButton() {
    return(
        
            <Link href={'/'}>
                <button className="w-full rounded-full shadow-sharp hover:shadow-sharpHover px-6 py-2.5 mt-3 mb-12 text-ombreNaturelle31/90 font-montserrat leading-tight hover:border-2 hover:border-vert59 hover:text-ombreNaturelle31 border-2 border-ombreNaturelle31/70 active:bg-vert59 active:text-white active:border-2 active:border-ombreNaturelle31/50 transition duration-150 ease-in-out">Another?</button>
            </Link>
        
    )
}