export const createDropDowns = (menuDiv) => {
  const dropDownElements = document.querySelectorAll(
    `#${menuDiv.id} .drop-down-list-element`
  );
  menuDiv.onclick = () => {
    dropDownElements.forEach((element) => {
      element.classList.add('active');
    });
  };
  window.onclick = function (event) {
    if (
      !event.target.matches(`#${menuDiv.id} .drop-down-trigger`) &&
      !event.target.matches(`#${menuDiv.id} .drop-down-list-element`)
    ) {
      dropDownElements.forEach((element) => element.classList.remove('active'));
    }
  };
};
