export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, msg) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, 3000);
};
