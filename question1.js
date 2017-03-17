class Hash {
  constructor(object) {
    Object.assign(this, object);
  }

  isEmpty() {
    return Object.keys(this).length === 0;
  }
  merge(source) {
  return new Hash(Object.assign({}, this, source))
  }
  hasKey(str) {
    return this.hasOwnProperty(str);
  }
  invert() {
    let newHash = {}
    for (let key in this) {
      let value = this[key]
      newHash[value] = key
    }
    return new Hash(newHash)
  }
  inspect() {
    let a = JSON.stringify(this).split(':').join(' => ');
    return a;
  }
  keys() {
    return Object.keys(this)
  }
  value() {
    return Object.values(this)
  }
}

let emptyHash = new Hash({})
let h1 = new Hash({a: 1, b: 2, c: 3})
let merged = h1.merge({bob: 'yo', jane: 'ya'})

console.log(1,merged !== Hash)
console.log(2, merged)
console.log(3, merged.hasKey("bob"))
console.log(4, emptyHash.isEmpty())
console.log(5, h1.isEmpty());
console.log(6, h1.merge({d: 4, e: 5, f: 6}));
console.log(7, h1.hasKey("a"))
console.log(8,h1.hasKey("z"))
console.log(9,h1.inspect())
console.log(10,h1.keys())
console.log(11, h1.value())
console.log(12,h1.invert())
