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

export const getNextIndex = (task) => {
  switch (task) {
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

export const incrementTaskCount = (task) => {
  if (task === 'asyncMacroTask') {
    macroTasks++;
  } else {
    microTasks++;
  }
};

export const decrementTaskCount = (task) => {
  if (task === 'asyncMacroTask') {
    macroTasks--;
  } else {
    microTasks--;
  }
};

export const getTaskCounts = () => ({ microTasks, macroTasks });

export const getRandomTask = (taskType) => {
  if (taskType === 'asyncMacroTask') {
    return macroTaskList[Math.floor(Math.random() * macroTaskList.length)];
  }
  if (taskType === 'asyncMicroTask') {
    return microTaskList[Math.floor(Math.random() * microTaskList.length)];
  }
  return '';
};
