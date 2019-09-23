function BTS(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BTS.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BTS(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BTS(value);
    else this.right.insert(value);
  }
};

BTS.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

var bst = new BTS(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.contains(105));
