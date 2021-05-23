const eat = document.getElementById('eat')
const drink = document.getElementById('drink')
const visit = document.getElementById('visit')

eat.addEventListener('mouseenter', () => {
  eat.innerHTML = 'Comer'
  eat.style.fontSize = '50px'
})

eat.addEventListener('mouseleave', () => {
  eat.innerHTML = 'Eat'
  eat.style.fontSize = '64px'
})

drink.addEventListener('mouseenter', () => {
  drink.innerHTML = 'Beber'
  drink.style.fontSize = '50px'
})

drink.addEventListener('mouseleave', () => {
  drink.innerHTML = 'Drink'
  drink.style.fontSize = '64px'
})

visit.addEventListener('mouseenter', () => {
  visit.innerHTML = 'Visitar'
  visit.style.fontSize = '50px'
})

visit.addEventListener('mouseleave', () => {
  visit.innerHTML = 'Visit'
  visit.style.fontSize = '64px'
})
