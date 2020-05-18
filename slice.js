function slice(data, start = 0, end = data.length) {

  const result = []

  for (let i = start; i < end; i++) {
    result.push(data[i])
  }

  return result

}

module.exports = slice
