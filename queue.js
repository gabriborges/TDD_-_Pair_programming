class Queue {
  elements
  constructor(){
    this.elements = []
  }

  queuePush(element){
    this.elements.push(element)
  }

  queuePushReturn(element){
    this.elements.push(element)
    return element
  }

  queueSize(){
    return this.elements.length
  }

  queueFirst(){
    return this.elements[0]
  }

  queueRemoveFirst(){
    return this.elements.shift()
  }

}

module.exports = Queue