function processaFizzBuzz(numero) {
  const FIZZ ='Fizz'
  const BUZZ = 'Buzz'
  if(numero%3 === 0 && numero%5 === 0){
    return FIZZ + BUZZ
  }
  if(numero%3 ===0){
    return FIZZ
  }
  if(numero%5 ===0){
    return BUZZ
  }
  
  return numero
}

module.exports = processaFizzBuzz