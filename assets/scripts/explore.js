// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
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
}