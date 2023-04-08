let toggleBtn = document.querySelector('.toggle')
let body = document.querySelector('body')
// let media = document.querySelector('#media')
// let grey1 = document.querySelector('.grey1')
// let grey2 = document.querySelector('.grey2')
// let cardDiv = document.querySelectorAll('.card')


toggleBtn.addEventListener('change', () => {
    body.classList.toggle('light-theme');
  })


