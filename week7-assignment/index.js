import createRouter from './router.js';
import page1 from './page1.js';
import page2 from './page2.js';
import page3 from './page3.js';
import { FORM_DATA } from './common.js';

const router = createRouter();
const formData = FORM_DATA;
const container = document.querySelector('main');

const navigateTo = (hash) => {
  router.navigate(hash);
};

const isValidStep1 = () => formData.radio && formData.checkbox.length > 0;
const isValidStep2 = () => formData.select && formData.textarea;

const nextStep = () => {
  if (window.location.hash === '' && isValidStep1()) return navigateTo('#/2');
  if (window.location.hash === '#/2' && isValidStep2())
    return navigateTo('#/3');
  alert('필수 항목을 입력해주세요.');
};

const toggleCheckboxValue = (value) => {
  const checkboxValues = formData.checkbox || [];
  const valueIndex = checkboxValues.indexOf(value);
  if (valueIndex > -1) checkboxValues.splice(valueIndex, 1);
  else checkboxValues.push(value);
};

const previousStep = () => navigateTo('');

const storeInputValue = (e) => {
  const { name, value } = e.target;
  if (name === 'radio') formData.radio = value;
  if (name === 'checkbox') toggleCheckboxValue(value);
  if (name === 'textarea') formData.textarea = value;
  if (name === 'select') formData.select = value;
  sessionStorage.setItem('data', JSON.stringify(formData));
};

const resetForm = (page) => {
  formData.radio = '';
  formData.checkbox = [];
  formData.select = '';
  formData.textarea = '';
  sessionStorage.setItem('data', JSON.stringify(formData));
  pages[page]();
};

const setupPage1 = () => {
  container.innerHTML = page1();
  document.getElementById('validationBtn').addEventListener('click', nextStep);
  document
    .getElementById('resetBtn')
    .addEventListener('click', () => resetForm('page1'));
  document
    .querySelector('form[name="form"]')
    .addEventListener('change', storeInputValue);
};

const setupPage2 = () => {
  container.innerHTML = page2();
  document.getElementById('validationBtn').addEventListener('click', nextStep);
  document.querySelector('.prev').addEventListener('click', previousStep);
  document
    .getElementById('resetBtn')
    .addEventListener('click', () => resetForm('page2'));
  document
    .querySelector('form[name="form"]')
    .addEventListener('change', storeInputValue);
};

const setupPage3 = () => {
  container.innerHTML = page3();
  document.getElementById('newFormBtn').addEventListener('click', () => {
    resetForm('page1');
    navigateTo('');
  });
};

const pages = {
  page1: setupPage1,
  page2: setupPage2,
  page3: setupPage3,
};

const initRouter = () => {
  router
    .addRouter('', pages.page1)
    .addRouter('#/2', pages.page2)
    .addRouter('#/3', pages.page3)
    .start();
};

document.addEventListener('DOMContentLoaded', initRouter);
