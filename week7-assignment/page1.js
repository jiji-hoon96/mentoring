/** @jsx h */
import { FORM_DATA } from './common.js';

export default function sectionPage1() {
  return (
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
            <div className="fieldBox">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="radio1"
                  checked={FORM_DATA.radio === 'radio1'}
                />
                radio option1
              </label>
            </div>
            <div className="fieldBox">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="radio2"
                  checked={FORM_DATA.radio === 'radio2'}
                />
                radio option2
              </label>
            </div>
            <div className="fieldBox">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="radio3"
                  checked={FORM_DATA.radio === 'radio3'}
                />
                radio option3
              </label>
            </div>
          </fieldset>
          <small>※ 필수 항목입니다.</small>
        </div>
        <div className="box">
          <fieldset>
            <legend>
              checkbox input<span className="require">*</span>
            </legend>
            <div className="fieldBox">
              <label>
                <input
                  type="checkbox"
                  name="checkbox"
                  value="checkbox1"
                  checked={FORM_DATA.checkbox.includes('checkbox1')}
                />
                checkbox option1
              </label>
            </div>
            <div className="fieldBox">
              <label>
                <input
                  type="checkbox"
                  name="checkbox"
                  value="checkbox2"
                  checked={FORM_DATA.checkbox.includes('checkbox2')}
                />
                checkbox option2
              </label>
            </div>
            <div className="fieldBox">
              <label>
                <input
                  type="checkbox"
                  name="checkbox"
                  value="checkbox3"
                  checked={FORM_DATA.checkbox.includes('checkbox3')}
                />
                checkbox option3
              </label>
            </div>
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
}
