'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = page1;
function page1() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'header',
      null,
      React.createElement('div', {
        className: 'bgPurple',
      }),
      React.createElement('h1', null, 'Survey'),
      React.createElement(
        'strong',
        {
          className: 'require',
        },
        '* \uD45C\uC2DC\uB294 \uD544\uC218 \uC9C8\uBB38\uC784'
      )
    ),
    React.createElement(
      'form',
      {
        name: 'form',
        id: 'form1',
        method: 'post',
      },
      React.createElement(
        'div',
        {
          className: 'box',
        },
        React.createElement(
          'fieldset',
          null,
          React.createElement(
            'legend',
            null,
            'radio input',
            React.createElement(
              'span',
              {
                className: 'require',
              },
              '*'
            )
          ),
          React.createElement(
            'div',
            {
              className: 'fieldBox',
            },
            React.createElement(
              'label',
              null,
              React.createElement('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio1',
                checked: true,
              }),
              'radio option1'
            )
          ),
          React.createElement(
            'div',
            {
              className: 'fieldBox',
            },
            React.createElement(
              'label',
              null,
              React.createElement('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio2',
                checked: true,
              }),
              'radio option2'
            )
          ),
          React.createElement(
            'div',
            {
              className: 'fieldBox',
            },
            React.createElement(
              'label',
              null,
              React.createElement('input', {
                type: 'radio',
                name: 'radio',
                value: 'radio3',
                checked: true,
              }),
              'radio option3'
            )
          )
        ),
        React.createElement(
          'small',
          null,
          '\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.'
        )
      ),
      React.createElement(
        'div',
        {
          className: 'box',
        },
        React.createElement(
          'fieldset',
          null,
          React.createElement(
            'legend',
            null,
            'checkbox input',
            React.createElement(
              'span',
              {
                className: 'require',
              },
              '*'
            )
          ),
          React.createElement(
            'div',
            {
              className: 'fieldBox',
            },
            React.createElement(
              'label',
              null,
              React.createElement('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox1',
                checked: true,
              }),
              'checkbox option1'
            )
          ),
          React.createElement(
            'div',
            {
              className: 'fieldBox',
            },
            React.createElement(
              'label',
              null,
              React.createElement('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox2',
                checked: true,
              }),
              'checkbox option2'
            )
          ),
          React.createElement(
            'div',
            {
              className: 'fieldBox',
            },
            React.createElement(
              'label',
              null,
              React.createElement('input', {
                type: 'checkbox',
                name: 'checkbox',
                value: 'checkbox3',
                checked: true,
              }),
              'checkbox option3'
            )
          )
        ),
        React.createElement(
          'small',
          null,
          '\u203B \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.'
        )
      ),
      React.createElement(
        'div',
        {
          className: 'buttons',
        },
        React.createElement(
          'button',
          {
            type: 'button',
            id: 'validationBtn',
            className: 'next',
            'data-navigate': '#/2',
          },
          '\uB2E4\uC74C'
        ),
        React.createElement(
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
