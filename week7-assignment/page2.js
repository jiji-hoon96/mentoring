/** @jsx createJsxElement */
import { FORM_DATA } from './common.js';

export default function sectionPage2() {
  return (
    <div>
      <header>
        <div class="bgPurple"></div>
        <h1>Survey</h1>
        <strong class="require">* 표시는 필수 질문임</strong>
      </header>
      <form name="form">
        <h2 class="bgPurple">section2</h2>
        <div class="box">
          <fieldset>
            <legend>
              select<span class="require">*</span>
            </legend>
            <select name="select" id="select">
              <option value="">선택</option>
              <option value="1" checked={FORM_DATA.select === '1'}>
                select option1
              </option>
              <option value="2" checked={FORM_DATA.select === '2'}>
                select option1
              </option>
              <option value="3" checked={FORM_DATA.select === '3'}>
                select option1
              </option>
            </select>
          </fieldset>
          <small>※ 필수 항목입니다.</small>
        </div>
        <div class="box">
          <fieldset>
            <legend>
              textarea<span class="require">*</span>
            </legend>
            <textarea name="textarea">${FORM_DATA.textarea || ''}</textarea>
          </fieldset>
          <small>※ 필수 항목입니다.</small>
        </div>
        <div class="buttons">
          <button type="button" class="prev" data-navigate="">
            뒤로
          </button>
          <button
            type="button"
            id="validationBtn"
            class="submit"
            data-navigate="/3"
          >
            제출
          </button>
          <button type="button" id="resetBtn" class="reset">
            양식지우기
          </button>
        </div>
      </form>
    </div>
  );
}
