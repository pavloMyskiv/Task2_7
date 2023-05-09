export const modeSwitcher = () => {
  const modeButton = document.querySelector('.mode_button');
  const body = document.querySelector('body');

  const switchMode = (flag) => {
    if (flag) {
      body.classList.remove('dark_mode');
      localStorage.setItem('dark_mode', 'disactive');
      modeButton.textContent = 'Dark mode';
    } else {
      body.classList.add('dark_mode');
      localStorage.setItem('dark_mode', 'active');
      modeButton.textContent = 'White mode';
    }
  };

  switchMode(localStorage.getItem('dark_mode') != 'active');

  modeButton.addEventListener('click', () => {
    switchMode(body.classList.contains('dark_mode'));
  });
};
