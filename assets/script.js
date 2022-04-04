 const startButton =document.getElementById("start-btn")
 const nextButton =document.getElementById("next-btn")
 const questionContainerElemengt = document.getElementById("question-container")
 const questionElement =document.getElementById("question")
 const answerButtonsElement =document.getElementById("answer-buttons")

 let shuffledQuestions, currentQuestionIndex

 //make a start button//
 startButton. addEventListener("click", startGame)
 nextButton.addEventListener("click", () => {
     currentQuestionIndex++
     setNextQuestion()
 })

 //we need 3 function to execute the app.//
function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = question.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElemengt.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion() {
 showQuestion(shuffledQuestions[currentQuestionIndex])
 resetState()

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
 }
function resetState(){
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    }else {
        element.classList.add("wrong")
    }
}
function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")

}

const question = [
    {
        questiong:"what is 2+2?",
        answer: [
            {text: "4", correct: true },
            {text: "22", correct: false }
        ]
    }
]
