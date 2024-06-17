import createRouter from './router.js';
import page1 from './page1.js';
import page2 from './page2.js';
import page3 from './page3.js';
import { FORM_DATA } from './common.js';

const router = createRouter();
const formData = FORM_DATA;

const nextStep = () => {
  if (window.location.hash === '') {
    formData.radio && formData.checkbox.length > 0
      ? router.navigate('#/2')
      : alert('필수 항목을 입력해주세요.');
  } else if (window.location.hash === '#/2') {
    formData.select && formData.textarea
      ? router.navigate('#/3')
      : alert('필수 항목을 입력해주세요.');
  }
};

const previousStep = () => {
  router.navigate('');
};

const storeInputValue = (e) => {
  if (e.target.name === 'radio') {
    formData.radio = e.target.value;
  } else if (e.target.name === 'checkbox') {
    let checkboxValues = formData.checkbox ? formData.checkbox : [];
    const valueIndex = checkboxValues.indexOf(e.target.value);

    if (valueIndex > -1) {
      checkboxValues.splice(valueIndex, 1);
    } else {
      checkboxValues.push(e.target.value);
    }
  } else if (e.target.name === 'textarea') {
    formData.textarea = e.target.value;
  } else {
    formData.select = e.target.value;
  }
  sessionStorage.setItem('data', JSON.stringify(formData));
};

const container = document.querySelector('main');
const pages = {
  page1: () => {
    container.innerHTML = page1();
    const validationBtn = document.getElementById('validationBtn');
    const resetBtn = document.getElementById('resetBtn');
    validationBtn.addEventListener('click', nextStep);
    const pageInput = document.querySelector('form[name="form"]');
    resetBtn.addEventListener('click', () => {
      pageInput.reset();
      formData.radio = '';
      formData.checkbox = [];
      sessionStorage.setItem('data', JSON.stringify(formData));
      pages.page1();
    });

    pageInput.addEventListener('change', storeInputValue);
  },
  page2: () => {
    container.innerHTML = page2();
    const pageInput = document.querySelector('form[name="form"]');
    const previousBtn = document.querySelector('.prev');
    const validationBtn = document.getElementById('validationBtn');
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
      pageInput.reset();
      formData.select = '';
      formData.textarea = '';
      sessionStorage.setItem('data', JSON.stringify(formData));
      pages.page2();
    });
    validationBtn.addEventListener('click', nextStep);
    previousBtn.addEventListener('click', previousStep);
    pageInput.addEventListener('change', storeInputValue);
  },
  page3: () => {
    container.innerHTML = page3();
    const newFormBtn = document.getElementById('newFormBtn');
    newFormBtn.addEventListener('click', () => {
      formData.select = '';
      formData.textarea = '';
      formData.radio = '';
      formData.checkbox = [];
      sessionStorage.setItem('data', JSON.stringify(formData));
      router.navigate('');
    });
  },
};

router
  .addRouter('', pages.page1)
  .addRouter('#/2', pages.page2)
  .addRouter('#/3', pages.page3)
  .start();
