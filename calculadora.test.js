const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()
    expect(calculadora.soma(2,2)).toBe(4)
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.subtracao(2,2)).toBe(0)
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.divisao(6,2)).toBe(3)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.multiplicacao(4,2)).toBe(8)
  })
})