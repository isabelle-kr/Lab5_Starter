// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const inputText = document.querySelector('textarea');
  const voiceMenu = document.querySelector('select');
  let voiceList = [];
  
  function loadVoices() {
    voiceList = speechSynthesis.getVoices();
    for (let i = 0; i < voiceList.length; i++) {
      const newOption = document.createElement('option');
      newOption.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;
      newOption.setAttribute('data-lang', voiceList[i].lang);
      newOption.setAttribute('data-name', voiceList[i].name);
      voiceMenu.appendChild(newOption);
    }
  }

  loadVoices();

  let chosenVoice;

  const talkButton = document.querySelector('button');

  talkButton.addEventListener('click', talk);

  const faceIcon = document.querySelector('img');

  function talk() {
    const whatToSay = new SpeechSynthesisUtterance(inputText.value);
    chosenVoice = voiceMenu.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voiceList.length; i++) {
      if (voiceList[i].name === chosenVoice) {
        whatToSay.voice = voiceList[i];
      }
    }

    faceIcon.src = "assets/images/smiling-open.png";

    speechSynthesis.speak(whatToSay);
    setInterval(changeFace, 10);

    function changeFace() {
      if (!speechSynthesis.speaking) {
        faceIcon.src = "assets/images/smiling.png";
        clearInterval();
      }
    }
  }

}