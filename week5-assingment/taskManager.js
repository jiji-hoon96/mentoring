import { taskLists } from './taskQueue.js';

let functionIndex = 0;
let macroIndex = 0;
let microIndex = 0;
let microTasks = 0;
let macroTasks = 0;

const taskIndexes = {
  syncFunc: functionIndex,
  asyncMacroTask: macroIndex,
  asyncMicroTask: microIndex,
};

const taskCounts = {
  asyncMacroTask: macroTasks,
  asyncMicroTask: microTasks,
};

export const getNewIndex = (taskType) => {
  if (taskIndexes.hasOwnProperty(taskType)) {
    return ++taskIndexes[taskType];
  }
  return '';
};

export const incrementTaskCount = (taskType) => {
  if (taskCounts.hasOwnProperty(taskType)) {
    taskCounts[taskType]++;
  }
};

export const decrementTaskCount = (taskType) => {
  if (taskCounts.hasOwnProperty(taskType)) {
    taskCounts[taskType]--;
  }
};

export const getTaskCount = (taskType) => {
  return taskCounts.hasOwnProperty(taskType) ? taskCounts[taskType] : 0;
};

export const getRandomTaskName = (taskType) => {
  const list = taskLists[taskType] || [];
  return list[Math.floor(Math.random() * list.length)];
};
