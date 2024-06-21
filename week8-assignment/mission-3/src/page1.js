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

const radioOption = [
  { id: '1', label: 'radio option1', value: 'radio1', checked: true },
  { id: '2', label: 'radio option2', value: 'radio2', checked: false },
  { id: '3', label: 'radio option3', value: 'radio3', checked: false },
];

const checkboxOption = [
  { id: '1', label: 'checkbox option1', value: 'checkbox1', checked: true },
  { id: '2', label: 'checkbox option2', value: 'checkbox2', checked: false },
  { id: '3', label: 'checkbox option3', value: 'checkbox3', checked: false },
];

const vm = createElement(
  <div>
    <header>
      <div className="bgPurple"></div>
      <h1>Survey</h1>
      <strong className="require">* 표시는 필수 질문임</strong>
    </header>
    <form name="form" id="form1" method="post">
      <div className="box">
        <fieldset>
          <legend>
            radio input<span className="require">*</span>
          </legend>
          <div>
            {radioOption.map((option) => (
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
          {checkboxOption.map((option) => (
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
        <button
          type="button"
          id="validationBtn"
          className="next"
          data-navigate="#/2"
        >
          다음
        </button>
        <button type="button" id="resetBtn" className="reset">
          양식지우기
        </button>
      </div>
    </form>
  </div>
);
const $root = document.body.querySelector('#root');

$root.appendChild(vm);
