import { getNewIndex, getTaskCount } from './taskManager.js';
import { delay } from './utils.js';

export const addIcon = (createEl) => {
  const iconEl = document.createElement('span');
  iconEl.classList.add('material-symbols-outlined', 'on');
  iconEl.innerText = 'history';
  createEl.appendChild(iconEl);
};

export const removeIcon = (createEl) => {
  const iconEl = createEl.querySelector('.material-symbols-outlined');
  if (iconEl) {
    createEl.removeChild(iconEl);
  }
};

export const moveTask = (area, createEl) => {
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

  if (
    getTaskCount('asyncMacroTask') === 0 &&
    getTaskCount('asyncMicroTask') === 0
  ) {
    eventLoopIconEl?.classList.remove('on');
  }

  return delay(1000);
};

export const createTaskElement = (taskType, innerText) => {
  const index = getNewIndex(taskType);
  const createEl = document.createElement('div');
  createEl.innerText = `${index ? `${index} - ` : ''}${innerText}`;
  createEl.classList.add(taskType);
  return createEl;
};
