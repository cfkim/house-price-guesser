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
const category = localStorage.getItem('category')
let url
if (category == 'Any Category'){
    url = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
}else if(category == 'General Knowledge'){
    url = "https://opentdb.com/api.php?amount=10&category=9&type=multiple"
}else if(category == 'Entertainment: Books'){
    url = "https://opentdb.com/api.php?amount=10&category=10&type=multiple"
}else if(category == 'Entertainment: Board Games'){
    url = "https://opentdb.com/api.php?amount=10&category=16&type=multiple"
}else if(category == 'Entertainment: Cartoon & Animation'){
    url = "https://opentdb.com/api.php?amount=10&category=32&type=multiple"
}else if(category == 'Entertainment: Comics'){
    url = "https://opentdb.com/api.php?amount=10&category=29&type=multiple"
}else if(category == 'Entertainment: Film'){
    url = "https://opentdb.com/api.php?amount=10&category=11&type=multiple"
}else if(category == 'Entertainment: Japanese Anime & Manga'){
    url = "https://opentdb.com/api.php?amount=10&category=31&type=multiple"
}else if(category == 'Entertainment: Music'){
    url = "https://opentdb.com/api.php?amount=10&category=12&type=multiple"
}else if(category == 'Entertainment: Musicals & Theatres'){
    url = "https://opentdb.com/api.php?amount=10&category=13&type=multiple"
}else if(category == 'Entertainment: Television'){
    url = "https://opentdb.com/api.php?amount=10&category=14&type=multiple"
}else if(category == 'Entertainment: Video Games'){
    url = "https://opentdb.com/api.php?amount=10&category=15&type=multiple"
}else if(category == 'Science & Nature'){
    url = "https://opentdb.com/api.php?amount=10&category=17&type=multiple"
}else if(category == 'Science: Computers'){
    url = "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
}else if(category == 'Science: Gadgets'){
    url = "https://opentdb.com/api.php?amount=10&category=30&type=multiple"
}else if(category == 'Science: Mathematics'){
    url = "https://opentdb.com/api.php?amount=10&category=19&type=multiple"
}else if(category == 'Mythology'){
    url = "https://opentdb.com/api.php?amount=10&category=20&type=multiple"
}else if(category == 'Sports'){
    url = "https://opentdb.com/api.php?amount=10&category=21&type=multiple"
}else if(category == 'Geography'){
    url = "https://opentdb.com/api.php?amount=10&category=22&type=multiple"
}else if(category == 'History'){
    url = "https://opentdb.com/api.php?amount=10&category=23&type=multiple"
}else if(category == 'Politics'){
    url = "https://opentdb.com/api.php?amount=10&category=24&type=multiple"
}else if(category == 'Art'){
    url = "https://opentdb.com/api.php?amount=10&category=25&type=multiple"
}else if(category == 'Celebrities'){
    url = "https://opentdb.com/api.php?amount=10&category=26&type=multiple"
}else if(category == 'Animals'){
    url = "https://opentdb.com/api.php?amount=10&category=27&type=multiple"
}
let q_num = 0
answerA.addEventListener('click', () => {
    console.log(answerA.innerHTML)
    if (answerA.innerHTML == answer){
        answerA.parentElement.classList.add('correct')
        console.log("success")
        points += 10
        score.innerHTML = `Score: ${points}`
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
        score.innerHTML = `Score: ${points}`
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
        score.innerHTML = `Score: ${points}`
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
        score.innerHTML = `Score: ${points}`
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
