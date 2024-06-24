/** @jsx h */

function h(type, props, ...children) {
  return { type, props, children };
}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  if (Array.isArray(node)) {
    const fragment = document.createDocumentFragment();
    node.forEach((childNode) => {
      fragment.appendChild(createElement(childNode));
    });
    return fragment;
  }

  const { type, props, children } = node;
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

  (children || []).forEach((child) => {
    element.appendChild(createElement(child));
  });

  return element;
}

function updateElement(parent, newNode, oldNode, index = 0) {
  if (!newNode && oldNode) return parent.removeChild(parent.childNodes[index]);
  if (newNode && !oldNode) return parent.appendChild(createElement(newNode));
  if (typeof newNode === 'string' && typeof oldNode === 'string') {
    if (newNode !== oldNode) {
      parent.childNodes[index].nodeValue = newNode;
    }
    return;
  }
  if (newNode.type !== oldNode.type) {
    return parent.replaceChild(
      createElement(newNode),
      parent.childNodes[index]
    );
  }

  updateAttributes(
    parent.childNodes[index],
    newNode.props || {},
    oldNode.props || {}
  );

  const newLength = newNode.children ? newNode.children.length : 0;
  const oldLength = oldNode.children ? oldNode.children.length : 0;

  for (let i = 0; i < newLength || i < oldLength; i++) {
    updateElement(
      parent.childNodes[index],
      newNode.children && newNode.children[i],
      oldNode.children && oldNode.children[i],
      i
    );
  }
}

function updateAttributes(target, newProps, oldProps) {
  for (const [attr, value] of Object.entries(newProps)) {
    if (oldProps[attr] === newProps[attr]) continue;
    if (attr.startsWith('on') && typeof value === 'function') {
      const eventName = attr.substring(2).toLowerCase();
      target.removeEventListener(eventName, oldProps[attr]);
      target.addEventListener(eventName, value);
    } else if (attr === 'checked') {
      target.checked = value;
    } else {
      target.setAttribute(attr, value);
    }
  }

  for (const attr of Object.keys(oldProps)) {
    if (newProps[attr] !== undefined) continue;
    if (attr.startsWith('on') && typeof oldProps[attr] === 'function') {
      const eventName = attr.substring(2).toLowerCase();
      target.removeEventListener(eventName, oldProps[attr]);
    } else {
      target.removeAttribute(attr);
    }
  }
}

const oldRadioOption = [
  { id: '1', label: 'radio option1', value: 'radio1', checked: true },
  { id: '2', label: 'radio option2', value: 'radio2', checked: false },
  { id: '3', label: 'radio option3', value: 'radio3', checked: false },
];

const oldCheckboxOption = [
  { id: '1', label: 'checkbox option1', value: 'checkbox1', checked: true },
  { id: '2', label: 'checkbox option2', value: 'checkbox2', checked: false },
  { id: '3', label: 'checkbox option3', value: 'checkbox3', checked: false },
];

const newRadioOption = [
  { id: '1', label: 'radio option1', value: 'radio1', checked: false },
  { id: '2', label: 'radio option2 update', value: 'radio2', checked: false },
];

const newCheckboxOption = [
  { id: '1', label: 'checkbox option1', value: 'checkbox1', checked: false },
  {
    id: '2',
    label: 'checkbox option2 update',
    value: 'checkbox2',
    checked: false,
  },
  { id: '3', label: 'checkbox option3', value: 'checkbox3', checked: true },
  { id: '4', label: 'checkbox option4', value: 'checkbox4', checked: true },
];

const vm = (radioList, checkboxList) => (
  <div>
    <header>
      <div className="bgPurple"></div>
      <h1>Survey</h1>
      <strong className="require">* 표시는 필수 질문임</strong>
    </header>
    <form name="form" id="form1">
      <div className="box">
        <fieldset>
          <legend>
            radio input<span className="require">*</span>
          </legend>
          <div>
            {radioList.map((option) => (
              <div className="fieldBox" key={option.value}>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={option.value}
                    checked={option.checked}
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <small>※ 필수 항목입니다.</small>
      </div>
      <div className="box">
        <fieldset>
          <legend>
            checkbox input<span className="require">*</span>
          </legend>
          {checkboxList.map((option) => (
            <div className="fieldBox" key={option.value}>
              <label>
                <input
                  type="checkbox"
                  name="checkbox"
                  value={option.value}
                  checked={option.checked}
                />
                {option.label}
              </label>
            </div>
          ))}
        </fieldset>
        <small>※ 필수 항목입니다.</small>
      </div>
      <div className="buttons">
        <button type="submit" id="validationBtn" className="next">
          다음
        </button>
        <button type="button" id="resetBtn" className="reset">
          양식지우기
        </button>
      </div>
    </form>
  </div>
);

const oldNode = vm(oldRadioOption, oldCheckboxOption);
const newNode = vm(newRadioOption, newCheckboxOption);

const $root = document.createElement('div');
document.body.appendChild($root);

updateElement($root, oldNode);
setTimeout(() => updateElement($root, newNode, oldNode), 1500);