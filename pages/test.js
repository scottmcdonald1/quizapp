import React from "react";
import Quiz from "../src/Quiz/Quiz";

export default function Test(props) {

    const questions = props.questions.results;

    return (
        <>
            <Quiz questions={questions} />
        </>
    )
}

export async function getServerSideProps({query}) {

    const amount = query.amount;
    const difficulty = query.difficulty;
    const category = query.category = null ? null :query.category

    const fetchLink = category != null ? 
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple` :
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const res = await fetch(fetchLink);
    const data = await res.json();

    return {
        props: {
            questions: data
        }
    }
}