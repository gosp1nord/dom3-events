export default class HittingGoblin {
  constructor(field, moving) {
    this.playingField = field;
    this.fullCountHit = 0;
    this.countSuccess = 0;
    this.hitGoblin = this.hitGoblin.bind(this);
    this.playingField.addEventListener('click', this.hitGoblin);
    this.moving = moving;
  }

  hitGoblin(event) {
    const element = event.target;
    if (element.classList.contains('img-cell')) {
      this.countSuccess += 1;
      element.closest('.cell').innerHTML = '';
      document.querySelector('.count').innerText = this.countSuccess;
    } else {
      this.fullCountHit += 1;
    }
    if (this.fullCountHit === 5) {
      document.querySelector('.info').innerText = 'Игра окончена';
      clearInterval(this.moving);
      this.playingField.removeEventListener('click', this.hitGoblin);
    }
  }
}
