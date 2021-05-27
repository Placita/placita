const eat = document.getElementById('eat')
const drink = document.getElementById('drink')
const visit = document.getElementById('visit')

eat.addEventListener('mouseenter', () => {
  eat.innerHTML = 'Comer'
})

eat.addEventListener('mouseleave', () => {
  eat.innerHTML = 'Eat'
})

drink.addEventListener('mouseenter', () => {
  drink.innerHTML = 'Tomar'
})

drink.addEventListener('mouseleave', () => {
  drink.innerHTML = 'Drink'
})

visit.addEventListener('mouseenter', () => {
  visit.innerHTML = 'Visitar'
})

visit.addEventListener('mouseleave', () => {
  visit.innerHTML = 'Visit'
})
