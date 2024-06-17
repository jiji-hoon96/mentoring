'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = sectionPage1;
var _common = require('./common.js');
/** @jsx h */

function sectionPage1() {
  return h(
    'div',
    null,
    h(
      'header',
      null,
      h('div', {
        className: 'bgPurple',
      }),
      h('h1', null, 'Survey'),
      h(
        'strong',
        {
          className: 'require',
        },
        '* \uD45C\uC2DC\uB294 \uD544\uC218 \uC9C8\uBB38\uC784'
      )
    ),
    h(
      'form',
      {
        name: 'form',
        id: 'form1',
        method: 'post',
      },
      h(
        'div',
        {
          className: 'box',
        },
        h(
          'fieldset',
          null,
          h(
            'legend',
            null,
            'radio input',
            h(
              'span',
              {
                className: 'require',
              },
              '*'
            )
          ),
          h(
            'div',
            {
              className: 'fieldBox',
            },
            h(
              'label',
              null,
              h('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio1',
                checked: _common.FORM_DATA.radio === 'radio1',
              }),
              'radio option1'
            )
          ),
          h(
            'div',
            {
              className: 'fieldBox',
            },
            h(
              'label',
              null,
              h('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio2',
                checked: _common.FORM_DATA.radio === 'radio2',
              }),
              'radio option2'
            )
          ),
          h(
            'div',
            {
              className: 'fieldBox',
            },
            h(
              'label',
              null,
              h('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio3',
                checked: _common.FORM_DATA.radio === 'radio3',
              }),
              'radio option3'
            )
          )
        ),
        h('small', null, '\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.')
      ),
      h(
        'div',
        {
          className: 'box',
        },
        h(
          'fieldset',
          null,
          h(
            'legend',
            null,
            'checkbox input',
            h(
              'span',
              {
                className: 'require',
              },
              '*'
            )
          ),
          h(
            'div',
            {
              className: 'fieldBox',
            },
            h(
              'label',
              null,
              h('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox1',
                checked: _common.FORM_DATA.checkbox.includes('checkbox1'),
              }),
              'checkbox option1'
            )
          ),
          h(
            'div',
            {
              className: 'fieldBox',
            },
            h(
              'label',
              null,
              h('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox2',
                checked: _common.FORM_DATA.checkbox.includes('checkbox2'),
              }),
              'checkbox option2'
            )
          ),
          h(
            'div',
            {
              className: 'fieldBox',
            },
            h(
              'label',
              null,
              h('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox3',
                checked: _common.FORM_DATA.checkbox.includes('checkbox3'),
              }),
              'checkbox option3'
            )
          )
        ),
        h('small', null, '\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.')
      ),
      h(
        'div',
        {
          className: 'buttons',
        },
        h(
          'button',
          {
            type: 'button',
            id: 'validationBtn',
            className: 'next',
            'data-navigate': '#/2',
          },
          '\uB2E4\uC74C'
        ),
        h(
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
