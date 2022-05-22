const createCalculator = (count) => {
  let num = 0;

  return {
    set: (num) => (count = num),
    add: (num) => (count += num),
    sub: (num) => (count -= num),
    mult: (num) => (count *= num),
    div: (num) => (count /= num),
  };
};

module.exports = createCalculator();
