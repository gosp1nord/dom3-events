import searchNewPosition from './search';

export default class ControlGoblin {
  constructor(field) {
    this.playingField = field;
  }

  movieGoblin() {
    const newPosition = searchNewPosition(this.playingField);
    const elementImg = this.playingField.querySelector('.img-cell');
    if (elementImg) {
      elementImg.closest('.cell').innerHTML = '';
    }
    const item = document.createElement('img');
    item.setAttribute('src', './images/goblin.png');
    item.setAttribute('class', 'img-cell');
    newPosition.insertAdjacentElement('afterbegin', item);
  }
}
