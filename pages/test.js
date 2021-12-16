import { useRouter } from "next/router";
import React from "react";
import Quiz from "../src/Quiz/Quiz";

export default function Test(props) {

    const router = useRouter();
    const amount = router.query.amount;
    const difficulty = router.query.difficulty;
    

    const questions = props.questions.results;

    return (
        <>
            <Quiz questions={questions} />
            
        </>
    )
}

// const delay = () => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res();
//         }, 3000)
//     })
// }

export async function getServerSideProps({query}) {

    // await delay();
    const amount = query.amount;
    const difficulty = query.difficulty;
    const category = query.category = null ? null :query.category

    const fetchLink = category != null ? 
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple` :
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const res = await fetch(fetchLink);
    // const res = await fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`);
    const data = await res.json();

    return {
        props: {
            questions: data
        }
    }
}