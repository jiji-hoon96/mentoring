function h(type, props, ...children) {
  return { type, props, children };
}
const vm = h(
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
              checked: true,
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
              checked: true,
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
              checked: true,
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
              checked: true,
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
              checked: true,
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
              checked: true,
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
const $root = document.body.querySelector('#root');

$root.innerHTML = `
<pre>${JSON.stringify(vm, null, 2)}</pre>
`;
