export const FORM_DATA = sessionStorage.getItem('data')
  ? JSON.parse(sessionStorage.getItem('data'))
  : { radio: '', checkbox: [], select: '', textarea: '' };
