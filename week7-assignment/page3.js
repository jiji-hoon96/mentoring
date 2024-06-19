/** @jsx createJsxElement */
import { FORM_DATA } from './common.js';

export default function sectionPage3() {
  return (
    <div>
      <header>
        <div class="bgPurple"></div>
        <h1>Survey</h1>
        <div class="result">
          응답이 기록되었습니다.
          <br />${JSON.stringify(FORM_DATA)}
        </div>
        <button class="first" id="newFormBtn">
          다른 응답 제출
        </button>
      </header>
    </div>
  );
}
