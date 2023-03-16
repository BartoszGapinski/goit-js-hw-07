function createBoxes(amount) {
    const boxesContainer = document.querySelector('#boxes');
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }
  
  function destroyBoxes() {
    const boxesContainer = document.querySelector('#boxes');
    boxesContainer.innerHTML = '';
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
  
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const input = document.querySelector('input[type="number"]');
  
  createButton.addEventListener('click', () => {
    const amount = input.value;
    createBoxes(amount);
  });
  
  destroyButton.addEventListener('click', destroyBoxes);
  