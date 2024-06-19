"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORM_DATA = void 0;
var FORM_DATA = exports.FORM_DATA = sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')) : {
  radio: '',
  checkbox: [],
  select: '',
  textarea: ''
};