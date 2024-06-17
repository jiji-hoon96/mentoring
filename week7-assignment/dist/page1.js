'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = sectionPage1;
var _common = require('./common.js');
/** @jsx createJsxElement */

function sectionPage1() {
  return createJsxElement(
    'div',
    null,
    createJsxElement(
      'header',
      null,
      createJsxElement('div', {
        className: 'bgPurple',
      }),
      createJsxElement('h1', null, 'Survey'),
      createJsxElement(
        'strong',
        {
          className: 'require',
        },
        '* \uD45C\uC2DC\uB294 \uD544\uC218 \uC9C8\uBB38\uC784'
      )
    ),
    createJsxElement(
      'form',
      {
        name: 'form',
        id: 'form1',
        method: 'post',
      },
      createJsxElement(
        'div',
        {
          className: 'box',
        },
        createJsxElement(
          'fieldset',
          null,
          createJsxElement(
            'legend',
            null,
            'radio input',
            createJsxElement(
              'span',
              {
                className: 'require',
              },
              '*'
            )
          ),
          createJsxElement(
            'div',
            {
              className: 'fieldBox',
            },
            createJsxElement(
              'label',
              null,
              createJsxElement('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio1',
                checked: _common.FORM_DATA.radio === 'radio1',
              }),
              'radio option1'
            )
          ),
          createJsxElement(
            'div',
            {
              className: 'fieldBox',
            },
            createJsxElement(
              'label',
              null,
              createJsxElement('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio2',
                checked: _common.FORM_DATA.radio === 'radio2',
              }),
              'radio option2'
            )
          ),
          createJsxElement(
            'div',
            {
              className: 'fieldBox',
            },
            createJsxElement(
              'label',
              null,
              createJsxElement('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio3',
                checked: _common.FORM_DATA.radio === 'radio3',
              }),
              'radio option3'
            )
          )
        ),
        createJsxElement(
          'small',
          null,
          '\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.'
        )
      ),
      createJsxElement(
        'div',
        {
          className: 'box',
        },
        createJsxElement(
          'fieldset',
          null,
          createJsxElement(
            'legend',
            null,
            'checkbox input',
            createJsxElement(
              'span',
              {
                className: 'require',
              },
              '*'
            )
          ),
          createJsxElement(
            'div',
            {
              className: 'fieldBox',
            },
            createJsxElement(
              'label',
              null,
              createJsxElement('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox1',
                checked: _common.FORM_DATA.checkbox.includes('checkbox1'),
              }),
              'checkbox option1'
            )
          ),
          createJsxElement(
            'div',
            {
              className: 'fieldBox',
            },
            createJsxElement(
              'label',
              null,
              createJsxElement('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox2',
                checked: _common.FORM_DATA.checkbox.includes('checkbox2'),
              }),
              'checkbox option2'
            )
          ),
          createJsxElement(
            'div',
            {
              className: 'fieldBox',
            },
            createJsxElement(
              'label',
              null,
              createJsxElement('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox3',
                checked: _common.FORM_DATA.checkbox.includes('checkbox3'),
              }),
              'checkbox option3'
            )
          )
        ),
        createJsxElement(
          'small',
          null,
          '\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.'
        )
      ),
      createJsxElement(
        'div',
        {
          className: 'buttons',
        },
        createJsxElement(
          'button',
          {
            type: 'button',
            id: 'validationBtn',
            className: 'next',
            'data-navigate': '#/2',
          },
          '\uB2E4\uC74C'
        ),
        createJsxElement(
          'button',
          {
            type: 'button',
            id: 'resetBtn',
            className: 'reset',
          },
          '\uC591\uC2DD\uC9C0\uC6B0\uAE30'
        )
      )
    )
  );
}
