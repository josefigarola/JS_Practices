const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Niza', correct: false },
            { text: 'Lyon', correct: false },
            { text: 'Marsella', correct: false }
        ]
    },
    {
        question: "What is the capital of Spain?",
        answers: [
            { text: 'Valencia', correct: false },
            { text: 'Barcelona', correct: false },
            { text: 'Sevilla', correct: false },
            { text: 'Madrid', correct: true }
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: 'Venice', correct: false },
            { text: 'Milan', correct: false },
            { text: 'Rome', correct: true },
            { text: 'Naples', correct: false }
        ]
    },
    {
        question: "What is the capital of Germany?",
        answers: [
            { text: 'Berlin', correct: true },
            { text: 'Munich', correct: false },
            { text: 'Frankfurt', correct: false },
            { text: 'Hamburg', correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: 'Charles Dickens', correct: false },
            { text: 'William Shakespeare', correct: true },
            { text: 'Jane Austen', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: "Which gas do plants primarily absorb from the atmosphere during photosynthesis?",
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Nitrogen', correct: false },
            { text: 'Carbon Dioxide', correct: true },
            { text: 'Hydrogen', correct: false }
        ]
    },
    {
        question: "In which year did Christopher Columbus first set foot in the Americas?",
        answers: [
            { text: '1492', correct: true },
            { text: '1507', correct: false },
            { text: '1519', correct: false },
            { text: '1536', correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: 'Go', correct: false },
            { text: 'Gd', correct: false },
            { text: 'Au', correct: true },
            { text: 'Ag', correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Michelangelo', correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Dolphin', correct: false }
        ]
    },
    {
        question: "Which famous scientist is known for the theory of relativity?",
        answers: [
            { text: 'Isaac Newton', correct: false },
            { text: 'Galileo Galilei', correct: false },
            { text: 'Albert Einstein', correct: true },
            { text: 'Stephen Hawking', correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: 'Yen', correct: true },
            { text: 'Won', correct: false },
            { text: 'Yuan', correct: false },
            { text: 'Ringgit', correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + questions[currentQuestionIndex].question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => {
            selectAnswer(button);
        });
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(selectedBtn){
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'Your Score: ' + score + '/' + questions.length;
    nextButton.innerHTML = 'Restart';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();
