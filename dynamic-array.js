class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    // Your code here

  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    let arr = new Array(this.length+1);
    arr[0] = val;
    for (let i = 0; i < this.length; i++) {
      arr[i+1] = this.data[i]
    }
    console.log(arr);
    this.length = arr.length;
    this.data = arr;
  }

}


module.exports = DynamicArray;
