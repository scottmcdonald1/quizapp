import React, { useState } from "react";
import { GetData } from "../get-data";

export default function Quiz() {
    const quizData = GetData();
    const [activeQuestionIndex, setactiveQuestionIndex] = useState(0);
    const activeQuestion = quizData[activeQuestionIndex];
    const isComplete = activeQuestionIndex >= (quizData.length -1);

    const handleClick = () => {
        if (!isComplete) {
            setactiveQuestionIndex(activeQuestionIndex += 1);
            console.log(activeQuestionIndex);
        }
    }

    if (!isComplete) {
        return (
            <div>
                {JSON.stringify(activeQuestion, null, 2)}
                <button onClick={handleClick}>Next question</button>
            </div> 
        )
    } else {
        return (
            <div>GrEat JOBB</div>
        )
    }

    

}