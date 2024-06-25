## mission-4

Diff 알고리즘 적용해서 속성이나 태그를 업데이트하도록 해보자.

## updateElement를 만들어보자

updateElement(parent newNode, oldNode)에서는 태그들을 비교해서 변경된 부분에 대해 **수정/추가/삭제** 할 수 있어야한다. 어떤 조건이 있을지 알아보자

- oldNode만 있는 경우는 oldNode를 parent에서 제거해야된다.
- newNode만 있는 경우는 newNode를 parent에 추가한다.
- oldNode와 newNode 모두 text 타입일 경우에는 oldNode와 newNode의 내용이 다르면, Old의 내용을 newNode의 내용으로 교체
- oldNode와 newNode의 타입이 다른경우에는 oldNode를 제거하고, 해당 위치에 newNode로 채운다.
- oldNode와 newNode의 타입이 똑같은 경우
  - oldNode와 newNode의 attribute를 비교해 변경된 부분만 반영
  - oldNode의 attribute 중 newNode에 없는 것은 모두 제거
  - newNode의 attribute에서 변경된 내용만 oldNode의 attribute에 반영

이렇게 위 과정을 diff 알고리즘을 아용해 모든 자식 태그를 순회하며 반복하면 될듯하다.
