'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = sectionPage3;
var _common = require('./common.js');
/** @jsx createJsxElement */

function sectionPage3() {
  return createJsxElement(
    'div',
    null,
    createJsxElement(
      'header',
      null,
      createJsxElement('div', {
        class: 'bgPurple',
      }),
      createJsxElement('h1', null, 'Survey'),
      createJsxElement(
        'div',
        {
          class: 'result',
        },
        '\uC751\uB2F5\uC774 \uAE30\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.',
        createJsxElement('br', null),
        '$',
        JSON.stringify(_common.FORM_DATA)
      ),
      createJsxElement(
        'button',
        {
          class: 'first',
          id: 'newFormBtn',
        },
        '\uB2E4\uB978 \uC751\uB2F5 \uC81C\uCD9C'
      )
    )
  );
}
