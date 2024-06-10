import { decrementTaskCount } from './taskManager.js';
import { moveTask } from './view.js';

const processEventLoop = (createEl, eventLoopIconEl, taskType) => {
  decrementTaskCount(taskType);
  eventLoopIconEl?.classList.add('on');
  moveTask('stack', createEl).then(() => moveTask('console', createEl));
};

const moveTaskAndProcessEventLoop = (
  taskType,
  createEl,
  eventQueue,
  stackEl,
  microEl,
  eventLoopIconEl
) => {
  moveTask(eventQueue, createEl).then(() => {
    const loop = setInterval(() => {
      if (
        stackEl.childElementCount > 0 ||
        (taskType === 'asyncMacroTask' && microEl.childElementCount > 0)
      )
        return;
      clearInterval(loop);
      processEventLoop(createEl, eventLoopIconEl, taskType);
    }, 0);
  });
};

export const asyncTask = (taskType, createEl) => {
  const stackEl = document.querySelector('#stack');
  const microEl = document.querySelector('#microQueue');
  const eventLoopIconEl = document.querySelector('#eventLoop span');
  const eventQueue =
    taskType === 'asyncMacroTask' ? 'macroQueue' : 'microQueue';

  moveTaskAndProcessEventLoop(
    taskType,
    createEl,
    eventQueue,
    stackEl,
    microEl,
    eventLoopIconEl
  );
};

export const handleAsyncTask = (taskType, createEl) => {
  moveTask('webApi', createEl).then(() => asyncTask(taskType, createEl));
};
