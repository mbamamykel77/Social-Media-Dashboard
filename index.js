let toggleBtn = document.querySelector('.toggle')
let body = document.querySelector('body')
let media = document.querySelector('#media')
// let grey1 = document.querySelector('.grey1')
// let grey2 = document.querySelector('.grey2')
// let cardDiv = document.querySelectorAll('.card')


toggleBtn.addEventListener('change', () => {
    body.classList.toggle('light');
  })

// toggleBtn.addEventListener('click', function(){
//     if (!buttonClicked) {
//         body.style.backgroundColor = 'white'
//         media.style.color = 'black'
//         grey1.style.color = 'hsl(228, 12%, 44%)'
//         grey2.style.color = 'hsl(228, 12%, 44%)'
//         for (let i = 0; i < card.length; i++){
//             card.style.backgroundColor = 'red'
//     }
//     }
//     else{
//         body.style.backgroundColor = 'green'
//     }
// })



// let lightMode = false;

//   toggleBtn.addEventListener('click', function(){
//     if(!lightMode){
//     // body.classList.toggle('light');
//     body.style.backgroundColor = 'white'
//     media.style.color = 'black'
//     } else if (lightMode){
//         body.classList.remove('light');
//         media.style.color = 'red'
//         // body.style.backgroundColor = 'black'
//     }
//   });

