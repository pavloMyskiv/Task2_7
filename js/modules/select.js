export const select = () => {
  const selectHeader = document.querySelector('.select_header');
  const selectItems = document.querySelectorAll('.select_item');

  const selectToogle = () => {
    selectHeader.parentElement.classList.toggle('is_active');
  };
  const selectCurrent = (item) => {
    const value = item.innerText;
    const current = item
      .closest('.select')
      .querySelector('.select_current_value');
    current.innerText = value;
    return value;
  };

  selectHeader.addEventListener('click', () => {
    selectToogle();
  });

  selectItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      selectToogle();
      selectCurrent(event.target);
    });
  });
};
