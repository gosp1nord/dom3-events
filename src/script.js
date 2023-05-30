import ControlGoblin from './changeImg';
import HittingGoblin from './hitting_goblin';

document.addEventListener('DOMContentLoaded', () => {
  const goblin = new ControlGoblin(document.querySelector('.table'));
  const moving = setInterval(() => {
    goblin.movieGoblin();
  }, 1000);

  const molotTora = new HittingGoblin(document.querySelector('.table'), moving);
  return molotTora;
});
