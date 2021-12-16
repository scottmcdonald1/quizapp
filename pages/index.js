import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react/cjs/react.development"

export default function Home() {

  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const amount = e.target.numberOfQuestions.value;
    const difficulty = e.target.difficulty.value;
    const category = e.target.category.value;
    if (amount > 50 || amount < 1) {
      alert('Number of Questions must be between 1 and 50!')
    } else {
      let path = category === 'any' ? `/test?amount=${amount}&difficulty=${difficulty}` : `/test?amount=${amount}&difficulty=${difficulty}&category=${category}`;
      router.push(path);
    }

  }

  return (
    <>

      <Head>
        <title>QuizApp</title>
      </Head>

      <div className="flex flex-col justify-center items-center w-full h-screen">

        <div className="border border-orangeVif rounded mx-4 p-8">
          <h1 className="font-bebasNeue text-5xl text-ombreNaturelle31 font-bold pointer-events-none">
            Quiz<span className="text-vert59">App</span>
          </h1>
        </div>
        <div className="border border-orangeVif rounded m-4 p-8">
          <form onSubmit={handleFormSubmit} id="generateQuizForm" className="flex flex-col">

            {/* TODO: allow users to select number of questions provided by API */}
            <label className="block">
              <span className="block text-sm font-medium text-ombreNaturelle31/70">Number of Questions</span>
              <input 
              id="numberOfQuestions"
              name="numberOfQuestions"
              type="number" 
              className="form-input rounded m-1 peer w-full"
              defaultValue="10"
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"></p>
            </label>

            {/* TODO: Allow users to choose difficulty provided by API */}
            <label className="block">
              <span className="block text-sm font-medium text-ombreNaturelle31/70">Difficulty</span>
              <select id="difficulty" name="difficulty" className="form-select m-1 rounded peer w-full">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"></p>
            </label>

            {/* TODO: Allow users to choose category provided by API */}
            <label className="block">
              <span className="block text-sm font-medium text-ombreNaturelle31/70">Category</span>
              <select id="category" name="category" className="form-select m-1 rounded peer w-full">
                <option value="any">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Theatre</option>
                <option value="14">Entertainment: TV</option>
                <option value="15">Entertainment: Video Games</option>
              </select>
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"></p>
            </label>

            <button 
            type="submit"
            form="generateQuizForm"
            className="w-full rounded-full shadow-sharp hover:shadow-sharpHover px-6 py-2.5 text-ombreNaturelle31/90 font-montserrat leading-tight hover:border-2 hover:border-vert59 hover:text-ombreNaturelle31 border-2 border-ombreNaturelle31/70 active:bg-vert59 active:text-white active:border-2 active:border-ombreNaturelle31/50 transition duration-150 ease-in-out"
            >
            Start Quiz
            </button>
          </form>
        </div>

      </div>

    </>
  )
}
