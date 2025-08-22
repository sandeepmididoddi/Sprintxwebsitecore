// Add any dynamic animations or interactions here
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.container');
  
  containers.forEach(container => {
    container.addEventListener('click', () => {
      alert(`${container.querySelector('h2').innerText} selected!`);
    });
  });
});


// script.js
const dynamicTexts = ['Inspiration', 'Innovation', 'Collaboration', 'Growth', 'Success'];
let index = 0;

function updateText() {
    const dynamicTextElement = document.getElementById('dynamic-text');
    dynamicTextElement.textContent = dynamicTexts[index];
    index = (index + 1) % dynamicTexts.length;
}

setInterval(updateText, 2000);

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.container');

  containers.forEach(container => {
    container.addEventListener('click', () => {
      alert(`${container.querySelector('h2').innerText} selected!`);
    });
  });

  const dynamicTexts = ['Inspiration', 'Innovation', 'Collaboration', 'Growth', 'Success'];
  let index = 0;

  function updateText() {
    const dynamicTextElement = document.getElementById('dynamic-text');
    dynamicTextElement.textContent = dynamicTexts[index];
    index = (index + 1) % dynamicTexts.length;
  }

  setInterval(updateText, 2000);

  // Popup functionality
  const registerLink = document.getElementById('register-link');
  const popup = document.getElementById('register-popup');
  const overlay = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('close-popup');

  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'block';
    overlay.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  });
});
  
