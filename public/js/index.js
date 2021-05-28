const eat = document.getElementById('eat')
const drink = document.getElementById('drink')
const visit = document.getElementById('visit')

eat.parentNode.parentNode.addEventListener('mouseenter', () => {
  eat.innerHTML = 'Comer'
  eat.style.fontSize = '50px'
})

eat.parentNode.parentNode.addEventListener('mouseleave', () => {
  eat.innerHTML = 'Eat'
  eat.style.fontSize = '64px'
})

drink.parentNode.parentNode.addEventListener('mouseenter', () => {
  drink.innerHTML = 'Tomar'
  drink.style.fontSize = '50px'
})

drink.parentNode.parentNode.addEventListener('mouseleave', () => {
  drink.innerHTML = 'Drink'
  drink.style.fontSize = '64px'
})

visit.parentNode.parentNode.addEventListener('mouseenter', () => {
  visit.innerHTML = 'Visitar'
  visit.style.fontSize = '50px'
})

visit.parentNode.parentNode.addEventListener('mouseleave', () => {
  visit.innerHTML = 'Visit'
  visit.style.fontSize = '64px'
})
