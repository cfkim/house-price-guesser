// Define variables
let questionList
const counter = document.getElementById('count')
const score = document.getElementById('score')
let points

// Define button behavior
const next = document.getElementById('next')
let q_num = 0
next.addEventListener('click', () => {
        
        if(q_num < questionList.length - 1){
            q_num = q_num + 1
            counter.innerHTML = `Question ${q_num + 1}/10`
            setQuestion(q_num)
        }else{
            console.log("done")
        }
        
    }
)
// Fetch questions and then set a question
async function initializeQuiz() {
    counter.innerHTML = `Question ${q_num + 1} of 10`
    questionList = await getQuestion();
    setQuestion(q_num);
}

async function getQuestion(){

    // API call to trivia
    var url = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
    let response = await fetch(url)
    
    console.log(response)

    if(response.ok){
        let question = await response.json()
        return question.results
    }else{
        console.error(response)
    }

}

async function setQuestion(q_num){
    // Set values in document
    document.getElementById('question').innerHTML = questionList[q_num].question

    // Keeps track of correct answer
    correct = questionList[q_num].correct_answer

    choices = [...questionList[q_num].incorrect_answers, questionList[q_num].correct_answer]

    for(let i = 0; i < 4; i++){
        document.getElementById((i + 1).toString()).innerHTML = choices[i]
    }
}

// Initialize the first question
initializeQuiz();
