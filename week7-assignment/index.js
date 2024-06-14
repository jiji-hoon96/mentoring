import createRouter from './router.js';
import page1 from './page1.js';
import page2 from './page2.js';
import page3 from './page3.js';
import { FORM_DATA } from './common.js';

const router = createRouter();
const formData = FORM_DATA;

const pushNext = () => {
  formData.radio && formData.checkbox.length > 0
    ? router.navigate('#/2')
    : alert('필수 항목을 입력해주세요.');
};

const storeInputValue = (e) => {
  if (e.target.name === 'radio') {
    formData.radio = e.target.value;
  } else {
    let checkboxValues = formData.checkbox ? formData.checkbox : [];
    const valueIndex = checkboxValues.indexOf(e.target.value);

    if (valueIndex > -1) {
      checkboxValues.splice(valueIndex, 1);
    } else {
      checkboxValues.push(e.target.value);
    }
  }
};

const container = document.querySelector('main');
const pages = {
  page1: () => {
    container.innerHTML = page1();
    const validationBtn = document.getElementById('validationBtn');
    const page1Input = document.querySelector('form[name="form"]');
    validationBtn.addEventListener('click', pushNext);
    page1Input.addEventListener('change', storeInputValue);
  },
  page2: () => (container.innerHTML = page2()),
  page3: () => (container.innerHTML = page3()),
};

router
  .addRouter('', pages.page1)
  .addRouter('#/2', pages.page2)
  .addRouter('#/3', pages.page3)
  .start();
