function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function searchNewPosition(playingField) {
  const elements = playingField.querySelectorAll('.cell');
  const elementImg = playingField.querySelector('.img-cell');
  let oldElement = '';
  if (elementImg) {
    oldElement = elementImg.closest('.cell');
  }

  while (true) {
    const index = getRandomInt(1, elements.length);
    if (elements[index] !== oldElement) {
      return elements[index];
    }
  }
}
