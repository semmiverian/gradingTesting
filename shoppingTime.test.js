const shoppingTime = require('./shoppingTime')

describe('Shopping time function', () => {
  it('should return a function', () => {
    expect(shoppingTime).toBeInstanceOf(Function)
  })

  it('should throw error when member id is an empty string', () => {
    const result = shoppingTime('', 2475000)

    expect(result).toBe('Mohon maaf, toko X hanya berlaku untuk member saja')
  })

  it('should throw error when call a function without an arguments', () => {
    const result = shoppingTime()
    expect(result).toBe('Mohon maaf, toko X hanya berlaku untuk member saja')
  })

  it('should return correct data for test case 1 with member id 1820RzKrnWn08 and money 2475000', () => {
    const result = shoppingTime('1820RzKrnWn08', 2475000)

    expect(result).toBeInstanceOf(Object)

    expect(result).toMatchObject({
      memberId: '1820RzKrnWn08',
      money: 2475000,
      listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
      changeMoney: 0
    })

    // expect(result.memberId).toBe('1820RzKrnWn08')
    // expect(result.money).toBe(2475000)
    expect(result.listPurchased).toBeInstanceOf(Array)
    // expect(result.listPurchased).toEqual([
    //   'Sepatu Stacattu',
    //   'Baju Zoro',
    //   'Baju H&N',
    //   'Sweater Uniklooh',
    //   'Casing Handphone'
    // ])

    // expect(result.changeMoney).toBe(0)
  })

  it('should return correct data for test case 2 with member id 82Ku8Ma742 and money 170000', () => {
    const result = shoppingTime('82Ku8Ma742', 170000)

    expect(result).toBeInstanceOf(Object)

    expect(result).toMatchObject({
      memberId: '82Ku8Ma742',
      money: 170000,
      listPurchased: ['Casing Handphone'],
      changeMoney: 120000
    })

    // expect(result.memberId).toBe('82Ku8Ma742')
    // expect(result.money).toBe(170000)
    expect(result.listPurchased).toBeInstanceOf(Array)
    // expect(result.listPurchased).toEqual(['Casing Handphone'])

    // expect(result.changeMoney).toBe(120000)
  })

  it('should throw error when money is insufficient', () => {
    const result = shoppingTime('234JdhweRxa53', 15000)

    expect(result).toBe('Mohon maaf, uang tidak cukup')
  })
})
