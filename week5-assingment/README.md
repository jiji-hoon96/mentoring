## 기능 구현 목록

- [ ] Call Stack 구현
- [ ] Microtask Queue 구현
  - [ ] Promise, async/await, process.nextTick, Object.observe, MutationObserver 과 같은 비동기 호출을 넘겨받음
  - [ ] 우선순위가 Task Queue 보다 높다
  - [ ] FIFO(First In First Out) 형태로 실행된다
  - [ ] await 을 만나면 작업을 중지하고 Microtask Queue 에 적재
- [ ] Macrotask Queue 구현
  - [ ] setTimeout(), setInterval(), setImmediate() 와 같은 task 를 넘겨받음

> 화면 UI는 [yiseo0님의 오픈소스를 참고했습니다.](https://github.com/yiseo0) 감사합니다!
