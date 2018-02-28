var secretPassword = 'DOMCONTENTLOADED'
let checkbox = document.querySelector("input[name=checkbox]")
const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (document.querySelector('#password').value.length > 8) {
      if (checkbox.checked && document.querySelector('#password').value === secretPassword) {
          document.querySelector('.alert-admin-success').classList.remove('d-none')
        }
      else if(checkbox.checked && document.querySelector('#password').value !== secretPassword){
          document.querySelector('.alert-admin-fail').classList.remove('d-none')
        }
      else {
        document.querySelector('.alert-success').classList.remove('d-none')
      }
    } else {
      document.querySelector('.alert-danger').classList.remove('d-none')
    }
});

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    document.querySelector('.alert-admin').classList.remove('d-none')

  } else {
    document.querySelector('.alert-admin').classList.add('d-none')

  }
});
