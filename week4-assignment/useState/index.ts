let hooks: any[] = [];
let idx = 0;

function useState<T>(initVal: T): [T, (newVal: T) => void] {
  const state = hooks[idx] || initVal;
  const _idx = idx;
  const setState = (newVal: T) => {
    hooks[_idx] = newVal;
  };
  idx++;
  return [state, setState];
}
