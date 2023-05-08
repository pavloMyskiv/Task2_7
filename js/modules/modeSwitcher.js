export const modeSwitcher = () => {
  const modeButton = document.querySelector('.mode_button');
  const body = document.querySelector('body');

  const switchMode = (flag) => {
    if (flag) {
      modeButton.classList.remove('dark_mode');
      document.documentElement.style.setProperty('--main-color', '#333333');
      document.documentElement.style.setProperty(
        '--main-background',
        '#eaeaea'
      );
      localStorage.setItem('dark_mode', 'disactive');
      modeButton.textContent = 'Dark mode';
    } else {
      modeButton.classList.add('dark_mode');
      document.documentElement.style.setProperty('--main-color', '#eaeaea');
      document.documentElement.style.setProperty(
        '--main-background',
        '#333333'
      );
      localStorage.setItem('dark_mode', 'active');
      modeButton.textContent = 'White mode';
    }
  };

  switchMode(localStorage.getItem('dark_mode') != 'active');

  modeButton.addEventListener('click', () => {
    switchMode(modeButton.classList.contains('dark_mode'));
  });
};
