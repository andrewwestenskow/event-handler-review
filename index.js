console.log(`GOOD MORNING`)

const funDip = document.getElementById('fun-dip')

//Change styles directly

funDip.addEventListener('click', e => {
  funDip.style.height = '500px'
  funDip.style.width = '500px'

  if (funDip.style.backgroundColor === 'rgb(186, 218, 85)') {
    funDip.style.backgroundColor = 'aqua'
  } else {
    funDip.style.backgroundColor = '#bada55'
  }
})

funDip.addEventListener('mouseenter', e => {
  funDip.style.backgroundColor = 'purple'
})

funDip.addEventListener('mouseleave', e => {
  funDip.style.backgroundColor = 'aqua'
})

//Swap class names

const snickers = document.querySelector('.snickers')

snickers.addEventListener('click', handleOpen)

function handleOpen() {
  snickers.classList.toggle('open')
  if (snickers.innerText !== 'SATISFIED') {
    snickers.innerText = 'SATISFIED'
  } else {
    snickers.innerText = `You're not you when you're hungry`
  }
}
