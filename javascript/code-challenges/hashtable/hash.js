const LinkedList = require('../../linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    //* convert our string into a number, using the ascii value.
    let sum = 0;
    for (let idx in key) {
      sum += key.charCodeAt(idx);
    }

    //  * multiply by some large prime number.
    //* return the modulo of the size by the large number.
    return (sum * 599) % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    if (!this.buckets[position]){
      this.buckets[position] = new LinkedList();
    }
    let entry = {[key]: value};
    this.buckets[position].append(entry);
  }

  /**
   * @param {string} key
   */
  get(key) {
    let position = this.hash(key);
    if (this.buckets[position]){
      let current = this.buckets[position].head;
      while (current !==null){
        if (Object.keys(current.value)[0] === key) {
          return current.value[key];
        }
        else{
          current = current.next;
        }
      }
    }
    return null;
  }

  has(key) {
    let position = this.hash(key);
    if (this.buckets[position]){
      return true;
    }
    return false;
  }

  keys(){
    let keyArr = [];
    let idx = 0;
    for (let item of this.buckets){
      if (item !== undefined){
        let current = item.head;
        while(current!== null) {
          keyArr[idx] = Object.keys(current.value)[0];
          current = current.next;
          idx += 1;
        }
      }
    }
    return keyArr;
  }
}

module.exports = HashTable;
