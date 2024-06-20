'use strict';

/** @jsx h */

function h(type, props) {
  for (
    var _len = arguments.length,
      children = new Array(_len > 2 ? _len - 2 : 0),
      _key = 2;
    _key < _len;
    _key++
  ) {
    children[_key - 2] = arguments[_key];
  }
  return {
    type: type,
    props: props,
    children: children,
  };
}
function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  var type = node.type,
    props = node.props,
    children = node.children;
  var element = document.createElement(type);
  Object.keys(props || {}).forEach(function (key) {
    if (key.startsWith('on') && typeof props[key] === 'function') {
      element.addEventListener(key.substring(2).toLowerCase(), props[key]);
    } else if (key === 'className') {
      element.setAttribute('class', props[key]);
    } else if (key === 'checked' && props[key]) {
      element.setAttribute(key, '');
    } else {
      element.setAttribute(key, props[key]);
    }
  });
  (children || []).forEach(function (child) {
    element.appendChild(createElement(child));
  });
  return element;
}
var FORM_DATA = {
  radio: 'radio1',
  checkbox: ['checkbox1'],
};
var options = {
  radio: [
    {
      value: 'radio1',
      label: 'radio option1',
    },
    {
      value: 'radio2',
      label: 'radio option2',
    },
    {
      value: 'radio3',
      label: 'radio option3',
    },
  ],
  checkbox: [
    {
      value: 'checkbox1',
      label: 'checkbox option1',
    },
    {
      value: 'checkbox2',
      label: 'checkbox option2',
    },
    {
      value: 'checkbox3',
      label: 'checkbox option3',
    },
  ],
};
var vm = createElement(
  h(
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
          options.radio.map(function (option) {
            return h(
              'div',
              {
                className: 'fieldBox',
                key: option.value,
              },
              h(
                'label',
                null,
                h('input', {
                  type: 'radio',
                  name: 'radio',
                  value: option.value,
                  checked: FORM_DATA.radio === option.value,
                }),
                option.label
              )
            );
          })
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
          options.checkbox.map(function (option) {
            return h(
              'div',
              {
                className: 'fieldBox',
                key: option.value,
              },
              h(
                'label',
                null,
                h('input', {
                  type: 'checkbox',
                  name: 'checkbox',
                  value: option.value,
                  checked: FORM_DATA.checkbox.includes(option.value),
                }),
                option.label
              )
            );
          })
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
  )
);
var $root = document.body.querySelector('#root');
$root.appendChild(vm);
