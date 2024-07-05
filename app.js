// Define variables
let questionList
const counter = document.getElementById('count')
const score = document.getElementById('score')
    // The multiple choice
const answerA = document.getElementById('1')
const answerB = document.getElementById('2')
const answerC = document.getElementById('3')
const answerD = document.getElementById('4')
    // correct answer
    let answer
    let points = 0

let q_num = 0
answerA.addEventListener('click', () => {
    console.log(answerA.innerHTML)
    if (answerA.innerHTML == answer){
        answerA.parentElement.classList.add('correct')
        console.log("success")
        points += 10
        score.innerHTML = `Current score: ${points}`
        q_num += 1
        setTimeout(() => {
            answerA.parentElement.classList.remove('correct')
            setQuestion(q_num)
        }, 1000)

    }else{
        console.log("incorrect")
        answerA.parentElement.classList.add('incorrect')
        q_num += 1
        setTimeout(() => {
            answerA.parentElement.classList.remove('incorrect')
            setQuestion(q_num)
        }, 1000)
    }
})

answerB.addEventListener('click', () => {
    if (answerB.innerHTML == answer){
        answerB.parentElement.classList.add('correct')
        console.log("success")
        points += 10
        score.innerHTML = `Current score: ${points}`
        q_num += 1
        setTimeout(() => {
            answerB.parentElement.classList.remove('correct')
            setQuestion(q_num)
        }, 1000)
        
    }else{
        console.log("incorrect")
        answerB.parentElement.classList.add('incorrect')
        q_num += 1
        setTimeout(() => {
            answerB.parentElement.classList.remove('incorrect')
            setQuestion(q_num)
        }, 1000)
    }
})

answerC.addEventListener('click', () => {
    if (answerC.innerHTML == answer){
        answerC.parentElement.classList.add('correct')
        console.log("success")
        points += 10
        score.innerHTML = `Current score: ${points}`
        q_num += 1
        setTimeout(() => {
            answerC.parentElement.classList.remove('correct')
            setQuestion(q_num)
        }, 1000)
    }else{
        console.log("incorrect")
        answerC.parentElement.classList.add('incorrect')
        q_num += 1
        setTimeout(() => {
            answerC.parentElement.classList.remove('incorrect')
            setQuestion(q_num)
        }, 1000)
    }
})

answerD.addEventListener('click', () => {
    if (answerD.innerHTML == answer){
        answerD.parentElement.classList.add("correct")
        console.log("success")
        points += 10
        score.innerHTML = `Current score: ${points}`
        q_num += 1
        setTimeout(() => {
            answerD.parentElement.classList.remove("correct")
            setQuestion(q_num)
        }, 1000)
    }else{
        console.log("incorrect")
        answerD.parentElement.classList.add('incorrect')
        q_num += 1
        setTimeout(() => {
            answerD.parentElement.classList.remove('incorrect')
            setQuestion(q_num)
        }, 1000)
    }
})

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

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}

async function setQuestion(q_num){
    if(q_num < questionList.length){
        counter.innerHTML = `Question ${q_num + 1} of 10`
        // Set values in document
        document.getElementById('question').innerHTML = questionList[q_num].question

        // Keeps track of correct answer
        answer = questionList[q_num].correct_answer

        choices = [...questionList[q_num].incorrect_answers, questionList[q_num].correct_answer]
        
        choices = shuffleArray(choices);

        for(let i = 0; i < 4; i++){
            document.getElementById((i + 1).toString()).innerHTML = choices[i]
        }
        
    }else{
        console.log('done')
        // console.log(points)
        localStorage.setItem('recentScore', `${points}`)
        window.location.href = 'results.html'
    }

    
}

// Initialize the first question
initializeQuiz();
