const score = document.getElementById("final-score")
score.innerHTML = localStorage.getItem('recentScore')
const submit = document.getElementById("saveScoreBtn")
const username = document.getElementById("username")
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

username.addEventListener('keyup', () =>{
    submit.disabled = !username.value;
})

// save it to high score list in local storage
saveHighScore = e => {
    e.preventDefault();

    const info = {
        score: localStorage.getItem('recentScore'),
        name: username.value
    }

    highScores.push(info)

    highScores.sort((a,b) => {
        return b.score - a.score
    })
    
    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    console.log("score saved!")
    window.location.href = "/"
}