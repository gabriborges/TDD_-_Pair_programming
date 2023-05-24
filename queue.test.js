const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    queue.queuePush('elemento')
    expect(queue.queueSize()).toBe(1)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    expect(queue.queuePushReturn('FirstElement')).toBe('FirstElement')
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.queuePush('elemento')
    expect(queue.queueFirst()).toBe('elemento')
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.queuePush('elemento')
    expect(queue.queueRemoveFirst()).toBe('elemento')
  })
})