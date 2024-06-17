'use strict';

function h(type, props) {
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
  for (
    var _len = arguments.length,
      children = new Array(_len > 2 ? _len - 2 : 0),
      _key = 2;
    _key < _len;
    _key++
  ) {
    children[_key - 2] = arguments[_key];
  }
  children.forEach(function (child) {
    if (Array.isArray(child)) {
      child.forEach(function (nestedChild) {
        return element.appendChild(
          nestedChild.nodeType
            ? nestedChild
            : document.createTextNode(nestedChild)
        );
      });
    } else {
      element.appendChild(
        child.nodeType ? child : document.createTextNode(child)
      );
    }
  });
  return element;
}
