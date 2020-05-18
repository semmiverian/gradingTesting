function shoppingTime(memberId, money) {
  const shoppingCart = [
    {
      product: 'Sepatu Stacattu',
      price: 1500000
    },
    {
      product: 'Baju Zoro',
      price: 500000
    },
    {
      product: 'Baju H&N',
      price: 250000
    },
    {
      product: 'Sweater Uniklooh',
      price: 175000
    },
    {
      product: 'Casing Handphone',
      price: 50000
    }
  ]

  let result = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: money
  }

  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    if (result.money > shoppingCart[i].price) {
      result.listPurchased.push(shoppingCart[i].product)
      result.changeMoney -= shoppingCart[i].price
    }
  }

  if (result.listPurchased.length === 0) {
    return 'Mohon maaf, uang tidak cukup'
  }

  return result
}

module.exports = shoppingTime
