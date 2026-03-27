/* Change name when width below 900 */

const myName = document.querySelector('#my-name');

function updateName() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 900) {
        myName.textContent = 'gagan.g';
    } else {
        myName.textContent = 'g.g';
    }
}

updateName();
window.addEventListener('resize', updateName);

/* Toggle navbar on mobile */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const headingElement = document.querySelector('.heading');
const myTools = document.querySelector('#my-tools');
const myProjects = document.querySelector('#my-projects');
const aboutMe = document.querySelector('#about-me');
const contactMe = document.querySelector('#contact-me');
const footerElement = document.querySelector('#footer');

const elements = [headingElement, myTools, myProjects, aboutMe, contactMe, footerElement];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

for (let element of elements) {
    element.addEventListener('click', () => {
        if (navbarLinks.classList.contains('active')) {
            navbarLinks.classList.toggle('active');
        }
    });
}

/* Typewriter effect */

const typewriterContent = document.getElementById("typewriter");
const phrases = ["Student", "Programmer", "Gamer"];

let phraseIndex = 0;
let letterIndex = 0;
const typingTime = 200;
const erasingTime = 200;

function printLetters(phrase) {
    if (letterIndex == phrase.length) {
        clearLetters();
    } else if (letterIndex < phrase.length) {
        typewriterContent.textContent += phrase.charAt(letterIndex);
        letterIndex++;
        setTimeout(function () {
            printLetters(phrase);
        }, typingTime);
    }
}

function clearLetters() {
    if (letterIndex == -1) {
        phraseIndex++;
        phraseIndex %= phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex]);
    } else if (letterIndex > -1) {
        let currentPhrase = typewriterContent.textContent;
        let updatedPhrase = currentPhrase.substring(0, currentPhrase.length - 1);
        typewriterContent.textContent = updatedPhrase;
        letterIndex--;
        setTimeout(clearLetters, erasingTime);
    }
}

printLetters(phrases[phraseIndex]);

/* Light-Dark Toggle */

const lightDarkButton = document.querySelector('.light-dark-toggle');
const bodyElement = document.querySelector('body');

lightDarkButton.addEventListener('click', () => {
    if (bodyElement.classList.contains('dark')) {
        lightDarkButton.textContent = 'Dark Theme';
    } else {
        lightDarkButton.textContent = 'Light Theme';
    }
    bodyElement.classList.toggle('dark');
});
