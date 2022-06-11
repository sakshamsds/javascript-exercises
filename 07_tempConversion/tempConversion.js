const ftoc = function (f) {
  return Math.round((5 * (f - 32) / 9) * 10) / 10;
};

const ctof = function (c) {
  return Math.round((32 + 9 * c / 5) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
