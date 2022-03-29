 const startButton =document.getElementById("start-btn")
 const questionContainerElemengt = document.getElementById("question-container")

 const shuffledQuestions, currentQuestionIndex

 startButton. addEventListener("click", startQuiz)

 //we need 3 function to execute the app.//
function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = question.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElemengt.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion() {

}

function selectAnswer() {

}

const question = [
    {
        questiong:"what is 2+2",
        answer: [
            {text: "4", correct: ture },
            {text: "22", correct: false }
        ]
    }
]