var canPlaceFlowers = function(flowerbed, n) {
  let num = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
      num += 1
    }  
    if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i-1] === 0) {
      num += 1
    }
    if (flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
      num += 1
    }
  }
  return n <= num
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0, 1, 0, 0], 1))