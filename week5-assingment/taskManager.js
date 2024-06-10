let functionIndex = 0;
let macroIndex = 0;
let microIndex = 0;
let microTasks = 0;
let macroTasks = 0;

const microTaskList = [
  'process.nextTick()',
  'Promise callbacks',
  'Async/Await',
  'queueMicrotask()',
  'MutationObserver',
  'IntersectionObserver',
  'PerformanceObserver',
];

const macroTaskList = [
  'setTimeout',
  'setInterval',
  'setImmediate',
  'requestAnimationFrame',
  'I/O',
  'UI rendering',
  'postMessage',
  'MessageChannel',
  'IndexedDB',
  'WebSQL',
  'FileReader',
  'fetch',
];

export const getNewIndex = (taskType) => {
  switch (taskType) {
    case 'syncFunc':
      return ++functionIndex;
    case 'asyncMacroTask':
      return ++macroIndex;
    case 'asyncMicroTask':
      return ++microIndex;
    default:
      return '';
  }
};

export const incrementTaskCount = (taskType) => {
  if (taskType === 'asyncMacroTask') {
    macroTasks++;
  } else if (taskType === 'asyncMicroTask') {
    microTasks++;
  }
};

export const decrementTaskCount = (taskType) => {
  if (taskType === 'asyncMacroTask') {
    macroTasks--;
  } else if (taskType === 'asyncMicroTask') {
    microTasks--;
  }
};

export const getTaskCount = (taskType) => {
  return taskType === 'asyncMacroTask' ? macroTasks : microTasks;
};

export const getRandomTaskName = (taskType) => {
  const list = taskType === 'asyncMacroTask' ? macroTaskList : microTaskList;
  return list[Math.floor(Math.random() * list.length)];
};
