function h(type, props, ...children) {
  const element = document.createElement(type);

  Object.keys(props || {}).forEach((key) => {
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

  children.forEach((child) => {
    if (Array.isArray(child)) {
      child.forEach((nestedChild) =>
        element.appendChild(
          nestedChild.nodeType
            ? nestedChild
            : document.createTextNode(nestedChild)
        )
      );
    } else {
      element.appendChild(
        child.nodeType ? child : document.createTextNode(child)
      );
    }
  });

  return element;
}
