'use strict';

function zipList(list1, list2) {
  let current = list1.head;
  let current2 = list2.head;
  let hold = null;

  while (current.next && current2.next) {
    hold = current2;
    hold.next = current.next;
    current.next = hold;
    current = current.next.next;
    current2 = current2.next;
  }
  return list1;
}

module.exports = zipList;
