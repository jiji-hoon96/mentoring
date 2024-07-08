"use strict";

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
var oldRadioOption = [{
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
}];
var oldCheckboxOption = [{
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
}];
var newRadioOption = [{
  id: '1',
  label: 'radio option1',
  value: 'radio1',
  checked: false
}, {
  id: '2',
  label: 'radio option2 update',
  value: 'radio2',
  checked: false
}];
var newCheckboxOption = [{
  id: '1',
  label: 'checkbox option1',
  value: 'checkbox1',
  checked: false
}, {
  id: '2',
  label: 'checkbox option2 update',
  value: 'checkbox2',
  checked: false
}, {
  id: '3',
  label: 'checkbox option3',
  value: 'checkbox3',
  checked: true
}, {
  id: '4',
  label: 'checkbox option4',
  value: 'checkbox4',
  checked: true
}];
var vm = function vm(radioList, checkboxList) {
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
  }, "*")), h("div", null, radioList.map(function (option) {
    return h("div", {
      className: "fieldBox",
      key: option.value
    }, h("label", null, h("input", {
      type: "radio",
      name: "radio",
      value: option.value,
      checked: option.checked
    }), option.label));
  }))), h("small", null, "\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.")), h("div", {
    className: "box"
  }, h("fieldset", null, h("legend", null, "checkbox input", h("span", {
    className: "require"
  }, "*")), checkboxList.map(function (option) {
    return h("div", {
      className: "fieldBox",
      key: option.value
    }, h("label", null, h("input", {
      type: "checkbox",
      name: "checkbox",
      value: option.value,
      checked: option.checked
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
    className: "reset"
  }, "\uC591\uC2DD\uC9C0\uC6B0\uAE30"))));
};
var oldNode = vm(oldRadioOption, oldCheckboxOption);
var newNode = vm(newRadioOption, newCheckboxOption);
var $root = document.createElement('div');
document.body.appendChild($root);
updateElement($root, oldNode);
setTimeout(function () {
  return updateElement($root, newNode, oldNode);
}, 1500);