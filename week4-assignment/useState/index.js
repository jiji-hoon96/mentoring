const React = (function () {
  let hooks = [];
  let idx = 0;
  function useState(initVal) {
    const state = hooks[idx] || initVal;
    const _idx = idx;
    const setState = (newVal) => {
      hooks[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }
  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }
  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [humanName, setHumanName] = React.useState("default");
  return {
    render: () => console.log(count, humanName),
    click: () => setCount(count + 1),
    changeName: (name) => setHumanName(name),
  };
}

var App = React.render(Component);
App.click();
App.changeName("jihoon");
var App = React.render(Component);
