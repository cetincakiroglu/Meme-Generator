const imgContainer = document.querySelector('.image-container');
const button = document.getElementById('generator-btn');

button.addEventListener('click', bringMemes);
window.addEventListener('load', bringMemes);

function bringMemes() {
    console.log('bring Memezzz');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://meme-api.herokuapp.com/gimme');

    xhr.onload = function(event) {
        const decoded = JSON.parse(xhr.responseText);
        const newMeme = decoded.preview[1];
        imgContainer.innerHTML = `<img class="meme" src="${newMeme}">`;
    };

    xhr.send();
}