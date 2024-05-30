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

const isTasksInStack = (stackEl) => stackEl && stackEl.childElementCount > 0;

const isPendingMacroTask = (task, microEl) =>
  task === 'asyncMacroTask' && microEl && microEl.childElementCount > 0;

const processEventLoop = (createEl, eventLoopIconEl) => {
  eventLoopIconEl?.classList.add('on');
  moveTask('stack', createEl).then(() => moveTask('console', createEl));
  eventLoopIconEl?.classList.remove('on');
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

const asyncTask = (task, createEl) => {
  const stackEl = document.querySelector('#stack');
  const microEl = document.querySelector('#microQueue');
  const eventLoopIconEl = document.querySelector('#eventLoop span');
  const eventQueue = task === 'asyncMacroTask' ? 'macroQueue' : 'microQueue';

  moveTask(eventQueue, createEl).then(() => {
    const loop = setInterval(() => {
      if (isTasksInStack(stackEl) || isPendingMacroTask(task, microEl)) return;
      clearInterval(loop);
      processEventLoop(createEl, eventLoopIconEl);
    }, 0);
  });
};

const handleAsyncTask = (task, createEl) => {
  moveTask('webApi', createEl).then(() => asyncTask(task, createEl));
};

const handleButtonClick = (event) => {
  const { id: task, innerText } = event.target;
  const createEl = createTaskElement(task, innerText);
  moveTask('stack', createEl).then(() => {
    if (task !== 'syncFunc') {
      handleAsyncTask(task, createEl);
    } else {
      moveTask('console', createEl);
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
