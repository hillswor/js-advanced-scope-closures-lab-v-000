function produceDrivingRange(blockRange) {
  return function (blockOne, blockTwo) {
    let range = parseInt(blockTwo) - parseInt(blockOne);

    if (range < blockRange) {
      return `within range by ${blockRange - range}`
    } else {
      return `${range - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(total) {
    return total * tipPercent
  }
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
