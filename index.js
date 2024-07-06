const playBtn = document.getElementById("play")
playBtn.addEventListener('click', () => {
    let category = document.getElementById('category').value
    localStorage.setItem('category', category)
})