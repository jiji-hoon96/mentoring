import { createTaskElement, moveTask } from './view.js';
import { handleAsyncTask } from './eventLoop.js';
import { incrementTaskCount, getRandomTaskName } from './taskManager.js';

const handleButtonClick = (event) => {
  const { id: taskType } = event.target;
  let createEl;

  if (taskType === 'syncFunc') {
    createEl = createTaskElement(taskType, 'Function');
  } else {
    const taskName = getRandomTaskName(taskType);
    createEl = createTaskElement(taskType, taskName);
    incrementTaskCount(taskType);
  }

  moveTask('stack', createEl).then(() => {
    if (taskType === 'syncFunc') {
      moveTask('console', createEl);
    } else {
      handleAsyncTask(taskType, createEl);
    }
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
