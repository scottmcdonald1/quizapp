# Quiz App

## The Goal

Create a Quiz App as per the parameters provided by the [devjam](https://devjam.vercel.app/project/Quiz-App-10) group shown below. This was my second project with the devjam group and I wanted to invest more time and energy into this one as I really enjoyed the process from my first. The major goal for me was to explore Tailwind CSS and make (at the very minimum) a more functional project than the last. As a direct result, the app itself isn't exactly where I'd want it to be aesthetically, but that's okay! I am proud of this app and definitely want to revisit and continue to work on it in the future.

## Live Demo

A live demo of the project can be found [here](https://quizapp-eight.vercel.app/)

## User Stories

The initial concept for the app came from a coding challenge via the [devjam](https://devjam.vercel.app/project/Quiz-App-10) group:

### Dev Jam User Stories

📔 User Stories
1. ✅ User can start the quiz by pressing a button
2. ✅ User can see a question with 4 possible answers
3. ✅ After selecting an answer, display the next question to the User. Do this until the quiz is finished
4. [] At the end, the User can see the following statistics:
    - [] Time it took to finish the quiz (didn't finish timer component still working on it)
    - ✅ How many correct answers did he get
    - ✅ A message showing if he passed or failed the quiz

⭐ Bonus features (optional)
1. [] User can share the result of a quiz on social media
2. ✅ Add multiple quizzes to the application. User can select which one to take (* See note below)
3. [] User can create an account and have all the scores saved in his dashboard. User can complete a quiz multiple times
4. [] User can create their own quizzes

New User Stories 
1. ✅ User can view details of quiz with correct and incorrect answers marked.
2. ✅ (*) quizzes are randomly generated, however user can select number of questions, difficulty, and category

 ## Tech Stack

 I am using these challenges to learn/get more familiar with React and this project was built with Next.js. I took this opportunity to explore Tailwind CSS as well.

 ### Dependencies

 - [Next.js ](https://nextjs.org/)
 - [Tailwind CSS](https://tailwindcss.com/)

 ## What I've Learned

- Tailwind CSS -- this was my first time using it, and I have to say I fell in love with it. I have used bootstrap before, but the customization in tailwind is so nice and intuitive. Will definitely be using it again.
- API integration with path parameters and Server Side Props
- How difficult it is to find and replace special HTML entities (I keep finding new ones -- look at /src/formatText.js for a laugh)
- This is my second major React/Next.js app so continued learning of how components fit together as well as the use of hooks (which I used a lot more in this project than my first)

## What's next?

- I still need to build out the quizTimer component 
- Create user accounts to allow users to keep track of the quizzes they've taken
- When I first started this project I wanted to allow users to create a quiz of their own. Obviously, due to time restrictions, I wasn't able to make it that far, but I do think I will come back to this project.
- There is a lot of code I would like to clean up, make more abstract and modular -- particularly the entire Quiz.js file.