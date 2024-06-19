'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = sectionPage2;
var _common = require('./common.js');
/** @jsx createJsxElement */

function sectionPage2() {
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
        'strong',
        {
          class: 'require',
        },
        '* \uD45C\uC2DC\uB294 \uD544\uC218 \uC9C8\uBB38\uC784'
      )
    ),
    createJsxElement(
      'form',
      {
        name: 'form',
      },
      createJsxElement(
        'h2',
        {
          class: 'bgPurple',
        },
        'section2'
      ),
      createJsxElement(
        'div',
        {
          class: 'box',
        },
        createJsxElement(
          'fieldset',
          null,
          createJsxElement(
            'legend',
            null,
            'select',
            createJsxElement(
              'span',
              {
                class: 'require',
              },
              '*'
            )
          ),
          createJsxElement(
            'select',
            {
              name: 'select',
              id: 'select',
            },
            createJsxElement(
              'option',
              {
                value: '',
              },
              '\uC120\uD0DD'
            ),
            createJsxElement(
              'option',
              {
                value: '1',
                checked: _common.FORM_DATA.select === '1',
              },
              'select option1'
            ),
            createJsxElement(
              'option',
              {
                value: '2',
                checked: _common.FORM_DATA.select === '2',
              },
              'select option1'
            ),
            createJsxElement(
              'option',
              {
                value: '3',
                checked: _common.FORM_DATA.select === '3',
              },
              'select option1'
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
          class: 'box',
        },
        createJsxElement(
          'fieldset',
          null,
          createJsxElement(
            'legend',
            null,
            'textarea',
            createJsxElement(
              'span',
              {
                class: 'require',
              },
              '*'
            )
          ),
          createJsxElement(
            'textarea',
            {
              name: 'textarea',
            },
            '$',
            _common.FORM_DATA.textarea || ''
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
          class: 'buttons',
        },
        createJsxElement(
          'button',
          {
            type: 'button',
            class: 'prev',
            'data-navigate': '',
          },
          '\uB4A4\uB85C'
        ),
        createJsxElement(
          'button',
          {
            type: 'button',
            id: 'validationBtn',
            class: 'submit',
            'data-navigate': '/3',
          },
          '\uC81C\uCD9C'
        ),
        createJsxElement(
          'button',
          {
            type: 'button',
            id: 'resetBtn',
            class: 'reset',
          },
          '\uC591\uC2DD\uC9C0\uC6B0\uAE30'
        )
      )
    )
  );
}
