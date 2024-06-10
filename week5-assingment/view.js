import {
  getNextIndex,
  incrementTaskCount,
  decrementTaskCount,
  getTaskCounts,
  getRandomTask,
} from './domain.js';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const addIcon = (createEl) => {
  const iconEl = document.createElement('span');
  iconEl.classList.add('material-symbols-outlined', 'on');
  iconEl.innerText = 'history';
  createEl.appendChild(iconEl);
};

const removeIcon = (createEl) => {
  const iconEl = createEl.querySelector('.material-symbols-outlined');
  if (iconEl) {
    createEl.removeChild(iconEl);
  }
};

const moveTask = (area, createEl) => {
  const areaEl = document.getElementById(area);
  const eventLoopIconEl = document.querySelector('#eventLoop span');
  if (!areaEl) return;

  if (area === 'stack') {
    areaEl.prepend(createEl);
  } else {
    areaEl.appendChild(createEl);
  }

  if (area === 'webApi') {
    addIcon(createEl);
  } else {
    removeIcon(createEl);
  }

  const { microTasks, macroTasks } = getTaskCounts();
  if (microTasks === 0 && macroTasks === 0) {
    eventLoopIconEl?.classList.remove('on');
  }

  return delay(1000);
};

const isTasksInStack = (stackEl) => stackEl && stackEl.childElementCount > 0;

const isPendingMacroTask = (task, microEl) =>
  task === 'asyncMacroTask' && microEl && microEl.childElementCount > 0;

const processEventLoop = (createEl, eventLoopIconEl, task) => {
  decrementTaskCount(task);
  eventLoopIconEl?.classList.add('on');
  moveTask('stack', createEl).then(() => moveTask('console', createEl));
};

const createTaskElement = (task, innerText) => {
  const index = getNextIndex(task);

  const createEl = document.createElement('div');
  createEl.innerText = `${index ? `${index} - ` : ''}${innerText}`;
  createEl.classList.add(task);
  return createEl;
};

const asyncTask = (task, createEl) => {
  const stackEl = document.querySelector('#stack');
  const microEl = document.querySelector('#microQueue');
  const eventLoopIconEl = document.querySelector('#eventLoop span');
  const eventQueue = task === 'asyncMacroTask' ? 'macroQueue' : 'microQueue';

  moveTask(eventQueue, createEl).then(() => {
    const loop = setInterval(() => {
      if (isTasksInStack(stackEl) || isPendingMacroTask(task, microEl)) return;
      clearInterval(loop);
      processEventLoop(createEl, eventLoopIconEl, task);
    }, 0);
  });
};

const handleAsyncTask = (task, createEl) => {
  moveTask('webApi', createEl).then(() => asyncTask(task, createEl));
};

const handleButtonClick = (event) => {
  let createEl;
  const { id: task } = event.target;
  if (task === 'syncFunc') {
    createEl = createTaskElement(task, 'Function');
  }
  if (task === 'asyncMacroTask') {
    createEl = createTaskElement(task, getRandomTask(task));
  }
  if (task === 'asyncMicroTask') {
    createEl = createTaskElement(task, getRandomTask(task));
  }

  moveTask('stack', createEl).then(() => {
    if (task === 'syncFunc') {
      return moveTask('console', createEl);
    }

    incrementTaskCount(task);
    handleAsyncTask(task, createEl);
  });
};

const clearConsole = () => {
  const consoleEl = document.querySelector('#console');
  if (consoleEl) {
    consoleEl.innerHTML = '';
  }
};

document.querySelectorAll('#buttons button').forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

document.querySelector('.refreshBtn').addEventListener('click', () => {
  window.location.reload();
});

window.clearConsole = clearConsole;
