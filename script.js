const words = ['Green Day', 'Smash Mouth', 'Oasis']
const artist = document.getElementById('hero--artist_name');

console.log(artist);
artist.addEventListener('click', write);

function type(word) {
    setTimeout(function() {
        artist.innerHTML = word;
        console.log(word)
    }, 1000);
}

function write() {
    const words = ['Green Day', 'Smash Mouth', 'Oasis']
    for (let i = 0; i < words.length; i++) {
        type(words[i]);
    }
}

// function type() {
//     for (let word of words) {
//         setTimeout(function() {
//             artist.innerHTML = word
//             console.log(artist.innerHTML)
//         }, 1000)
//     }
// }

