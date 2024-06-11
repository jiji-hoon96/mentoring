import { getNewIndex, getTaskCount } from './taskManager.js';
import { delay } from './utils.js';

const toggleIcon = (createEl, add) => {
  const iconEl = createEl.querySelector('.material-symbols-outlined');
  if (add && !iconEl) {
    const newIconEl = document.createElement('span');
    newIconEl.classList.add('material-symbols-outlined', 'on');
    newIconEl.innerText = 'history';
    createEl.appendChild(newIconEl);
  } else if (!add && iconEl) {
    createEl.removeChild(iconEl);
  }
};

const updateEventLoopIcon = () => {
  const eventLoopIconEl = document.querySelector('#eventLoop span');
  if (
    getTaskCount('asyncMacroTask') === 0 &&
    getTaskCount('asyncMicroTask') === 0
  ) {
    eventLoopIconEl?.classList.remove('on');
  }
};

export const moveTask = (area, createEl) => {
  const areaEl = document.getElementById(area);
  if (!areaEl) return;

  if (area === 'stack') {
    areaEl.prepend(createEl);
  } else {
    areaEl.appendChild(createEl);
  }

  toggleIcon(createEl, area === 'webApi');
  updateEventLoopIcon();

  return delay(1000);
};

export const createTaskElement = (taskType, innerText) => {
  const index = getNewIndex(taskType);
  const createEl = document.createElement('div');
  createEl.innerText = `${index ? `${index} - ` : ''}${innerText}`;
  createEl.classList.add(taskType);
  return createEl;
};
