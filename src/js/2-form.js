const form = document.querySelector('.feedback-form');
let state = {};
if (localStorage.length > 0) {
  state = JSON.parse(localStorage.getItem('feedback-form-state'));  
  form.email.value = state.email ?? '';
  form.message.value = state.message ?? '';
}

form.addEventListener('input', inputHandler);
function inputHandler(evt) {
  state[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}

form.addEventListener('submit', submitHandler);
function submitHandler(evt) {
  evt.preventDefault();
  if (!(form.email.value && form.message.value)) {
    alert('all fielsd must be filled up');
  }else{
    console.log(state);
    localStorage.clear();
    form.reset();
  }
  
}
