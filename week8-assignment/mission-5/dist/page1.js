"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/** @jsx h */

function h(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  return {
    type: type,
    props: props,
    children: children
  };
}
function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  if (Array.isArray(node)) {
    var fragment = document.createDocumentFragment();
    node.forEach(function (childNode) {
      fragment.appendChild(createElement(childNode));
    });
    return fragment;
  }
  var type = node.type,
    props = node.props,
    children = node.children;
  var element = document.createElement(type);
  Object.keys(props || {}).forEach(function (key) {
    if (key.startsWith('on') && typeof props[key] === 'function') {
      element.addEventListener(key.substring(2).toLowerCase(), props[key]);
    } else if (key === 'className') {
      element.setAttribute('class', props[key]);
    } else if (key === 'checked' && props[key]) {
      element.setAttribute(key, '');
    } else {
      element.setAttribute(key, props[key]);
    }
  });
  (children || []).forEach(function (child) {
    element.appendChild(createElement(child));
  });
  return element;
}
function updateElement(parent, newNode, oldNode) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  if (!newNode && oldNode) return parent.removeChild(parent.childNodes[index]);
  if (newNode && !oldNode) return parent.appendChild(createElement(newNode));
  if (typeof newNode === 'string' && typeof oldNode === 'string') {
    if (newNode !== oldNode) {
      parent.childNodes[index].nodeValue = newNode;
    }
    return;
  }
  if (newNode.type !== oldNode.type) {
    return parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  }
  updateAttributes(parent.childNodes[index], newNode.props || {}, oldNode.props || {});
  var newLength = newNode.children ? newNode.children.length : 0;
  var oldLength = oldNode.children ? oldNode.children.length : 0;
  for (var i = 0; i < newLength || i < oldLength; i++) {
    updateElement(parent.childNodes[index], newNode.children && newNode.children[i], oldNode.children && oldNode.children[i], i);
  }
}
function updateAttributes(target, newProps, oldProps) {
  for (var _i = 0, _Object$entries = Object.entries(newProps); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      attr = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (oldProps[attr] === newProps[attr]) continue;
    if (attr.startsWith('on') && typeof value === 'function') {
      var eventName = attr.substring(2).toLowerCase();
      target.removeEventListener(eventName, oldProps[attr]);
      target.addEventListener(eventName, value);
    } else if (attr === 'checked') {
      target.checked = value;
    } else {
      target.setAttribute(attr, value);
    }
  }
  for (var _i2 = 0, _Object$keys = Object.keys(oldProps); _i2 < _Object$keys.length; _i2++) {
    var _attr = _Object$keys[_i2];
    if (newProps[_attr] !== undefined) continue;
    if (_attr.startsWith('on') && typeof oldProps[_attr] === 'function') {
      var _eventName = _attr.substring(2).toLowerCase();
      target.removeEventListener(_eventName, oldProps[_attr]);
    } else {
      target.removeAttribute(_attr);
    }
  }
}
var currentVNode = null;
var rootElement = null;
function render(vnode, container) {
  if (currentVNode == null) {
    updateElement(container, vnode);
  } else {
    updateElement(container, vnode, currentVNode);
  }
  currentVNode = vnode;
  rootElement = container;
}
function useState(initialState) {
  var state = {
    value: initialState
  };
  var setState = function setState(newValue) {
    state.value = newValue;
    renderApp();
  };
  return [state, setState];
}
function renderApp() {
  var vnode = App();
  render(vnode, rootElement);
}
function App() {
  var _useState = useState([{
      id: '1',
      label: 'radio option1',
      value: 'radio1',
      checked: true
    }, {
      id: '2',
      label: 'radio option2',
      value: 'radio2',
      checked: false
    }, {
      id: '3',
      label: 'radio option3',
      value: 'radio3',
      checked: false
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    radioOptions = _useState2[0],
    setRadioOptions = _useState2[1];
  var _useState3 = useState([{
      id: '1',
      label: 'checkbox option1',
      value: 'checkbox1',
      checked: true
    }, {
      id: '2',
      label: 'checkbox option2',
      value: 'checkbox2',
      checked: false
    }, {
      id: '3',
      label: 'checkbox option3',
      value: 'checkbox3',
      checked: false
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkboxOptions = _useState4[0],
    setCheckboxOptions = _useState4[1];
  var handleRadioChange = function handleRadioChange(id) {
    setRadioOptions(radioOptions.value.map(function (option) {
      return _objectSpread(_objectSpread({}, option), {}, {
        checked: option.id === id
      });
    }));
  };
  var handleCheckboxChange = function handleCheckboxChange(id) {
    setCheckboxOptions(checkboxOptions.value.map(function (option) {
      return option.id === id ? _objectSpread(_objectSpread({}, option), {}, {
        checked: !option.checked
      }) : option;
    }));
  };
  var handleReset = function handleReset() {
    setRadioOptions(radioOptions.value.map(function (option) {
      return _objectSpread(_objectSpread({}, option), {}, {
        checked: false
      });
    }));
    setCheckboxOptions(checkboxOptions.value.map(function (option) {
      return _objectSpread(_objectSpread({}, option), {}, {
        checked: false
      });
    }));
  };
  return h("div", null, h("header", null, h("div", {
    className: "bgPurple"
  }), h("h1", null, "Survey"), h("strong", {
    className: "require"
  }, "* \uD45C\uC2DC\uB294 \uD544\uC218 \uC9C8\uBB38\uC784")), h("form", {
    name: "form",
    id: "form1"
  }, h("div", {
    className: "box"
  }, h("fieldset", null, h("legend", null, "radio input", h("span", {
    className: "require"
  }, "*")), h("div", null, radioOptions.value.map(function (option) {
    return h("div", {
      className: "fieldBox",
      key: option.value
    }, h("label", null, h("input", {
      type: "radio",
      name: "radio",
      value: option.value,
      checked: option.checked,
      onChange: function onChange() {
        return handleRadioChange(option.id);
      }
    }), option.label));
  }))), h("small", null, "\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.")), h("div", {
    className: "box"
  }, h("fieldset", null, h("legend", null, "checkbox input", h("span", {
    className: "require"
  }, "*")), checkboxOptions.value.map(function (option) {
    return h("div", {
      className: "fieldBox",
      key: option.value
    }, h("label", null, h("input", {
      type: "checkbox",
      name: "checkbox",
      value: option.value,
      checked: option.checked,
      onChange: function onChange() {
        return handleCheckboxChange(option.id);
      }
    }), option.label));
  })), h("small", null, "\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.")), h("div", {
    className: "buttons"
  }, h("button", {
    type: "submit",
    id: "validationBtn",
    className: "next"
  }, "\uB2E4\uC74C"), h("button", {
    type: "button",
    id: "resetBtn",
    className: "reset",
    onClick: handleReset
  }, "\uC591\uC2DD\uC9C0\uC6B0\uAE30"))));
}
var $root = document.createElement('div');
document.body.appendChild($root);
renderApp();