const eat = document.getElementById('eat')

eat.addEventListener('mouseenter', () => {
  eat.innerHTML = 'Comer'
  // eat.style.fontSize = '50px'
  console.log(eat.style.fontSize)
})

eat.addEventListener('mouseleave', () => {
  eat.innerHTML = 'Eat'
})
