'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = sectionPage2;
var _common = require('./common.js');
function sectionPage2() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      'header',
      null,
      /*#__PURE__*/ React.createElement('div', {
        class: 'bgPurple',
      }),
      /*#__PURE__*/ React.createElement('h1', null, 'Survey'),
      /*#__PURE__*/ React.createElement(
        'strong',
        {
          class: 'require',
        },
        '* \uD45C\uC2DC\uB294 \uD544\uC218 \uC9C8\uBB38\uC784'
      )
    ),
    /*#__PURE__*/ React.createElement(
      'form',
      {
        name: 'form',
      },
      /*#__PURE__*/ React.createElement(
        'h2',
        {
          class: 'bgPurple',
        },
        'section2'
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'box',
        },
        /*#__PURE__*/ React.createElement(
          'fieldset',
          null,
          /*#__PURE__*/ React.createElement(
            'legend',
            null,
            'select',
            /*#__PURE__*/ React.createElement(
              'span',
              {
                class: 'require',
              },
              '*'
            )
          ),
          /*#__PURE__*/ React.createElement(
            'select',
            {
              name: 'select',
              id: 'select',
            },
            /*#__PURE__*/ React.createElement(
              'option',
              {
                value: '',
              },
              '\uC120\uD0DD'
            ),
            /*#__PURE__*/ React.createElement(
              'option',
              {
                value: '1',
                checked: _common.FORM_DATA.select === '1',
              },
              'select option1'
            ),
            /*#__PURE__*/ React.createElement(
              'option',
              {
                value: '2',
                checked: _common.FORM_DATA.select === '2',
              },
              'select option1'
            ),
            /*#__PURE__*/ React.createElement(
              'option',
              {
                value: '3',
                checked: _common.FORM_DATA.select === '3',
              },
              'select option1'
            )
          )
        ),
        /*#__PURE__*/ React.createElement(
          'small',
          null,
          '\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.'
        )
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'box',
        },
        /*#__PURE__*/ React.createElement(
          'fieldset',
          null,
          /*#__PURE__*/ React.createElement(
            'legend',
            null,
            'textarea',
            /*#__PURE__*/ React.createElement(
              'span',
              {
                class: 'require',
              },
              '*'
            )
          ),
          /*#__PURE__*/ React.createElement(
            'textarea',
            {
              name: 'textarea',
            },
            '$',
            _common.FORM_DATA.textarea || ''
          )
        ),
        /*#__PURE__*/ React.createElement(
          'small',
          null,
          '\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.'
        )
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'buttons',
        },
        /*#__PURE__*/ React.createElement(
          'button',
          {
            type: 'button',
            class: 'prev',
            'data-navigate': '',
          },
          '\uB4A4\uB85C'
        ),
        /*#__PURE__*/ React.createElement(
          'button',
          {
            type: 'button',
            id: 'validationBtn',
            class: 'submit',
            'data-navigate': '/3',
          },
          '\uC81C\uCD9C'
        ),
        /*#__PURE__*/ React.createElement(
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
