console.log(`GOOD MORNING`)

const funDip = document.querySelector('.fun-dip')

funDip.addEventListener('click', e => {
  funDip.classList.toggle('class-4')
  funDip.classList.toggle('blue')
  funDip.classList.toggle('green')
})

funDip.addEventListener('mouseenter', e => {
  funDip.style.backgroundColor = 'purple'
})

funDip.addEventListener('mouseleave', e => {
  funDip.style.backgroundColor = 'aqua'
})
