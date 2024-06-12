import createRouter from './router.js';
import page1 from './page1.js';
import page2 from './page2.js';
import page3 from './page3.js';

const container = document.querySelector('main');
const pages = {
  page1: () => (container.innerHTML = page1()),
  page2: () => (container.innerHTML = page2()),
  page3: () => (container.innerHTML = page3()),
};

const router = createRouter();
router
  .addRouter('', pages.page1)
  .addRouter('#/2', pages.page2)
  .addRouter('#/3', pages.page3)
  .start();
