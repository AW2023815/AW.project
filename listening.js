
    const words = [
    "Melancholy", "Tearful", "Broken", "Sorrow", "Despair", "Heartache", "Lost", "Solitude", "Mournful", "Grief", "Forsaken", 
    "Hollow", "Fragile", "Desolate", "Wistful", "Eclipsed", "Bleak", "Withered", "Ache", "Whimper", "Emptiness", 
    "Shattered", "Regret", "Tragic", "Somber", "Numb", "Vanished", "Dissolved", "Bitter", "Lament", "Hopeless", 
    "Joyful", "Radiant", "Blissful", "Euphoric", "Delight", 
    "Cheerful", "Lively", "Ecstatic", "Grateful", "Sunny", 
    "Vibrant", "Optimistic", "Content", "Merry", "Luminous", 
    "Serene", "Gratitude", "Sparkling", "Giddy", 
    "Jubilant", "Playful", "Peaceful", "Alive", "Exhilarated", 
    "Harmonious", "Whimsy", "Dewdrop", "Moonlight", "Breeze", "Ephemeral", "Seraphic", "Dusk", "Aurora",
    "Lullaby", "Velvet", "Crimson","Petals", "Nebula", "Glide", "Veil", "Sapphire", "Iridescent", 
    "Horizon", "Chant", "Reflection", "Quiver", "Starlight", 
    "Voyage", "Stillness", "Illuminate", "Glisten", 
    "Evermore", "Blossom", "Enchantment"
];
const wordContainer = document.getElementById('word-container');
const constructedSentence = document.getElementById('constructed-sentence');
const savedSentences = document.getElementById('saved-sentences');
const generatedImage = document.getElementById('generated-image');
const clearbutton= document.getElementById('clear-btn');

function createFloatingWords() {
    wordContainer.innerHTML = '';
    words.forEach(word => {
        const wordElement = document.createElement('span');
        wordElement.textContent = word;
        wordElement.classList.add('word');
        wordElement.style.top = `${Math.random() * 90}%`;
        wordElement.style.left = `${Math.random() * 90}%`;
        wordElement.addEventListener('click', () => addWordToSentence(word));
        wordContainer.appendChild(wordElement);
    });
}

function addWordToSentence(word) {
    if (constructedSentence.textContent === 'Here are your words') {
        constructedSentence.textContent = word;
    } else {
        constructedSentence.textContent += ' ' + word;
    }
}

document.getElementById('save-btn').addEventListener('click', () => {
    const sentence = constructedSentence.textContent.trim();
    if (sentence && sentence !== 'Here are your words') {
        const savedSentenceElement = document.createElement('div');
        savedSentenceElement.classList.add('saved-sentence');
        savedSentenceElement.textContent = sentence;
        savedSentences.appendChild(savedSentenceElement);
        
        generateImage(sentence); 
        clearSentence();
    }
});


//document.getElementById('clear-btn').addEventListener('click', clearSentence);
clearbutton.addEventListener('click', ()=>{
    constructedSentence.textContent = '';
    generatedImage.style.display = 'none'; 
    constructedSentence.textContent='';
    //savedSentences.removeChild(savedSentenceElement);
    savedSentences.innerHTML = '';

})
function clearSentence() {
    constructedSentence.textContent = '';
}


createFloatingWords();

