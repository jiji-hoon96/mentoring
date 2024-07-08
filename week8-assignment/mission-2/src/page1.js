/** @jsx h */

function h(type, props, ...children) {
  return { type, props, children };
}

const FORM_DATA = {
  radio: 'radio1',
  checkbox: ['checkbox1'],
};

const options = {
  radio: [
    { value: 'radio1', label: 'radio option1' },
    { value: 'radio2', label: 'radio option2' },
    { value: 'radio3', label: 'radio option3' },
  ],
  checkbox: [
    { value: 'checkbox1', label: 'checkbox option1' },
    { value: 'checkbox2', label: 'checkbox option2' },
    { value: 'checkbox3', label: 'checkbox option3' },
  ],
};

const vm = (
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
          {options.radio.map((option) => (
            <div className="fieldBox" key={option.value}>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value={option.value}
                  checked={FORM_DATA.radio === option.value}
                />
                {option.label}
              </label>
            </div>
          ))}
        </fieldset>
        <small>※ 필수 항목입니다.</small>
      </div>
      <div className="box">
        <fieldset>
          <legend>
            checkbox input<span className="require">*</span>
          </legend>
          {options.checkbox.map((option) => (
            <div className="fieldBox" key={option.value}>
              <label>
                <input
                  type="checkbox"
                  name="checkbox"
                  value={option.value}
                  checked={FORM_DATA.checkbox.includes(option.value)}
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

$root.innerHTML = `
<pre>${JSON.stringify(vm, null, 2)}</pre>
`;
