const texts = ["Web Developer", "Creative Designer", "Problem Solver"];
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenTexts = 1000;
let currentTextIndex = 0;
let charIndex = 0;
let isErasing = false;

const typingText = document.getElementById("typing-text");

function typeText() {
  if (!isErasing && charIndex < texts[currentTextIndex].length) {
    typingText.textContent += texts[currentTextIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else if (isErasing && charIndex > 0) {
    typingText.textContent = texts[currentTextIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeText, erasingSpeed);
  } else {
    isErasing = !isErasing;

    if (!isErasing) {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
    setTimeout(typeText, delayBetweenTexts);
  }
}

document.addEventListener("DOMContentLoaded", typeText);
