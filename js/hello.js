const myHeading = document.querySelector('h1');
const myp = document.querySelector('p');
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let p = getRandomInt(3);

myHeading.textContent = 'Hello world!';
myp.textContent = p;