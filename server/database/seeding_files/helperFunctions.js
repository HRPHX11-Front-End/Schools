const getRandomElement = (array) => {
  const randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
};

const generateRandomReviewCount = () => {
  return Math.floor(Math.random() * 11);
}

module.exports = { getRandomElement, generateRandomReviewCount }