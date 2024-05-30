let functionIndex = 0;
let macroIndex = 0;
let microIndex = 0;

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const moveTask = (area, createEl) => {
  const el = document.getElementById(area);
  if (!el) return;

  if (area === 'stack') {
    el.prepend(createEl);
  } else {
    el.appendChild(createEl);
  }

  return delay(1000);
};

const createTaskElement = (task, innerText) => {
  let index;
  switch (task) {
    case 'syncFunc':
      index = ++functionIndex;
      break;
    case 'asyncMacroTask':
      index = ++macroIndex;
      break;
    case 'asyncMicroTask':
      index = ++microIndex;
      break;
    default:
      index = '';
  }

  const createEl = document.createElement('div');
  createEl.innerText = `${index ? `${index} - ` : ''}${innerText}`;
  createEl.classList.add(task);
  return createEl;
};

const handleButtonClick = (event) => {
  const { id: task, innerText } = event.target;
  const createEl = createTaskElement(task, innerText);
  moveTask('stack', createEl).then(() => {
    if (task !== 'syncFunc') {
      // async handle code 작성 예정
    } else {
      moveTask('console', createEl);
    }
  });
};

document.querySelectorAll('#buttons button').forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

const clearConsole = () => {
  const consoleEl = document.querySelector('#console');
  if (consoleEl) {
    consoleEl.innerHTML = '';
  }
};

document.querySelector('.refreshBtn').addEventListener('click', () => {
  window.location.reload();
});
