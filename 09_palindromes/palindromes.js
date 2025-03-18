const palindromes = function (word) {
  word = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const drow = word
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .reverse()
    .join("");
  return word === drow;
};

// Do not edit below this line
module.exports = palindromes;
