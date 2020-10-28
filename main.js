var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var receiveMessageButton = document.querySelector('.receive-message');
var generatedMessageText = document.querySelector('.generated-message-text');
var meditationIcon = document.querySelector('.meditation-icon');
var choice = document.querySelector('.message-selection');
var messageSection = document.querySelector('.select-message-section');
var generatedMessageSection = document.querySelector('.generated-message');
var main = document.querySelector('.main')
var loginForm = document.querySelector('.login-form');
var loginSubmitButton = document.querySelector('.login-submit');
var firstName = document.querySelector('#first-name');
var lastName = document.querySelector('#last-name');
var firstNameLocation = document.querySelector('.welcoming-area');
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];
var currentName = "";

loginSubmitButton.addEventListener('click', generatePersonalizedWelcome);
receiveMessageButton.addEventListener('click', generateMessage);

function showHide(domElement1, domElement2) {
  domElement1.classList.add('hidden');
  domElement2.classList.remove('hidden');
}

function generatePersonalizedWelcome() {
  event.preventDefault();
  showHide(loginForm, main);
  currentName = firstName.value;
  firstNameLocation.innerText = "Welcome to your new inner-calm, " + currentName + "!";
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateMessage() {
  event.preventDefault();
  showHide(meditationIcon, generatedMessageText);
  for (i=0; i<choice.length; i++);
  if (affirmationButton.checked) {
    generatedMessageText.innerText = affirmations[getRandomIndex(affirmations)];
  } else if (mantraButton.checked) {
    generatedMessageText.innerText = mantras[getRandomIndex(mantras)];
  }
}
