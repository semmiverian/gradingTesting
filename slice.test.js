const slice = require('./slice')

describe('slice test case', () => {
  it('should return a function', () => {
    expect(slice).toBeInstanceOf(Function)
  })

  it(`should slice from index 2 until end when only sent 2 paramter with data ['ant', 'bison', 'camel', 'duck', 'elephant']`, () => {
    const result = slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)

    expect(result).toBeInstanceOf(Array)
    expect(result).toEqual(['camel', 'duck', 'elephant'])
  })

  it(`should slice from index 2 to end 4 with data ['ant', 'bison', 'camel', 'duck', 'elephant']`, () => {
    const result = slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)

    expect(result).toBeInstanceOf(Array)
    expect(result).toEqual(['camel', 'duck'])
  })

  it(`should slice from index 1 to end 5 with data ['ant', 'bison', 'camel', 'duck', 'elephant']`, () => {
    const result = slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)

    expect(result).toBeInstanceOf(Array)
    expect(result).toEqual([ 'bison', 'camel', 'duck', 'elephant'])
  })

  it(`should slice from 0 to end of data when only send one parameter with data ['ant', 'bison', 'camel', 'duck', 'elephant']`, () => {
    const result = slice(['ant', 'bison', 'camel', 'duck', 'elephant']) 
    expect(result).toBeInstanceOf(Array)
    expect(result).toEqual([ 'ant', 'bison', 'camel', 'duck', 'elephant' ])
  })

  it(`should return empty array when start index is greater than length of the data`, () => {
    const result = slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)
    expect(result).toBeInstanceOf(Array)
    expect(result).toEqual([])
  })

  // console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]
})
