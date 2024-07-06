const highScoresList = document.getElementById('highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(info => {
    return `<li class="high-score">${info.name} - ${info.score}`
}).join('')