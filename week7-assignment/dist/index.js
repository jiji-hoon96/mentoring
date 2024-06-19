'use strict';

var _router = _interopRequireDefault(require('./router.js'));
var _page = _interopRequireDefault(require('./page1.js'));
var _page2 = _interopRequireDefault(require('./page2.js'));
var _page3 = _interopRequireDefault(require('./page3.js'));
var _common = require('./common.js');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var router = (0, _router['default'])();
var formData = _common.FORM_DATA;
var container = document.querySelector('main');
var navigateTo = function navigateTo(hash) {
  router.navigate(hash);
};
var isValidStep1 = function isValidStep1() {
  return formData.radio && formData.checkbox.length > 0;
};
var isValidStep2 = function isValidStep2() {
  return formData.select && formData.textarea;
};
var nextStep = function nextStep() {
  if (window.location.hash === '' && isValidStep1()) return navigateTo('#/2');
  if (window.location.hash === '#/2' && isValidStep2())
    return navigateTo('#/3');
  alert('필수 항목을 입력해주세요.');
};
var toggleCheckboxValue = function toggleCheckboxValue(value) {
  var checkboxValues = formData.checkbox || [];
  var valueIndex = checkboxValues.indexOf(value);
  if (valueIndex > -1) checkboxValues.splice(valueIndex, 1);
  else checkboxValues.push(value);
};
var previousStep = function previousStep() {
  return navigateTo('');
};
var storeInputValue = function storeInputValue(e) {
  var _e$target = e.target,
    name = _e$target.name,
    value = _e$target.value;
  if (name === 'radio') formData.radio = value;
  if (name === 'checkbox') toggleCheckboxValue(value);
  if (name === 'textarea') formData.textarea = value;
  if (name === 'select') formData.select = value;
  sessionStorage.setItem('data', JSON.stringify(formData));
};
var resetForm = function resetForm(page) {
  formData.radio = '';
  formData.checkbox = [];
  formData.select = '';
  formData.textarea = '';
  sessionStorage.setItem('data', JSON.stringify(formData));
  pages[page]();
};
var setupPage1 = function setupPage1() {
  container.innerHTML = (0, _page['default'])();
  document.getElementById('validationBtn').addEventListener('click', nextStep);
  document.getElementById('resetBtn').addEventListener('click', function () {
    return resetForm('page1');
  });
  document
    .querySelector('form[name="form"]')
    .addEventListener('change', storeInputValue);
};
var setupPage2 = function setupPage2() {
  container.innerHTML = (0, _page2['default'])();
  document.getElementById('validationBtn').addEventListener('click', nextStep);
  document.querySelector('.prev').addEventListener('click', previousStep);
  document.getElementById('resetBtn').addEventListener('click', function () {
    return resetForm('page2');
  });
  document
    .querySelector('form[name="form"]')
    .addEventListener('change', storeInputValue);
};
var setupPage3 = function setupPage3() {
  container.innerHTML = (0, _page3['default'])();
  document.getElementById('newFormBtn').addEventListener('click', function () {
    resetForm('page1');
    navigateTo('');
  });
};
var pages = {
  page1: setupPage1,
  page2: setupPage2,
  page3: setupPage3,
};
var initRouter = function initRouter() {
  router
    .addRouter('', pages.page1)
    .addRouter('#/2', pages.page2)
    .addRouter('#/3', pages.page3)
    .start();
};
document.addEventListener('DOMContentLoaded', initRouter);
