const processaFizzBuzz = require('./fizzBuzz')

describe('FizzBuzz', () => {
  it('Deve receber um número inteiro e retornar o mesmo número', () => {
    expect(processaFizzBuzz(1)).toEqual(1)

  }) 

  it('Deve receber um número inteiro múltiplo de 3 e retornar a string Fizz', () => {
    expect(processaFizzBuzz(3)).toEqual('Fizz')
  })

  it('Deve receber um número inteiro múltiplo de 5 e retornar a string Buzz', () => {
    expect(processaFizzBuzz(5)).toEqual('Buzz')
  })

  it('Deve receber um número inteiro múltiplo de 3 e 5 e retornar a string FizzBuzz', () => {
    expect(processaFizzBuzz(15)).toEqual('FizzBuzz')
  })
})