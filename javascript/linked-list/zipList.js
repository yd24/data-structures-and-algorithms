'use strict';

function zipList(list1, list2) {
  let current = list1.head;
  let current2 = list2.head;
  let list1Next, list2Next, prev;

  while (current !== null && current2 !== null) {
    prev = current2;
    list1Next = current.next;
    list2Next = current2.next;

    current2.next = list1Next;
    current.next = current2;

    current = list1Next;
    current2 = list2Next;
  }
  if (current2) {
    prev.next = current2;
  }
  return list1;
}

module.exports = zipList;
