class Stack {
  constructor(array) {
  this.array = array
  }
}

class Queue {
  constructor(array) {
  this.array = array
  }
}

Stack.prototype.add = function(array) { (this.array.push(array)) }
Stack.prototype.remove = function(){ (this.array.pop()) }

Queue.prototype.add = function(array) { (this.array.push(array)) }
Queue.prototype.remove = function() { (this.array.shift()) }

s = new Stack([1, 2, 3, 4])
q = new Queue([1, 2, 3, 4])

s.add(5)
console.log(s)
s.remove()
console.log(s)

q.add(5)
console.log(q)
q.remove()
console.log(q)
